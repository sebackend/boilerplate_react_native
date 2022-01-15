import { all } from 'redux-saga/effects';
import authSagas from './auth';
// import therapeuticProceduresSagas from './therapeuticProcedures';
// import treatmentPlanSchedulesSagas from './treatmentPlanSchedules';
// import sessionSagas from './sessions';
// import contentSagas from './contents';
// import evaluationSagas from './evaluations';

export default function* rootSaga() {
  yield all([
    authSagas(),
  ]);
}