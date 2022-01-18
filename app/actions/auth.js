export const SIGN_IN_REQUEST = 'SIGN_IN_REQUEST';
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_IN_FAILURE = 'SIGN_IN_FAILURE';

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const SIGN_OUT_REQUEST = 'SIGN_OUT_REQUEST';
export const SIGN_OUT_SUCCESS = 'SIGN_OUT_SUCCESS';
export const SIGN_OUT_FAILURE = 'SIGN_OUT_FAILURE';

export const RESTORE_AUTH_INFO = 'RESTORE_AUTH_INFO';

export const VALIDATE_TOKEN_REQUEST = 'VALIDATE_TOKEN_REQUEST';
export const VALIDATE_TOKEN_SUCCESS = 'VALIDATE_TOKEN_SUCCESS';
export const CLEAR_AUTH_INFO = 'CLEAR_AUTH_INFO';

export const requestSignIn = params => ({ type: SIGN_IN_REQUEST, params });
export const requestSignUp = params => ({ type: SIGN_UP_REQUEST, params });
export const requestSignOut = () => ({ type: SIGN_OUT_REQUEST });
export const restoreAuthInfo = auth => ({ type: RESTORE_AUTH_INFO, auth });
export const validateToken = () => ({ type: VALIDATE_TOKEN_REQUEST });
