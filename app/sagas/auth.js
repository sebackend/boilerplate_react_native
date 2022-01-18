import AsyncStorage from '@react-native-async-storage/async-storage';
import { takeEvery, call, put } from 'redux-saga/effects';
import * as actions from '../actions/auth';

import API from '../services/api';
import runDefaultSaga from './default';

// SIGN IN
const signInRequest = params => API.post('/login', params);
function* signInSuccessCallback(result, response) {
  if (result.errors) {
    throw new Error(result.errors.join('\n'));
  } else {
    
    const jwt = response.headers.get('Authorization').split('Bearer ')[1];
    
    yield call(AsyncStorage.setItem, 'jwt', jwt);
    yield put({ type: actions.SIGN_IN_SUCCESS, result, response });
  }
}

function* signInFailureCallback() {
  yield put({
    type: actions.SIGN_IN_FAILURE,
  });
}

function* signIn(action) {
  yield runDefaultSaga(
    { request: signInRequest, params: action.params },
    signInSuccessCallback,
    signInFailureCallback,
  );
}

// SIGN UP
const signUpRequest = params => API.post('/signup', params);
function* signUpSuccessCallback(result, response) {
  if (result.errors) {
    throw new Error(result.errors.join('\n'));
  } else {
    
    const jwt = response.headers.get('Authorization').split('Bearer ')[1];
    yield call(AsyncStorage.setItem, 'jwt', jwt);
    yield put({ type: actions.SIGN_UP_SUCCESS, result, response });
  }
}
function* signUpFailureCallback() {
  yield put({
    type: actions.SIGN_UP_FAILURE,
  });
}
function* signUp(action) {
  yield runDefaultSaga(
    { request: signUpRequest, params: action.params },
    signUpSuccessCallback,
    signUpFailureCallback,
  );
}

const validateTokenRequest = () => API.get('/me');
function* validateTokensSuccessCallback(result, response) {
  if (result.logged_in) {
    yield put({
      type: actions.VALIDATE_TOKEN_SUCCESS,
      result,
      response,
      user: result.user_info.data.attributes
    });
  } else {
    yield put({ type: actions.CLEAR_AUTH_INFO });
  }
}
function* validateTokensFailureCallback() {
  yield put({ type: actions.CLEAR_AUTH_INFO });
}
export function* validateToken() {
  yield runDefaultSaga(
    { request: validateTokenRequest },
    validateTokensSuccessCallback,
    validateTokensFailureCallback
  );
}

// SIGN OUT
const signOutRequest = () => API.delete('/logout');
function* signOutSuccessCallback(result) {  
  if (result.success) {
    yield call(AsyncStorage.removeItem, 'jwt');
    yield put({ type: actions.SIGN_OUT_SUCCESS });
  } else {
    throw new Error(result.errors.join('\n'));
  }
}
function* signOutFailureCallback() {
  yield put({ type: actions.SIGN_OUT_FAILURE });
}
function* signOut() {
  yield runDefaultSaga({ request: signOutRequest }, signOutSuccessCallback, signOutFailureCallback);
}

// DEFINE authSagas
export default function* authSagas() {
  yield takeEvery(actions.SIGN_IN_REQUEST, signIn);
  yield takeEvery(actions.SIGN_UP_REQUEST, signUp);
  yield takeEvery(actions.VALIDATE_TOKEN_REQUEST, validateToken);
  yield takeEvery(actions.SIGN_OUT_REQUEST, signOut);
}