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

export default function* usersSagas() {
  yield takeEvery(actions.GET_USERS_REQUEST, getUsers);
}