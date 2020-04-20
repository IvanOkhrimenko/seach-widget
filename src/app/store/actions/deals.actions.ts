import { Action } from '@ngrx/store';
// import { DealModel } from '../../models/deal.model';


export const DEALS_FETCH_SUCCESS = 'DEALS_FETCH_SUCCESS';
export const DEALS_FETCH_ERROR = 'DEALS_FETCH_ERROR';
export const SAVE_DEAL = 'SAVE_DEAL';

export interface DealsFetchSuccessActionPayload {
  deals: { [dealId: string]: any };
  hotelUrl: string;
  language: string;
}


export class DealsFetchSuccessAction implements Action {
  readonly type = DEALS_FETCH_SUCCESS;

  constructor(public payload: DealsFetchSuccessActionPayload) {
  }
}

export class DealsFetchErrorAction implements Action {
  readonly type = DEALS_FETCH_ERROR;

  constructor(public payload?: any) {
  }
}

export class SaveDealAction implements Action {
  readonly type = SAVE_DEAL;

  constructor(public payload: { deal: any, language: string }) {
  }
}

export type DealsActions =
  | DealsFetchSuccessAction
  | DealsFetchErrorAction
  | SaveDealAction;
