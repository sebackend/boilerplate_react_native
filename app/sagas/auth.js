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

// // SIGN OUT
// const signOutRequest = () => API.delete('/auth/sign_out');
// function* signOutSuccessCallback(result) {
//   if (result.success) {
//     yield call(AsyncStorage.removeItem, 'access-token');
//     yield call(AsyncStorage.removeItem, 'client');
//     yield call(AsyncStorage.removeItem, 'expiry');
//     yield call(AsyncStorage.removeItem, 'token-type');
//     yield call(AsyncStorage.removeItem, 'uid');
//     yield put({ type: SIGN_OUT_SUCCESS });
//     yield put({
//       type: SET_NOTICE,
//       message: 'SesiÃ³n cerrada corectamente',
//       kind: 'success',
//       title: 'Ã‰xito',
//     });
//   } else {
//     throw new Error(result.errors.join('\n'));
//   }
// }
// function* signOutFailureCallback() {
//   yield put({ type: SIGN_OUT_FAILURE });
// }
// function* signOut() {
//   yield runDefaultSaga({ request: signOutRequest }, signOutSuccessCallback, signOutFailureCallback);
// }

const validateTokenRequest = () => API.get('/me');
function* validateTokensSuccessCallback(result, response) {
  
  console.log('validateTokensSuccessCallback')
  console.log(result)
  
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


// DEFINE authSagas
export default function* authSagas() {
  yield takeEvery(actions.SIGN_IN_REQUEST, signIn);
  yield takeEvery(actions.SIGN_UP_REQUEST, signUp);
  yield takeEvery(actions.VALIDATE_TOKEN_REQUEST, validateToken);
  //yield takeEvery(actions.SIGN_OUT_REQUEST, signOut);
}