import { of as observableOf, Observable, Subject, fromEvent } from 'rxjs';
import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';


@Injectable()
export class ClickService {
  click$;
  bookClick$: Subject<boolean> = new Subject();

  constructor(

    @Inject(DOCUMENT) private _document
  ) {

      this.click$ = fromEvent(document, 'click');

  }

  bookEvent(): Observable<boolean> {
    return this.bookClick$.asObservable();
  }
}
