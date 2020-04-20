import { Action } from '@ngrx/store';
// import { DealsSearchResultModel } from '../states/search-deal.state';

export const SEARCH_DEALS = 'SEARCH_DEALS';
export const SEARCH_DEALS_SUCCESS = 'SEARCH_DEALS_SUCCESS';
export const SEARCH_DEALS_ERROR = 'SEARCH_DEALS_ERROR';

export class SearchDealsAction implements Action {
  readonly type = SEARCH_DEALS;

  constructor(public payload: any) {
  }
}

export class SearchDealsSuccessAction implements Action {
  readonly type = SEARCH_DEALS_SUCCESS;

  constructor(public payload: { key: string, value: any }) {
  }
}

export class SearchDealsErrorAction implements Action {
  readonly type = SEARCH_DEALS_ERROR;

  constructor(public payload?: any) {
  }
}

export type SearchDealActions =
  | SearchDealsAction
  | SearchDealsSuccessAction
  | SearchDealsErrorAction;
