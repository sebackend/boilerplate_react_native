import {
  call, put, race, delay,
} from 'redux-saga/effects';
  
  import API from '../services/api';
  // import { SET_NOTICE } from '../actions/notice';
  
  function* runDefaultSaga(callRequest, successCallback, failureCallback) {
    try {
      const { response, timeout } = yield race({
        response: call(callRequest.request, callRequest.params),
        timeout: delay(API.getGlobalTimeout()),
      });
  
      if (timeout) {
        throw new Error(API.getTimeoutMessage());
      }
      console.log('response')
      console.log(response)
      if (response.ok) {
        const result = yield response.json();
        yield successCallback(result, response);
      } else {
        const message = yield response.json();
        throw message.errors || message.message || 'Inténtelo más tarde.';
      }
    } catch (err) {
      console.log('err')
      console.log(err)
      yield failureCallback(err);
      // yield put({
      //   type: SET_NOTICE,
      //   title: 'Error',
      //   message: err.toString(),
      //   kind: 'error',
      // });
    }
  }
  
export default runDefaultSaga;
