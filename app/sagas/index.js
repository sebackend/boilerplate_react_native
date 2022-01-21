import { all } from 'redux-saga/effects';
import authSagas from './auth';
import userSagas from './users';

export default function* rootSaga() {
  yield all([
    authSagas(),
    userSagas(),
  ]);
}