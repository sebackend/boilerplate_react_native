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
    
    const accessToken = response.headers.get('Authorization').split('Bearer ')[1];
    
    yield call(AsyncStorage.setItem, 'access-token', accessToken);
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
    
    const accessToken = response.headers.get('Authorization').split('Bearer ')[1];
    yield call(AsyncStorage.setItem, 'access-token', accessToken);
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

// // VALIDATE TOKENS
// const validateTokenRequest = () => API.get('/auth/validate_token');
// function* validateTokensSuccessCallback(result, response) {
//   // if (result.ok) {
//   yield put({
//     type: VALIDATE_TOKEN_SUCCESS,
//     result,
//     response,
//     navigateTo: 'App',
//   });
//   // } else {
//   //   throw new Error(response.errors.join('\n'));
//   // }
// }
// function* validateTokensFailureCallback() {
//   yield put({ type: CLEAR_AUTH_INFO, navigateTo: 'Auth' });
// }
// function* validateToken() {
//   yield runDefaultSaga(
//     { request: validateTokenRequest },
//     validateTokensSuccessCallback,
//     validateTokensFailureCallback,
//   );
// }

// // RECOVER PASSWORD
// const recoverPasswordRequest = params => API.post('/users/recover_password', params);
// function* recoverPasswordSuccessCallback(result) {
//   yield put({ type: PASSWORD_RECOVERY_FINISHED });
//   if (result.success) {
//     yield put({
//       type: SET_NOTICE,
//       title: 'Ã‰xito',
//       message: result.message,
//       kind: 'success',
//     });
//   } else {
//     throw new Error(result.errors.join('\n'));
//   }
// }
// function* recoverPasswordFailureCallback() {
//   // Error handled by runDefaultSaga
//   yield null;
// }
// function* recoverPassword(action) {
//   yield runDefaultSaga(
//     { request: recoverPasswordRequest, params: action.params },
//     recoverPasswordSuccessCallback,
//     recoverPasswordFailureCallback,
//   );
// }

// const addDeviceRequest = params => API.post(`/devices`, params);

// function* addDeviceSuccessCallback() {
//   yield put({ type: ADD_DEVICE_SUCCESS });
// }
// function* addDeviceFailureCallback() {
//   yield put({ type: ADD_DEVICE_FAILURE });
// }
// function* addDevice(action) {
//   yield runDefaultSaga(
//     { request: addDeviceRequest, params: action.params },
//     addDeviceSuccessCallback,
//     addDeviceFailureCallback,
//   );
// }

// DEFINE authSagas
export default function* authSagas() {
  yield takeEvery(actions.SIGN_IN_REQUEST, signIn);
  yield takeEvery(actions.SIGN_UP_REQUEST, signUp);
  // yield takeEvery(SIGN_OUT_REQUEST, signOut);
  // yield takeEvery(VALIDATE_TOKEN_REQUEST, validateToken);
  // yield takeEvery(PASSWORD_RECOVERY_REQUEST, recoverPassword);
  // yield takeEvery(ADD_DEVICE, addDevice);
}