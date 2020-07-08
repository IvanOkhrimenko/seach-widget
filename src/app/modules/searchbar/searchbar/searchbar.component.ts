import { Component, EventEmitter, OnDestroy, OnInit, Output, ViewChild, Input } from '@angular/core';
// import { Router } from '@angular/router';
import { Subject } from 'rxjs/internal/Subject';
import { Store } from '@ngrx/store';
import * as dateFns from 'date-fns';
import cloneDeep from 'lodash-es/cloneDeep';
import first from 'lodash-es/first';
import isEmpty from 'lodash-es/isEmpty';
import isNil from 'lodash-es/isNil';
import maxBy from 'lodash-es/maxBy';
import { getDateFilterOpenEvent, getGuestsFilterOpenEvent } from '../../../store/reducers/event.reducer';
import { distinctUntilChanged, filter, map, switchMap, takeUntil } from 'rxjs/operators';

import { EventModel } from '../../../states/events.state';
import { FilterType, INITIAL_SEARCH_FILTER_STATE } from '../../../states/filter.state';
import { ApplicationState } from '../../../states/application.state';
import { LINK_TEMPLATE } from '../../../constants/template.constants';
import { StyleAggregatorPipe } from '../../../pipes/style-aggregator.pipe';
import { FilterState } from '../../../store/states/filter.state';


export interface Facility {
  id: number;
  name: string;
  selected: boolean;
  imgUrl: string;
}

export const HOTEL_STARS = 'HotelStars';
export const TOP_FACILITIES = 'TopFacilities';
export const GOOGLE_RATING = 'GoogleRating';
export const TAG = 'Tag';
export const CITY = 'City';
export const NIGHT = 'Night';

@Component({
  selector: 'hf-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: [
    './searchbar.component.scss'
  ]
})
export class SearchbarComponent implements OnInit, OnDestroy {

  @Input() engineId = '';
  @Input() domain = 'hotelfriend';

  className = "mainPage";
  @Output() showFilters: EventEmitter<any> = new EventEmitter();
  @Output() hideSearchResults = new EventEmitter();
  @Output() autoZoom = new EventEmitter();
  @Output() changeFilterState: EventEmitter<any> = new EventEmitter<any>();
  @Output() searchBookingEngine: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('textInput', { static: true }) textInput;
  @ViewChild('datePicker', { static: true }) datePicker;
  @ViewChild('roomsNumber', { static: true }) roomsNumber;
  @ViewChild('guestInput', { static: true }) guestInput;


  filterState: FilterState = INITIAL_SEARCH_FILTER_STATE;
  dpsOptions = {
    placeholder: 'Open Dates'
  };

  gOptionsShortSearch = {
    placeholder: 'guests',
    adults: 2
  };
  isSmallDisplay: boolean = false;
  destroy$ = new Subject();
  dpOptions: any;
  gOptions: any;
  filters: string;
  selectedFacilities: string[] = [];
  langUrlParam: string;
  stars: any[];
  relax: Facility[];
  allFilters = false;
  activeColor: string;
  searchIsEmpty: boolean = false;
  public collapseState: boolean = true;
  public tags: {
    placeholderLabel: string,
    placeholder: string,
    dropDownData: Array<string>
  };
  public nights: {
    placeholder: string,
    dropDownData: Array<string>
    placeholderIsAlwaysShown: boolean;
  };
  public googleRating: {
    placeholderLabel: string,
    placeholder: string,
    dropDownData: Array<string>
  };
  public hotelStars: {
    placeholderLabel: string,
    placeholder: string,
    dropDownData: Array<string>
  };
  public topFacilities: {
    placeholderLabel: string,
    placeholder: string,
    dropDownData: Array<string>
  };
  public topCities: {
    placeholderLabel: string,
    placeholder: string,
    dropDownData: Array<string>
  };
  public isChildBlockShow: boolean = true;
  public dateFrom: string = "";
  public dateTo: string = "";
  clickedTipSelect = false;
  public template = {
    link: LINK_TEMPLATE
  };


  readonly searchbarCollapseMatcherkey = 'searchbarCollapse';

  readonly collapseSensitiveFilters = [
    'cities',
    'facility',
    'google_rating',
    'hotel_stars',
    'min_price',
    'max_price'
  ];
  dates$: Subject<any> = new Subject();
  openDatePickerSelector$ = new Subject<boolean>();
  openGuestsSelector$ = new Subject<boolean>();
  private isMobile: boolean = false;

  constructor(
    // private router: Router,
    private store: Store<ApplicationState>,
    // private scoreComplitance: ScoreMatchingService,
    private styleAggregator: StyleAggregatorPipe
  ) {

    // this.langUrlParam = getLangStartLinkFromPath(this.router.url);
    this.activeColor = this.styleAggregator.transform(this.template.link).color;

    this.store
      .select(getDateFilterOpenEvent)
      .pipe(
        filter(e => !!e && e.length === 1),
        map(e => first(e)),
        takeUntil(this.destroy$),
        distinctUntilChanged(),
        switchMap((e: any) => {
          return e.event;
        }),
      )
      .subscribe((e) => {
        this.openDatePickerSelector$.next(true);
      });

    this.store
      .select(getGuestsFilterOpenEvent)
      .pipe(
        filter(e => !!e && e.length === 1),
        map(e => first(e)),
        takeUntil(this.destroy$),
        distinctUntilChanged(),
        switchMap((e: EventModel) => {
          return e.event;
        }),
      )
      .subscribe((e) => {
        this.openGuestsSelector$.next(true);
      });


  }

  ngOnInit() {
    this.store.select(state => state.filterState)
      .pipe(
        distinctUntilChanged((prev, curr) => (prev.from === curr.from && prev.to === curr.to) && (prev.adults === curr.adults) && (prev.children === curr.children) && (prev.kidsAge === curr.kidsAge)),
        takeUntil(this.destroy$),
      )
      .subscribe(resDates => {
        console.log(resDates)
        this.filterState['checkin'] = resDates.from;
        this.filterState['checkout'] = resDates.to;
        this.filterState['adults'] = resDates.adults;
        this.filterState['children'] = resDates.children;
        this.filterState.kidsAge = resDates.kidsAge;
        this.dateFrom = resDates.from;
        this.dateTo = resDates.to;
      });


    // this.setOptions();
    // this.isChildBlockShow = [
    //   FilterType.dealPage.toString(),
    //   FilterType.seoPage.toString(),
    //   FilterType.hotelPage.toString(),
    //   FilterType.citiesPage.toString(),
    //   FilterType.destinationsPage.toString(),
    //   FilterType.eventsPage.toString(),
    //   FilterType.placesPage.toString(),
    // ].indexOf(this.pageType) === -1;
  }

  search(tipData?) {

    if (!this.filterState.checkin && !this.filterState.checkout) {
      this.openDatePickerSelector$.next(true);
      return;
    } else {
      window.open(
        `https://${this.domain}/engine/${this.engineId}?checkin=${this.filterState.checkin}&checkout=${this.filterState.checkout}&children=${this.filterState.children}&kidsAge=${this.filterState.kidsAge}`, '_blank' 
      );
      // if (this.pageType === FilterType.bookingEnginePage) {
      //   this.searchBookingEngine.emit({ checkin: this.filterState.checkin, checkout: this.filterState.checkout, adults: this.filterState.adults, children: this.filterState.children, kidsAge: this.filterState.kidsAge });
      // } else {
      // this.scoreComplitance.oneOfMatched(this.searchbarCollapseMatcherkey, this.collapseSensitiveFilters, this.filterState);
      // }
    }
  }




  openBooking(booking_id: string) {
    const dateCheckIn = this.dateFrom.split('-') || '';
    const dateCheckOut = this.dateTo.split('-') || '';
    const checkin_year = dateCheckIn[0] || '';
    const checkin_month = dateCheckIn[1] || '';
    const checkin_monthday = dateCheckIn[2] || '';
    const checkout_year = dateCheckOut[0] || '';
    const checkout_month = dateCheckOut[1] || '';
    const checkout_monthday = dateCheckOut[2] || '';
    const link = `https://www.booking.com/searchresults.html?
        aid = 1828015
        & sb=1
      & src=index
      & dest_id=${ booking_id}
      & dest_type=city
      & checkin_year=${ checkin_year}
      & checkin_month=${ checkin_month}
      & checkin_monthday=${ checkin_monthday}
      & checkout_year=${ checkout_year}
      & checkout_month=${ checkout_month}
      & checkout_monthday=${ checkout_monthday}
      & group_adults=${ this.filterState.adults}
      & review_score=${ this.filterState.google_rating.split('-')[0] + '0'}
      & class=${ this.filterState.hotel_stars || ''}`;

    window.location.replace(decodeURIComponent(link).replace(/\s+/g, ''));
  }

  ngOnDestroy() {
    this.destroy$.next(true);
  }
}
