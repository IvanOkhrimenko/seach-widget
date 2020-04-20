import { Action } from '@ngrx/store';

export const SET_HF_ROUTER_STATE = 'SET_HF_ROUTER_STATE';

interface SetHfRouterStateActionPayload {
  url: string;
  path: string[];
  language: string;
  queryParams: { [key: string]: any };
  fragment: string;
  langUrlPrefix: string;
}

export class SetHfRouterStateAction implements Action {
  readonly type = SET_HF_ROUTER_STATE;

  constructor(public payload: SetHfRouterStateActionPayload) {}
}

export type HfRouterActions =
  | SetHfRouterStateAction;
