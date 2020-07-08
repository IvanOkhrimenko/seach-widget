import { Action } from '@ngrx/store';

export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_ERROR = 'SIGN_UP_ERROR';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const AUTH_CANCELLED = 'AUTH_CANCELLED';

export const SOCIAL_LOGIN = 'SOCIAL_LOGIN';

export const LOGOUT = 'LOGOUT';
export const CLEAR_USER = 'CLEAR_USER';

export const REQUEST_CHANGE_PASSWORD = 'REQUEST_CHANGE_PASSWORD';
export const REQUEST_CHANGE_PASSWORD_SUCCESS = 'REQUEST_CHANGE_PASSWORD_SUCCESS';
export const REQUEST_CHANGE_PASSWORD_ERROR = 'REQUEST_CHANGE_PASSWORD_ERROR';

export class SignUpSuccessAction implements Action {
  readonly type = SIGN_UP_SUCCESS;

  constructor(public payload?: any) {
  }
}

export class SignUpErrorAction implements Action {
  readonly type = SIGN_UP_ERROR;

  constructor(public payload?: any) {
  }
}

export class SocialLoginAction implements Action {
  readonly type = SOCIAL_LOGIN;

  constructor(public payload: any) {
  }
}

export class LoginSuccessAction implements Action {
  readonly type = LOGIN_SUCCESS;

  constructor(public payload?: any) {
  }
}

export class LoginErrorAction implements Action {
  readonly type = LOGIN_ERROR;

  constructor(public payload?: any) {
  }
}

export class AuthCancelledAction implements Action {
  readonly type = AUTH_CANCELLED;

  constructor(public payload: {} = {}) {
  }
}

export class RequestChangePasswordAction implements Action {
  readonly type = REQUEST_CHANGE_PASSWORD;

  constructor(public payload: any) {
  }
}

export class RequestChangePasswordSuccessAction implements Action {
  readonly type = REQUEST_CHANGE_PASSWORD_SUCCESS;

  constructor(public payload?: any) {
  }
}

export class RequestChangePasswordErrorAction implements Action {
  readonly type = REQUEST_CHANGE_PASSWORD_ERROR;

  constructor(public payload?: any) {
  }
}

export class LogoutAction implements Action {
  readonly type = LOGOUT;

  constructor(public payload?: any) {
  }
}

export class ClearUserAction implements Action {
  readonly type = CLEAR_USER;

  constructor(public payload?: any) {
  }
}

export type AuthorizationActions =
  | SignUpSuccessAction
  | SignUpErrorAction
  | SocialLoginAction
  | LoginSuccessAction
  | LoginErrorAction
  | RequestChangePasswordAction
  | RequestChangePasswordSuccessAction
  | RequestChangePasswordErrorAction
  | LogoutAction
  | ClearUserAction
  | AuthCancelledAction;
