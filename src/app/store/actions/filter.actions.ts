import { Action } from '@ngrx/store';

export const SET_DATE = 'SET_DATE';
export const SET_GUESTS = 'SET_GUESTS';
export const SET_NEARLY_DATE = 'SET_NEARLY_DATE';
export const CHANGE_HOTEL_FILTER = 'CHANGE_HOTEL_FILTER';

export class ChangeHotelFilterAction implements Action {
  readonly type = CHANGE_HOTEL_FILTER;

  constructor(public payload: any) {
  }
}

export class SetDateAction implements Action {
  readonly type = SET_DATE;

  constructor(public payload: { from: string, to: string }) {
  }
}

export class SetNearlyDateAction implements Action {
  readonly type = SET_NEARLY_DATE;

  constructor() { }
}

export class SetGuestsAction implements Action {
  readonly type = SET_GUESTS;

  constructor(public payload: { adults: number, children: number, kidsAge: Array<number> }) {
  }
}

export type FilterActions =
  | SetDateAction
  | SetGuestsAction
  | ChangeHotelFilterAction
  | SetNearlyDateAction;
