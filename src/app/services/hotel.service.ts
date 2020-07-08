import { Injectable } from '@angular/core';
// import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as dateFns from "date-fns";
import isEqual from 'lodash-es/isEqual';
import { BehaviorSubject, Subject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { ApplicationState } from '../states/application.state';
import { DATE_FORMAT, DEFAULT_ADULTS_AMOUNT } from '../constants/general.constants';


@Injectable({
  providedIn: 'root'
})
export class HotelService {

  public hotelUrl = '';
  public hotel_id = '';
  public hotel = {};
  public acessToken;
  public dates$: BehaviorSubject<{
    from: string;
    to: string;
  }> = new BehaviorSubject({
    from: dateFns.format(new Date(), DATE_FORMAT),
    to: dateFns.format(new Date(), DATE_FORMAT)
  });

  public guests$: BehaviorSubject<{
    adults: number;
    children: number;
    kidsAge: Array<number>;
  }> = new BehaviorSubject({
    adults: DEFAULT_ADULTS_AMOUNT,
    children: 0,
    kidsAge: []
  });

  public userInfo$: BehaviorSubject<{
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    avatar_url: string;
  }> = new BehaviorSubject({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    avatar_url: ''
  });

  public dateGuests$: Subject<{
    checkin: string;
    checkout: string;
    adults: number;
    children: string;
    kidsAge: Array<any>;
  }> = new Subject();

  public requestData$: Subject<any> = new Subject();


  constructor(
    // private router: Router,
    private store: Store<ApplicationState>
  ) {
    this.setDefaultDates();
    this.store.select(state => state.filterState).
      pipe(
        distinctUntilChanged((prev, curr) => prev.from === curr.from && prev.to === curr.to && prev.adults === curr.adults && prev.children === curr.children && isEqual(prev.kidsAge, curr.kidsAge))
      )
      .subscribe(e => {
        this.dateGuests$.next({
          checkin: e.from,
          checkout: e.to,
          adults: e.adults,
          children: e.children,
          kidsAge: e.kidsAge
        });
      });
  }

  /**
   * @inheritDoc
   */
  public getHotelUrl() {
    return ['/a', this.hotelUrl];
  }

  /**
   * @param date
   */
  public static getFormatedDate(date) {
    return dateFns.format(date, DATE_FORMAT);
  }

  private setDefaultDates() {
    const dateTo = new Date();
    const dateFrom = new Date();

    dateTo.setTime(dateTo.getTime() + (48 * 60 * 60 * 1000));
    dateFrom.setTime(dateFrom.getTime() + (24 * 60 * 60 * 1000));

    this.dates$.next({
      from: HotelService.getFormatedDate(dateFrom),
      to: HotelService.getFormatedDate(dateTo)
    })
  }
}
