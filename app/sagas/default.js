import {
  call, put, race, delay,
} from 'redux-saga/effects';
  
  import API from '../services/api';
  
  function* runDefaultSaga(callRequest, successCallback, failureCallback) {
    try {
      const { response, timeout } = yield race({
        response: call(callRequest.request, callRequest.params),
        timeout: delay(API.getGlobalTimeout()),
      });
  
      if (timeout) {
        throw new Error(API.getTimeoutMessage());
      }

      if (response.ok) {
        const result = response.status === 204 ? { success: true } : yield response.json();
        yield successCallback(result, response);
      } else {
        const message = yield response.json();
        throw message.errors || message.message || 'Inténtelo más tarde.';
      }
    } catch (err) {
      yield failureCallback(err);
    }
  }
  
export default runDefaultSaga;
