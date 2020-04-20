import { ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, Renderer2, SimpleChanges, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import * as dateFns from 'date-fns';
import forEach from 'lodash-es/forEach';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, takeUntil } from 'rxjs/operators';
import { ClickService } from '../../services/click.service';
import { ApplicationState } from '../../states/application.state';
import { SetDateAction } from '../../store/actions/filter.actions';
// import { TranslateWrapperService } from '../../services/translateWrapper.service';



interface Day {
  date: Date;
  day: string;
  month: string;
  year: string;
  isCurrentMonth: boolean;
  unreachable: boolean;
  rangeStart: boolean;
  rangeEnd: boolean;
  highlighted: boolean;
}

interface TimeError {
  message: string;
  type: string;
}

@Component({
  selector: 'hf-date-range-picker',
  templateUrl: './date-range-picker.component.html',
  styleUrls: ['./date-range-picker.component.scss']
})

export class DateRangePickerComponent implements OnChanges, OnDestroy, OnInit {

  @Input() inputClass;
  @Input() dropdownClass: string;
  @Input() openDatePickerSelector: Subject<boolean>;
  @Input('dpOptions') dpOptions: any;
  @Input() titleDates?: boolean = true;
  @Input() showIcon?: boolean = true;
  @Input() showDropdown?: boolean = true;
  @ViewChild('minutes', { static: true }) minutes;
  @ViewChild('hours', { static: true }) hours;
  @ViewChild('range', { static: true }) range: ElementRef;
  @ViewChild('picker', { static: true }) picker: ElementRef;
  @Output() selectRange = new EventEmitter();
  @Output() selectDateWithTime = new EventEmitter();
  @Output() selectDateEvent = new EventEmitter();
  showPicker: boolean;
  todayDate: string;
  currentMonth: string;
  currentDate: Date;
  nextMonth: Date;
  today: string;
  start;
  end;
  startDateObject;
  endDateObject;
  weekDays: string[];
  monthDates: Day[];
  nextMonthDates: Day[];
  unitedDates: Day[];
  activeBorder: string;
  inactiveBorder: string;
  hoverBorder: string;
  placeholder: string = 'Dates';
  type: string;
  half: string;
  selected;
  curHeaderMonth;
  curYear;
  nextHeaderMonth;
  nextYear;
  calendarClass;
  timeForm: FormGroup;
  destroy$: Subject<any> = new Subject();
  book$: Observable<boolean>;
  maxDate;

  constructor(
    private renderer: Renderer2,
    private clickService: ClickService,

    private fb: FormBuilder,
    private chRef: ChangeDetectorRef,
    private store: Store<ApplicationState>,
    private activatedRoute: ActivatedRoute
  ) {
    this.init();
    this.buildCalendars();

    this.clickService.click$
      .pipe(
        takeUntil(this.destroy$),
        filter(event => !!event)
      )
      .subscribe((event) => {
        let id = event.target.id;
        let node = event.target;
        let position = undefined;
        if (!this.showPicker) {
          return;
        }

        while (node.offsetParent) {
          if (id === 'dateRangePicker') {
            return;
          }

          node = node.offsetParent;
          id = node.id;

          position = window.getComputedStyle(node, null)
            .getPropertyValue('position');
        }

        if (position === 'fixed') {
          return;
        }
        this.showPicker = false;
      });

    this.store.select(state => state.filterState)
      .pipe(
        distinctUntilChanged((prev, curr) => prev.from === curr.from && prev.to === curr.to),
        takeUntil(this.destroy$),
        debounceTime(100)
      )
      .subscribe(dates => {
        if (dates.from && dates.to) {
          // @ts-ignore
          this.placeholder = `${dateFns.format(dates.from, 'MMM d')} - ${dateFns.format(dates.to, 'MMM d')}`;
        }
      });
  }

  ngOnInit() {

    const dates = this.activatedRoute.snapshot.queryParams;
    if (dates && dates.checkin && dates.checkout) {
      this.store.dispatch(new SetDateAction({ from: dates.checkin, to: dates.checkout }));
    }
    if (this.openDatePickerSelector) {
      this
        .openDatePickerSelector
        .subscribe(() => {
          setTimeout(() => {
            this.show();
          }, 0);
        });
    }
  }

  init() {
    this.type = 'double';
    this.currentDate = new Date();
    this.maxDate = dateFns.subYears(this.currentDate, -1);
    this.nextMonth = dateFns.subMonths(this.currentDate, -1);
    this.todayDate = dateFns.format(this.currentDate, 'yyyy,M,d');
    this.today = dateFns.format(this.currentDate, 'MMM, d, yyyy');
    this.currentMonth = dateFns.format(this.currentDate, 'MMM');
    this.showPicker = false;
    this.weekDays = [
      'Mon',
      'Tue',
      'Wed',
      'Thu',
      'Fri',
      'Sat',
      'Sun'
    ];
    this.monthDates = [];
    this.nextMonthDates = [];
    this.activeBorder = 'active-border';
    this.inactiveBorder = 'inactive-border';
    this.hoverBorder = 'hover-border';
    this.half = 'AM';
    this.calendarClass = 'double';
  }

  initParams(params) {
    if (params === undefined) {
      return;
    }
    const checker = /(width)|(height)|(border)|(borderRight)|(maxWidth)|(minWidth)/;
    forEach(params.currentValue, (value, key) => {
      const result = checker.test(key);

      if (key === 'className') {
        this.renderer.setProperty(this.picker.nativeElement, 'className', `hf-datepicker_field hf-datepicker_field__icon-hack picker ${value}`);
      }

      if (key === 'calendarClass') {
        this.calendarClass = `${this.calendarClass} ${value}`;
      }

      if (key === 'type' && value === 'withTime') {
        this.createForm();
      }

      if (result) {
        this.renderer.setStyle(this.picker.nativeElement, `${key}`, `${value}`);
      } else {
        this[key] = value;
      }
    });
  }

  createForm() {
    this.timeForm = this.fb.group({
      hours: [12, Validators.required],
      minutes: ['00', Validators.required]
    });
  }

  timeFilter(type: string): void {

    const time = this[type].nativeElement.value;

    if (!time) {
      return;
    }

    if ((type === 'hours' && time > 23) || (type === 'minutes' && time > 59)) {

      this.timeForm.patchValue({
        [type]: ''
      });

      return;
    }

    if (time && time.toString().length > 2) {

      this.timeForm.patchValue({
        [type]: time.toString().slice(0, 2)
      });
    }

    if (time === null || time === undefined) {
      return;
    }

    this.emitDateWithTime();
  }

  selectSingleTime(date) {
    if (date.unreachable) {
      return;
    }
    const time = this.timeForm.value;

    if (date.beforeToday === true || !time.hours) {
      return;
    }

    this.cleanHighlight();
    this.selected = date;
    date.highlighted = true;
    this.emitDateWithTime();
    this.show();
  }

  emitDateWithTime() {
    if (!this.selected || !this.selected.year || !this.selected.month || !this.selected.day) {
      return;
    }
    const time = this.timeForm.value;
    const temp = new Date(+this.selected.year, +this.selected.month - 1, +this.selected.day, +time.hours, +time.minutes);
    this.placeholder = dateFns.format(temp, 'HH:mm, d-MMM');
    this.selectDateWithTime.emit(temp);
  }

  selectSingle(date) {
    if (date.unreachable) {
      return;
    }
    let selected;
    if (date.unreachable) {
      return;
    }
    this.cleanHighlight();
    date.highlighted = true;
    selected = new Date(+date.year, +date.month - 1, +date.day);
    this.placeholder = dateFns.format(selected, 'd-MMM');
    this.selectDateEvent.emit(selected);
    this.show();
  }

  show() {
    if (this.start && !this.end) {
      this.showPicker = !this.showPicker;
      this.cleanHighlight();
    } else if (this.showPicker) {
      this.showPicker = false;
    } else {
      this.showPicker = true;
    }
  }

  getDataForCalendar(data): Day[] {

    const currMonth: string = dateFns.format(data, 'M');
    const firsDateOfMonth: Date = dateFns.startOfMonth(data);
    const firsDateOfWeek: Date = dateFns.startOfWeek(firsDateOfMonth, { weekStartsOn: 1 });
    const [year, month, day]: string[] = dateFns.format(firsDateOfWeek, 'yyyy,M,d').split(',');
    const [todayYear, todayMonth, todayDay] = dateFns.format(new Date, 'yyyy,M,d').split(',');
    const tempArr: Day[] = [];
    let isHightlighted, rangeEndResult, rangeStartResult;

    for (let i = 0; i < 37; i++) {
      const nativeDate = new Date(+year, +month - 1, +day + i);
      const formatedDate = dateFns.format(nativeDate, 'yyyy,M,d');
      const [letYear, letMonth, letDay] = formatedDate.split(',');
      if (this.startDateObject && this.endDateObject) {
        const { year: rsYear, month: rsMonth, day: rsDay } = this.startDateObject;
        const { year: reYear, month: reMonth, day: reDay } = this.endDateObject;
        rangeStartResult = dateFns.compareAsc(new Date(+rsYear, +rsMonth - 1, +rsDay),
          new Date(+letYear, +letMonth - 1, +letDay)) === 0;
        rangeEndResult = dateFns.compareAsc(new Date(+reYear, +reMonth - 1, +reDay),
          new Date(+letYear, +letMonth - 1, +letDay)) === 0;
        // isHightlighted = dateFns.isWithinRange(new Date(+letYear, +letMonth - 1, +letDay),
        //   new Date(+rsYear, +rsMonth - 1, +rsDay),
        //   new Date(+reYear, +reMonth - 1, +reDay));
      }

      if (this.selected) {
        isHightlighted = dateFns.compareAsc(new Date(+this.selected.year, +this.selected.month, this.selected.day),
          new Date(+letYear, +letMonth, +letDay)) === 0;
      }
      const beforeTodayResult = dateFns.compareAsc(new Date(+todayYear, +todayMonth - 1, +todayDay),
        new Date(+letYear, +letMonth - 1, +letDay)) === 1;
      const afterMax = dateFns.compareAsc(new Date(+letYear, +letMonth - 1, +letDay), this.maxDate) === 1;

      const currDay: Day = {
        year: letYear,
        month: letMonth,
        day: letDay,
        date: nativeDate,
        isCurrentMonth: letMonth === currMonth,
        unreachable: beforeTodayResult || afterMax,
        highlighted: letMonth === currMonth && isHightlighted || false,
        rangeStart: letMonth === currMonth && rangeStartResult || false,
        rangeEnd: letMonth === currMonth && rangeEndResult || false
      };

      tempArr.push(currDay);
    }
    return tempArr;
  }

  changeMonth(where): void {
    let maxDate;

    if (where === 'back') {
      if (dateFns.compareAsc(this.currentDate, new Date()) === -1) {
        return;
      }
      this.nextMonth = this.currentDate;
      this.currentDate = dateFns.subMonths(this.currentDate, 1);
      this.buildCalendars();
      return;
    }
    if (where === 'next') {
      if (this.type === 'double') {
        maxDate = this.maxDate;
      } else {
        maxDate = dateFns.subMonths(this.maxDate, -1);
      }
      if (dateFns.compareAsc(dateFns.subMonths(this.currentDate, -1), maxDate) === 0) {
        return;
      }
      this.currentDate = this.nextMonth;
      this.nextMonth = dateFns.subMonths(this.currentDate, -1);
      this.buildCalendars();
      return;
    }
  }

  setMontheaders(current, next): void {
    [this.curHeaderMonth, this.curYear] = dateFns.format(current, 'MMM,yyyy').split(',');
    [this.nextHeaderMonth, this.nextYear] = dateFns.format(next, 'MMM,yyyy').split(',');
  }

  buildCalendars(): void {
    this.setMontheaders(this.currentDate, this.nextMonth);
    this.monthDates = this.getDataForCalendar(this.currentDate);
    this.nextMonthDates = this.getDataForCalendar(this.nextMonth);
    this.unitedDates = this.monthDates.concat(this.nextMonthDates);
  }

  highlight(start, end) {
    const rangeArray = this.createRange(start, end);
    rangeArray.forEach((elem) => {
      if (elem.isCurrentMonth) {
        elem.highlighted = true;
      }
    });
  }

  cleanHighlight() {
    this.unitedDates.forEach((elem) => {
      elem.highlighted = false;
    });
  }

  mouseEnter(dot) {
    if (dot.unreachable
      || this.start === undefined
      || this.end !== undefined
      || !dot.isCurrentMonth) {
      return;
    }
    const current = new Date(+dot.year, +dot.month - 1, +dot.day);
    const compareResult = dateFns.compareAsc(current, this.start);
    if (compareResult !== 1) {
      return;
    }
    this.cleanHighlight();
    this.highlight(this.startDateObject, dot);
  }

  createRange(start, end) {
    const rangeArray = this.unitedDates.filter((elem) => {
      const compareWithStart = dateFns.compareAsc(elem.date, start.date);
      const compareWithEnd = dateFns.compareAsc(end.date, elem.date);
      if (compareWithStart === 1 && compareWithEnd === 1) {
        return true;
      }
      return false;
    });
    return rangeArray;
  }

  selectDate(date): void {
    if (date.unreachable) {
      return;
    }
    const { year, month, day } = date;
    const [currYear, currMonth, currDay] = this.todayDate.split(',');
    const currentDate = new Date(+currYear, +currMonth - 1, +currDay);
    const selectedDate = new Date(+year, +month - 1, +day);
    const compareWithCurrent = dateFns.compareAsc(selectedDate, currentDate);
    if (compareWithCurrent === -1) {
      return;
    }
    if (!this.startDateObject) {
      date.rangeStart = true;
      this.start = selectedDate;
      this.startDateObject = date;
      this.renderer.setProperty(this.range.nativeElement, 'innerText', `${dateFns.format(this.start, 'MMM d')} - `);
      return;
    } else if (this.start && !this.end) {
      const compareSelectedDates = dateFns.compareAsc(selectedDate, this.start);
      if (compareSelectedDates !== 1) {
        this.startDateObject.rangeStart = false;
        date.rangeStart = true;
        this.start = selectedDate;
        this.startDateObject = date;
        return;
      }
      date.rangeEnd = true;
      this.end = selectedDate;
      this.endDateObject = date;
      this.highlight(this.startDateObject, this.endDateObject);
      this.renderer.setProperty(
        this.range.nativeElement, 'innerText',
        `${dateFns.format(this.start, 'MMM d')} - ${dateFns.format(this.end, 'MMM d')} `);

      this.store.dispatch(new SetDateAction({ from: this.start, to: this.end }));

      this.showPicker = false;
      return;
    } else {
      this.unitedDates.forEach((elem) => {
        elem.rangeEnd = false;
        elem.rangeStart = false;
      });
      this.cleanHighlight();
      this.startDateObject.rangeStart = false;
      this.start = selectedDate;
      this.startDateObject = date;
      date.rangeStart = true;
      this.renderer.setProperty(this.range.nativeElement, 'innerText', `${dateFns.format(this.start, 'MMM d')} - `);
      this.end = undefined;
      this.endDateObject.rangeEnd = false;
      this.endDateObject = undefined;
    }
  }

  hide(event): void {
    this.showPicker = event;
  }

  clearValue(key) {
    this.timeForm.patchValue({
      [key]: null
    });
  }

  setValue(value): void {
    if (!value.start && !value.end) {
      return;
    }
    const currMonth: string = dateFns.format(new Date(), 'M');
    const [sYear, sMonth, sDay] = value.start.split('-');
    const [eYear, eMonth, eDay] = value.end.split('-');

    this.startDateObject = {
      year: sYear,
      month: sMonth,
      day: sDay,
      date: value.start,
      isCurrentMonth: sMonth === currMonth,
      unreachable: false,
      highlighted: false,
      rangeStart: true,
      rangeEnd: false
    };

    this.endDateObject = {
      year: eYear,
      month: eMonth,
      day: eDay,
      date: value.end,
      isCurrentMonth: sMonth === currMonth,
      unreachable: false,
      highlighted: false,
      rangeStart: false,
      rangeEnd: true
    };

    if (value.start !== this.start && value.end !== this.end) {

      this.start = new Date(+sYear, +sMonth - 1, +sDay);
      this.end = new Date(+eYear, +eMonth - 1, +eDay);
      this.renderer.setProperty(this.range.nativeElement, 'innerHTML',
        `${dateFns.format(this.start, 'MMM' + '\xa0' + 'D')} — ${dateFns.format(this.end, 'MMM' + '\xa0' + 'D')}`);
      this.buildCalendars();

    }
  }

  setDateTime(data) {
    if (!data || data.unreachable) {
      return;
    }

    const [date, time] = data.split(' ');
    const [year, month, day] = date.split('-');
    const [hours, minutes] = time.split(':');
    const currMonth: string = dateFns.format(new Date(), 'M');
    const nativeDate = new Date(+year, +month - 1, +day, hours, minutes);

    this.createForm();
    this.timeForm.setValue({
      hours: hours,
      minutes: minutes
    });
    this.selected = {
      year: year,
      month: month,
      day: day,
      date: date,
      isCurrentMonth: month === currMonth,
      beforeToday: false,
      highlighted: true,
      rangeStart: false,
      rangeEnd: false
    };

    this.placeholder = dateFns.format(nativeDate, 'HH:mm, D-MMM');
    this.buildCalendars();
    this.chRef.detectChanges();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.initParams(changes.dpOptions);
  }

  ngOnDestroy() {
    this.destroy$.next();
  }
}
