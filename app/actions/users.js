export const GET_USERS_REQUEST = 'GET_USERS_REQUEST';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const GET_USERS_FAILURE = 'GET_USERS_FAILURE';

export const GET_SINGLE_USER_REQUEST = 'GET_SINGLE_USER_REQUEST';
export const GET_SINGLE_USER_SUCCESS = 'GET_SINGLE_USER_SUCCESS';
export const GET_SINGLE_USER_FAILURE = 'GET_SINGLE_USER_FAILURE';

export const RESET_SHOWED_USER = 'RESET_SHOWED_USER';

export const getUsers = () => ({
  type: GET_USERS_REQUEST,
});

export const getSingleUser = params => ({
  type: GET_SINGLE_USER_REQUEST,
  params
});

export const resetShowedUser = () => ({
  type: RESET_SHOWED_USER,
});