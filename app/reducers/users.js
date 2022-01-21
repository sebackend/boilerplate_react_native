import * as actions from '../actions/users';

const initialState = {
  currentUser: {
    id: 0
  },
  usersList: [],
  ongoingRequest: {
    fetchingUsers: false,
    fetchingSingleUser: false
  },
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actions.GET_USERS_REQUEST:
      return {
        ...state,
        ongoingRequest: { ...state.ongoingRequest, fetchingUsers: true }
      }
    case actions.GET_USERS_SUCCESS:
      return {
        ...state,
        usersList: action.result.data,
        ongoingRequest: { ...state.ongoingRequest, fetchingUsers: false }
      }
    case actions.GET_USERS_FAILURE:
      return {
        ...state,
        ongoingRequest: { ...state.ongoingRequest, fetchingUsers: false }
      }
    case actions.GET_SINGLE_USER_REQUEST:
      return {
        ...state,
        ongoingRequest: { ...state.ongoingRequest, fetchingSingleUser: true }
      }
    case actions.GET_SINGLE_USER_SUCCESS:
      return {
        ...state,
        currentUser: action.result.data,
        ongoingRequest: { ...state.ongoingRequest, fetchingSingleUser: false }
      }
    case actions.GET_SINGLE_USER_FAILURE:
      return {
        ...state,
        ongoingRequest: { ...state.ongoingRequest, fetchingSingleUser: false }
      }
    case actions.RESET_SHOWED_USER:
      return {
        ...state,
        currentUser: initialState.currentUser,
      }
    default:
      return {
        ...state,
      }
  };
}

export default reducer;