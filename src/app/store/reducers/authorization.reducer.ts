import {
  AUTH_CANCELLED,
  AuthorizationActions,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  SIGN_UP_ERROR,
  SIGN_UP_SUCCESS
} from '../actions/authorization.actions';
import { AuthorizationState, INITIAL_AUTHORIZATION_STATE } from '../states/authorization.state';
import cloneDeep from 'lodash-es/cloneDeep';

export function AuthorizationReducer(state: AuthorizationState = INITIAL_AUTHORIZATION_STATE,
                                     action: AuthorizationActions): AuthorizationState {

  const newState = cloneDeep(state);

  switch (action.type) {
    case SIGN_UP_ERROR:
      newState.signUpError = action.payload.error.message;
      return newState;

    case SIGN_UP_SUCCESS:
      newState.signUpError = false;
      return newState;

    case LOGIN_ERROR:
      newState.loginError = action.payload.error.message;
      return newState;

    case LOGIN_SUCCESS:
      newState.loginError = false;
      return newState;

    case AUTH_CANCELLED:
      newState['retryActions'] = [];
      return newState;

    default:
      return state;
  }
}
