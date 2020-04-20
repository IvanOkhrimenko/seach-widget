import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnDestroy, OnInit, Renderer2, SimpleChanges, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import forEach from 'lodash-es/forEach';
import isEmpty from 'lodash-es/isEmpty';
import { Subject } from 'rxjs';
import { distinctUntilChanged, filter, map, takeUntil, tap } from 'rxjs/operators';
import { DEFAULT_ADULTS_AMOUNT, NUMBERS_REGEX } from '../../constants/general.constants';
import { ApplicationState } from '../../states/application.state';
import { SetGuestsAction } from '../../store/actions/filter.actions';
import { ClickService } from '../../services/click.service';


@Component({
  selector: 'hf-guests',
  templateUrl: './guests.component.html',
  styleUrls: ['./guests.component.scss']
})
export class GuestsComponent implements OnChanges, OnDestroy, OnInit, AfterViewInit {

  @ViewChild('guests', { static: false }) guests: ElementRef;
  @ViewChild('children', { static: false }) childrenInput: ElementRef;
  @Input('guestOptions') guestOptions: any = {};
  @Input() inputClass;
  @Input() showChildrenBlock: boolean = true;
  @Input() openGuestsSelector$: Subject<boolean>;
  @Input() isDropdown: boolean = true;
  @Input() isShort: boolean = false;
  @Input() showIcon?: boolean = true;

  placeholder: string;
  showPP: boolean;
  adults: number = DEFAULT_ADULTS_AMOUNT;
  children: number = 0;
  showResult: boolean;
  hoverBorder: string;
  inactiveBorder: string;
  destroy$: Subject<any> = new Subject();
  flag: boolean = false;

  public maxChildrenQty = 12;
  public maxChildrenAge = 14;
  public form: FormGroup;
  public childQuantity$ = new Subject<number>();
  public kidsAges = [];

  /**
   * @param renderer
   * @param clickService
   * @param fb
   */
  constructor(
    private renderer: Renderer2,
    private clickService: ClickService,
    private fb: FormBuilder,
    private store: Store<ApplicationState>,
    private activatedRoute: ActivatedRoute
  ) {
    this.clickService.click$
      .pipe(
        takeUntil(this.destroy$),
        filter(event => !!event)
      )
      .subscribe((event) => {

        let id = event.target.id;
        let node = event.target;

        if (!this.showPP) {
          return;
        }

        while (node.offsetParent) {
          if (id === 'guests') {
            return;
          }
          node = node.offsetParent;
          id = node.id;
        }
        this.showPP = false;
      });

    this.loadFormInputs();
    this.initParams();
  }

  ngOnInit() {

    const dates = this.activatedRoute.snapshot.queryParams;

    if (dates && dates.adults) {
      this.store.dispatch(new SetGuestsAction({ adults: dates.adults, children: dates.children ? dates.children : 0, kidsAge: dates.kidsAge }));
    }

    this.store.select(state => state.filterState)
      .pipe(
        distinctUntilChanged((prev, curr) => prev.adults === curr.adults && prev.children === curr.children && prev.kidsAge === curr.kidsAge),
        takeUntil(this.destroy$),
      )
      .subscribe(guests => {
        this.adults = guests.adults;
        this.kidsAges = guests.kidsAge;
        this.children = guests.children;
      });


    if (this.showChildrenBlock) {
      this.subscribeToKidsSwitcher();
    }

    if (this.openGuestsSelector$) {
      this
        .openGuestsSelector$
        .subscribe(() => {
          setTimeout(() => {
            this.show();
          }, 0);
        });
    }
  }

  ngAfterViewInit(): void {
    this.loadKidsAge(this.children);
    setTimeout(() => {
      if (!this.isDropdown) {
        this.loadKidsAge(this.children);
      }
    }, 100);
  }

  subscribeToKidsSwitcher() {
    this.childQuantity$
      .pipe(
        filter(e => (this.children < this.maxChildrenQty && e > 0)),
        tap(e => this.children = Number(this.children) + Number(e)),
        map((e) => {
          return this.children;
        })
      )
      .subscribe(e => {
        this.loadKidsAge(e);
        this.emitChanges();
      });
  }

  public isFieldValid(field: string): boolean {
    return !this.form.get(field).valid && this.form.get(field).touched;
  }

  /**
   * @param index
   */
  public removeKidsByIndex(index: number) {
    setTimeout(() => {
      this.childrenInput.nativeElement.focus();
    }, 0);
    setTimeout(() => {
      const control = <FormArray>this.form.controls['kidsAge'];
      control.controls.splice(index, 1);

      this.children = control.controls.length;

      this.emitChanges();
    }, 500);
  }

  /**
   * @param childQuantity
   */
  public loadKidsAge(childQuantity: number) {
    const control = <FormArray>this.form.controls['kidsAge'];
    const kidsAgeQuantity = control.controls.length;
    const requiredToAdd = childQuantity - kidsAgeQuantity > 0 ? this.children - kidsAgeQuantity : 0;
    const requiredToReduce = kidsAgeQuantity - childQuantity > 0 ? kidsAgeQuantity - childQuantity : 0;

    for (let i = 0; i < requiredToAdd; i++) {
      control.push(this.initAges(!isEmpty(this.kidsAges[i]) ? this.kidsAges[i] : 0));
    }

    if (requiredToReduce > 0) {
      control.controls = control.controls.slice(0, kidsAgeQuantity - requiredToReduce);
    }
  }

  /**
   * @param age
   */
  public initAges(age = 0) {
    return this.fb.group({
      age: [age, [Validators.minLength(0), Validators.maxLength(17), Validators.pattern(NUMBERS_REGEX)]]
    });
  }

  private loadFormInputs() {
    this.form = this.fb.group({
      children: [this.children, Validators.required],
      kidsAge: this.fb.array([])
    });
  }

  private getKidsAges() {
    const controls = <FormArray>this.form.controls['kidsAge'];

    return controls.getRawValue().map(function (elem) {
      return elem.age;
    });
  }

  public emitChanges(): void {
    this.store.dispatch(new SetGuestsAction({ adults: this.adults, children: this.children, kidsAge: this.getKidsAges() }));
  }

  /**
   * @param counter
   * @param type
   * @param maturity
   */
  changeCount(counter: string, type: string, maturity?: string): void {
    if (typeof this.adults !== 'number' || typeof this.children !== 'number') {
      this.adults = +this.adults;
      this.children = +this.children;
    }
    if (type === 'increase') {
      this[counter] += 1;

      this.emitChanges();

      if (this[counter] >= 99) {
        this[counter] = 99;
      }
    }
    if (type === 'decrease') {
      if (this[counter] === 1 && maturity === 'adults' || this[counter] == 0 && maturity === 'adults') {
        return;
      }
      if (this[counter] === 0 && maturity === 'children') {
        return;
      }
      this[counter] -= 1;

      this.emitChanges();
    }
    this.checkVisibility();
  }

  checkVisibility() {
    if (this.adults === 0 && this.children === 0) {
      this.showResult = false;
    } else {
      this.showResult = true;
    }
  }

  show(): void {

    this.loadKidsAge(this.children);

    if (this.showPP) {
      if (this.adults !== 0 || this.children !== 0) {
        this.emitChanges();
      }

      this.showPP = false;
    } else if (!this.showPP) {
      this.showPP = true;
    }
  }

  /**
   * @param params
   */
  initParams(params = null) {
    if (params === null) {
      // counter & placeholder
      this.adults = DEFAULT_ADULTS_AMOUNT;
      this.children = 0;
      this.placeholder = 'Guests';

      if (this.adults === 0 || this.children === 0) {
        this.showResult = false;
      } else {
        this.showResult = true;
      }
    } else {
      const checker = /(width)|(height)|(border)|(borderRight)|(minWidth)/;
      params.kidsAges ? this.kidsAges = params.kidsAges : [];

      forEach(params.currentValue, (value, key) => {
        const result = checker.test(key);

        if (result) {
          this.renderer.setStyle(this.guests.nativeElement, `${key}`, `${value}`);
        } else {
          if (key === 'adults' || key === 'children') {
            this[key] = +value;

            return;
          }

          this[key] = value;
        }

        this.emitChanges();
        this.checkVisibility();
      });
    }
  }

  /**
   * @param changes
   */
  ngOnChanges(changes: SimpleChanges) {
    this.initParams(changes.guestOptions);
  }

  ngOnDestroy() {
    this.destroy$.next();
  }
}
