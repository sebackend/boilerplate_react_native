import * as actions from '../actions/auth';

const initialState = {
  user: {
    id: 0,
    email: '',
    uid: '',
    role: '',
  },
  headers: {
    accessToken: '',
    client: '',
    expiry: '',
    tokenType: '',
    uid: '',
  },
  signedIn: false,
  ongoingRequest: {
    signIn: false,
  },
  navigateTo: null,
};

const setHeaders = action => ({
  accessToken: action.response.headers.get('access-token')
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SIGN_IN_REQUEST:
      return {
        ...state,
        ongoingRequest: { ...state.ongoingRequest, signIn: true },
      };
    case actions.SIGN_IN_SUCCESS:
      return {
        ...state,
        user: action.result,
        headers: setHeaders(action),
        ongoingRequest: { ...state.ongoingRequest, signIn: false },
        signedIn: true,
      };
    case actions.SIGN_IN_FAILURE:
      return {
        ...state,
        ongoingRequest: { ...state.ongoingRequest, signIn: false },
      };
    case actions.SIGN_UP_REQUEST:
      return {
        ...state,
        ongoingRequest: { ...state.ongoingRequest, signUp: true },
      };
    case actions.SIGN_UP_SUCCESS:
      return {
        ...state,
        user: action.result,
        headers: setHeaders(action),
        ongoingRequest: { ...state.ongoingRequest, signUp: false },
      };
    case actions.SIGN_UP_FAILURE:
      return {
        ...state,
        ongoingRequest: { ...state.ongoingRequest, signUp: false },
      };
    default:
      return state;
  }
};

export default reducer;