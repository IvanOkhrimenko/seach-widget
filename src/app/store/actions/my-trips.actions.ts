import { Action } from '@ngrx/store';

export const GET_USER_PRECHECKINS = 'GET_USER_PRECHECKINS';
export const GET_USER_PRECHECKINS_SUCCESS = 'GET_USER_PRECHECKINS_SUCCESS';
export const GET_USER_PRECHECKINS_ERROR = 'GET_USER_PRECHECKINS_ERROR';

export const GET_USER_ORDERS = 'GET_USER_ORDERS';
export const GET_USER_ORDERS_SUCCESS = 'GET_USER_ORDERS_SUCCESS';
export const GET_USER_ORDERS_ERROR = 'GET_USER_ORDERS_ERROR';

export const GET_USER_PRECHECKINS_AND_ORDERS = 'GET_USER_PRECHECKINS_AND_ORDERS';
export const GET_USER_PRECHECKINS_AND_ORDERS_SUCCESS = 'GET_USER_PRECHECKINS_AND_ORDERS_SUCCESS';
export const GET_USER_PRECHECKINS_AND_ORDERS_ERROR = 'GET_USER_PRECHECKINS_AND_ORDERS_ERROR';

export const CANCEL_USER_PRECHECKINS = 'CANCEL_USER_PRECHECKINS';
export const CANCEL_USER_PRECHECKINS_SUCCESS = 'CANCEL_USER_PRECHECKINS_SUCCESS';
export const CANCEL_USER_PRECHECKINS_ERROR = 'CANCEL_USER_PRECHECKINS_ERROR';

export const GET_DEALS = 'GET_DEALS';
export const GET_DEALS_SUCCESS = 'GET_DEALS_SUCCESS';
export const GET_DEALS_ERROR = 'GET_DEALS_ERROR';

export const GET_DEAL = 'GET_DEAL';
export const GET_DEAL_SUCCESS = 'GET_DEAL_SUCCESS';
export const GET_DEAL_ERROR = 'GET_DEAL_ERROR';

export const ADD_COMMENT = 'ADD_COMMENT';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_ERROR = 'ADD_COMMENT_ERROR';

export const SELECT_PRECHECKIN = 'SELECT_PRECHECKIN';
export const DESELECT_PRECHECKIN = 'DESELECT_PRECHECKIN';

export const GET_COMMENT = 'GET_COMMENT';
export const GET_COMMENT_SUCCESS = 'GET_COMMENT_SUCCESS';
export const GET_COMMENT_ERROR = 'GET_COMMENT_ERROR';

export const READ_COMMENTS = 'READ_COMMENTS';
export const READ_COMMENTS_SUCCESS = 'READ_COMMENTS_SUCCESS';
export const READ_COMMENTS_ERROR = 'READ_COMMENTS_ERROR';

export const TOGGLE_PRECHECKIN_HISTORY = 'TOGGLE_PRECHECKIN_HISTORY';

export const ASSIGN_SERVICE = 'ASSIGN_SERVICE';
export const ASSIGN_SERVICE_SUCCESS = 'ASSIGN_SERVICE_SUCCESS';
export const ASSIGN_SERVICE_ERROR = 'ASSIGN_SERVICE_ERROR';

export const GET_AVAILABLE_SERVICES = 'GET_AVAILABLE_SERVICES';
export const GET_AVAILABLE_SERVICES_SUCCESS = 'GET_AVAILABLE_SERVICES_SUCCESS';
export const GET_AVAILABLE_SERVICES_ERROR = 'GET_AVAILABLE_SERVICES_ERROR';

export const REMOVE_SERVICE_ORDER = 'REMOVE_SERVICE_ORDER';
export const REMOVE_SERVICE_ORDER_SUCCESS = 'REMOVE_SERVICE_ORDER_SUCCESS';
export const REMOVE_SERVICE_ORDER_ERROR = 'REMOVE_SERVICE_ORDER_ERROR';

export const REMOVE_SERVICE_LOCALLY = 'REMOVE_SERVICE_LOCALLY';

export const FILTER_SERVICE_LOCALLY = 'FILTER_SERVICE_LOCALLY';

export class GetUserPrechekinsAction implements Action {
  readonly type = GET_USER_PRECHECKINS;

  constructor(public payload?: any) {
  }
}

export class GetAvailableServicesAction implements Action {
  readonly type = GET_AVAILABLE_SERVICES;

  constructor(public payload: any) {
  }
}

export class GetAvailableServicesSuccessAction implements Action {
  readonly type = GET_AVAILABLE_SERVICES_SUCCESS;

  constructor(public payload?: any) {
  }
}

export class GetAvailableServicesErrorAction implements Action {
  readonly type = GET_AVAILABLE_SERVICES_ERROR;

  constructor(public payload?: any) {
  }
}

export class TogglePrecheckinHistoryAction implements Action {
  readonly type = TOGGLE_PRECHECKIN_HISTORY;

  constructor(public payload: any) {
  }
}

export class GetUserPrecheckinsSuccessAction implements Action {
  readonly type = GET_USER_PRECHECKINS_SUCCESS;

  constructor(public payload?: any) {
  }
}

export class GetUserPrecheckinsErrorAction implements Action {
  readonly type = GET_USER_PRECHECKINS_ERROR;

  constructor(public payload?: any) {
  }
}

export class CancelUserPrecheckinsAction implements Action {
  readonly type = CANCEL_USER_PRECHECKINS;

  constructor(public payload?: { id: string }) {
  }
}

export class CancelUserPrecheckinsSuccessAction implements Action {
  readonly type = CANCEL_USER_PRECHECKINS_SUCCESS;

  constructor(public payload?: { id: string }) {
  }
}

export class CancelUserPrecheckinsErrorAction implements Action {
  readonly type = CANCEL_USER_PRECHECKINS_ERROR;

  constructor(public payload?: { id: string }) {
  }
}

export class AssignServiceAction implements Action {
  readonly type = ASSIGN_SERVICE;

  constructor(public payload: { service_id: string, precheckin_id: string, count: number, order_date: string }) {
  }
}

export class AssignServiceSuccessAction implements Action {
  readonly type = ASSIGN_SERVICE_SUCCESS;

  constructor(public payload?: any) {
  }
}

export class AssignServiceErrorAction implements Action {
  readonly type = ASSIGN_SERVICE_ERROR;

  constructor(public payload?: any) {
  }
}

export class GetUserOrdersAction implements Action {
  readonly type = GET_USER_ORDERS;

  constructor(public payload?: any) {
  }
}

export class GetUserOrdersSuccessAction implements Action {
  readonly type = GET_USER_ORDERS_SUCCESS;

  constructor(public payload?: any) {
  }
}

export class GetUserOrdersErrorAction implements Action {
  readonly type = GET_USER_ORDERS_ERROR;

  constructor(public payload?: any) {
  }
}

// export class GetDealsAction implements Action {
//   readonly type = GET_DEALS;
//
//   constructor(public payload: [string]) {
//   }
// }

// export class GetDealsSuccessAction implements Action {
//   readonly type = GET_DEALS_SUCCESS;
//
//   constructor(public payload?: any) {
//   }
// }
//
// export class GetDealsErrorAction implements Action {
//   readonly type = GET_DEALS_ERROR;
//
//   constructor(public payload?: any) {
//   }
// }

export class GetDealAction implements Action {
  readonly type = GET_DEAL;

  constructor(public payload: { precheckinId: string, dealId: string }) {
  }
}

export class GetDealSuccessAction implements Action {
  readonly type = GET_DEAL_SUCCESS;

  constructor(public payload?: any) {
  }
}

export class GetDealErrorAction implements Action {
  readonly type = GET_DEAL_ERROR;

  constructor(public payload?: any) {
  }
}

export class SelectPrecheckinAction implements Action {
  readonly type = SELECT_PRECHECKIN;

  constructor(public payload?: any) {
  }
}

export class AddCommentAction implements Action {
  readonly type = ADD_COMMENT;

  constructor(public payload: { orderId: string, comment: string }) {
  }
}

export class AddCommentSuccessAction implements Action {
  readonly type = ADD_COMMENT_SUCCESS;

  constructor(public payload?: any) {
  }
}

export class AddCommentErrorAction implements Action {
  readonly type = ADD_COMMENT_ERROR;

  constructor(public payload?: any) {
  }
}

export class ReadCommentsAction implements Action {
  readonly type = READ_COMMENTS;

  constructor(public payload: { orderId: string, commentsIds: [string] }) {
  }
}

export class ReadCommentsSuccessAction implements Action {
  readonly type = READ_COMMENTS_SUCCESS;

  constructor(public payload?: any) {
  }
}

export class ReadCommentsErrorAction implements Action {
  readonly type = READ_COMMENTS_ERROR;

  constructor(public payload?: any) {
  }
}

export class GetCommentAction implements Action {
  readonly type = GET_COMMENT;

  constructor(public payload: { orderId: string, locale: string }) {
  }
}

export class GetCommentSuccessAction implements Action {
  readonly type = GET_COMMENT_SUCCESS;

  constructor(public payload?: any) {
  }
}

export class GetCommentErrorAction implements Action {
  readonly type = GET_COMMENT_ERROR;

  constructor(public payload?: any) {
  }
}

export class DeselectPrecheckinAction implements Action {
  readonly type = DESELECT_PRECHECKIN;

  constructor(public payload?: any) {
  }
}

export class GetUserPrecheckinsAndOrdersAction implements Action {
  readonly type = GET_USER_PRECHECKINS_AND_ORDERS;

  constructor(public payload: any) {
  }
}

export class GetUserPrecheckinsAndOrdersSuccessAction implements Action {
  readonly type = GET_USER_PRECHECKINS_AND_ORDERS_SUCCESS;

  constructor(public payload: any) {
  }
}

export class GetUserPrecheckinsAndOrdersErrorAction implements Action {
  readonly type = GET_USER_PRECHECKINS_AND_ORDERS_ERROR;

  constructor(public payload: any) {
  }
}

export class RemoveServiceOrderAction implements Action {
  readonly type = REMOVE_SERVICE_ORDER;

  constructor(public payload: any) {
  }
}

export class RemoveServiceOrderSuccessAction implements Action {
  readonly type = REMOVE_SERVICE_ORDER_SUCCESS;

  constructor(public payload: any) {
  }
}

export class RemoveServiceOrderErrorAction implements Action {
  readonly type = REMOVE_SERVICE_ORDER_ERROR;

  constructor(public payload: any) {
  }
}

export class RemoveServiceOrderLocallyAction implements Action {
  readonly type = REMOVE_SERVICE_LOCALLY;

  constructor(public payload: string) {
  }
}

export class FilterServiceOrderLocallyAction implements Action {
  readonly type = FILTER_SERVICE_LOCALLY;

  constructor(public payload: string) {
  }
}

export type MyTripsActions =
  | GetUserPrechekinsAction
  | GetAvailableServicesAction
  | GetAvailableServicesSuccessAction
  | GetAvailableServicesErrorAction
  | TogglePrecheckinHistoryAction
  | GetUserPrecheckinsSuccessAction
  | GetUserPrecheckinsErrorAction
  | CancelUserPrecheckinsAction
  | CancelUserPrecheckinsSuccessAction
  | CancelUserPrecheckinsErrorAction
  | AssignServiceAction
  | AssignServiceSuccessAction
  | AssignServiceErrorAction
  | GetUserOrdersAction
  | GetUserOrdersSuccessAction
  | GetUserOrdersErrorAction
  | GetDealAction
  | GetDealSuccessAction
  | GetDealErrorAction
  | SelectPrecheckinAction
  | AddCommentAction
  | AddCommentSuccessAction
  | AddCommentErrorAction
  | ReadCommentsAction
  | ReadCommentsSuccessAction
  | ReadCommentsErrorAction
  | GetCommentAction
  | GetCommentSuccessAction
  | GetCommentErrorAction
  | DeselectPrecheckinAction
  | GetUserPrecheckinsAndOrdersAction
  | GetUserPrecheckinsAndOrdersSuccessAction
  | GetUserPrecheckinsAndOrdersErrorAction
  | RemoveServiceOrderAction
  | RemoveServiceOrderSuccessAction
  | RemoveServiceOrderErrorAction
  | RemoveServiceOrderLocallyAction
  | FilterServiceOrderLocallyAction;
