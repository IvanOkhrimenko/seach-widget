
export interface HfRouterState {
  url: string;
  path: string[];
  language: string;
  queryParams: { [key: string]: any };
  fragment: string;
  langUrlPrefix: string;
}

export const INITIAL_HF_ROUTER_STATE: HfRouterState = {
  url: undefined,
  path: [],
  language: undefined,
  queryParams: {},
  fragment: undefined,
  langUrlPrefix: undefined,
};
