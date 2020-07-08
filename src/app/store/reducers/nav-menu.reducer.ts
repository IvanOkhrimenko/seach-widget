
import cloneDeep from 'lodash-es/cloneDeep';
import { LOAD_HEADER_MENU, Action, LOAD_HEADER_MENU_SUCCESS, LOAD_HEADER_MENU_ERROR, LOAD_FOOTER_MENU, LOAD_FOOTER_MENU_SUCCESS, LOAD_FOOTER_MENU_ERROR } from '../actions/nav-menu.actions';
import { INITIAL_PRICING_STATE } from '../states/nav-menu.state';

export function navMenuReducer(state = INITIAL_PRICING_STATE, action: Action) {

  const newState = cloneDeep(state);

  switch (action.type) {
    case LOAD_HEADER_MENU:
      return newState;

    case LOAD_HEADER_MENU_SUCCESS:
      newState.header = action.payload;
      return newState;

    case LOAD_HEADER_MENU_ERROR:
      newState.header = action.payload;
      return newState;

    case LOAD_FOOTER_MENU:
      newState.footer = action.payload;
      return newState;

    case LOAD_FOOTER_MENU_SUCCESS:
      newState.footer = action.payload;
      return newState;

    case LOAD_FOOTER_MENU_ERROR:
      newState.footer = action.payload;
      return newState;

    default:
      return newState;
  }
}
