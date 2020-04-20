export interface AuthorizationState {
  signUpError: boolean;
  loginError: boolean;
}

export const INITIAL_AUTHORIZATION_STATE: AuthorizationState = {
  signUpError: false,
  loginError: false
};
