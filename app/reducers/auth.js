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
  accessToken: action.response.headers.get('access-token'),
  client: action.response.headers.get('client'),
  expiry: action.response.headers.get('expiry'),
  tokenType: action.response.headers.get('token-type'),
  uid: action.response.headers.get('uid'),
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
    default:
      return state;
  }
};

export default reducer;