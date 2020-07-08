import { HfRouterState, INITIAL_HF_ROUTER_STATE } from '../states/hf-router.state';
import { HfRouterActions, SET_HF_ROUTER_STATE } from '../actions/hf-router.actions';

export function HfRouterReducer(state: HfRouterState = INITIAL_HF_ROUTER_STATE, action: HfRouterActions): HfRouterState {

  switch (action.type) {

    case SET_HF_ROUTER_STATE:
      return { ...state, ...action.payload };

    default:
      return state;
  }

}
