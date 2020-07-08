

export const LOAD_HEADER_MENU = 'LOAD_HEADER_MENU';
export const LOAD_HEADER_MENU_SUCCESS = 'LOAD_HEADER_MENU_SUCCESS';
export const LOAD_HEADER_MENU_ERROR = 'LOAD_HEADER_MENU_ERROR';
export const LOAD_FOOTER_MENU = 'LOAD_FOOTER_MENU';
export const LOAD_FOOTER_MENU_SUCCESS = 'LOAD_FOOTER_MENU_SUCCESS';
export const LOAD_FOOTER_MENU_ERROR = 'LOAD_FOOTER_MENU_ERROR';


export class LoadHeaderMenu {
  readonly type = LOAD_HEADER_MENU;

  constructor(public payload: any) { }
}

export class LoadHeaderMenuSuccess {
  readonly type = LOAD_HEADER_MENU_SUCCESS;

  constructor(public payload: any) { }
}

export class LoadHeaderMenuError {
  readonly type = LOAD_HEADER_MENU_ERROR;

  constructor(public payload: any) { }
}

export class LoadFooterMenu {
  readonly type = LOAD_FOOTER_MENU;

  constructor(public payload: any) { }
}

export class LoadFooterMenuSuccess {
  readonly type = LOAD_FOOTER_MENU_SUCCESS;

  constructor(public payload: any) { }
}

export class LoadFooterMenuError {
  readonly type = LOAD_FOOTER_MENU_ERROR;

  constructor(public payload: any) { }
}

export type Action = LoadHeaderMenu
  | LoadHeaderMenuSuccess
  | LoadHeaderMenuError
  | LoadFooterMenu
  | LoadFooterMenuSuccess
  | LoadFooterMenuError;
