import { takeEvery, put } from 'redux-saga/effects';
import * as actions from '../actions/users';
import API from '../services/api';
import runDefaultSaga from './default';


const getUsersRequest = () => API.get('/users');

function* getUsersSuccessCallback(result, response) {
  if (result.errors) {
    throw new Error(response.errors.join('\n'));
  } else {
    yield put({
      type: actions.GET_USERS_SUCCESS,
      result,
      response,
    });
  }
}

function* getUsersFailureCallback() {
  yield put({ type: actions.GET_USERS_FAILURE });
}

function* getUsers(action) {
  yield runDefaultSaga(
    { request: getUsersRequest, params: action.params },
    getUsersSuccessCallback,
    getUsersFailureCallback
  );
}

const getSingleUserRequest = params => API.get(`/users/${params.userId}`);

function* getSingleUserSuccessCallback(result, response) {
  if (result.errors) {
    throw new Error(response.errors.join('\n'));
  } else {
    yield put({
      type: actions.GET_SINGLE_USER_SUCCESS,
      result,
      response,
    });
  }
}

function* getSingleUserFailureCallback() {
  yield put({ type: actions.GET_SINGLE_USER_FAILURE });
}

function* getSingleUser(action) {
  yield runDefaultSaga(
    { request: getSingleUserRequest, params: action.params },
    getSingleUserSuccessCallback,
    getSingleUserFailureCallback
  );
}

export default function* userSagas() {
  yield takeEvery(actions.GET_USERS_REQUEST, getUsers);
  yield takeEvery(actions.GET_SINGLE_USER_REQUEST, getSingleUser);
}