import { iToast } from '@/utils'
import { all, call, put, takeLatest } from 'redux-saga/effects'

import bankApi from '../../api/bankApi'
import { WelFareActions } from './WelFareSlice'
import welFareApi from '../../api/welFareApi'

function* getRollCallSaga(action) {
  const { payload } = action
  try {
    const res = yield call(welFareApi.getRollCall, payload)
    yield put(WelFareActions.getRollCallSuccess(res.data.results))
  } catch (error) {
    iToast(error?.response?.data?.message || 'Đã xảy ra lỗi', 'error')
    yield put(WelFareActions.getRollCallFail())
  }
}

function* getStatisticSaga(action) {
  const { payload } = action
  try {
    const res = yield call(welFareApi.getStatistic, payload)
    yield put(WelFareActions.getStatisticSuccess(res.data.results))
  } catch (error) {
    yield put(WelFareActions.getStatisticFail())
  }
}
function* reciveSaga(action) {
  const { payload } = action
  try {
    yield call(welFareApi.recive, payload)
    yield put(WelFareActions.reciveSuccess())
    yield put(WelFareActions.getRollCall())
  } catch (error) {
    yield put(WelFareActions.reciveFail())
    iToast(error?.response?.data?.message || 'Đã xảy ra lỗi', 'error')
  }
}
export default function* WelFareSaga() {
  yield all([
    takeLatest(WelFareActions.getRollCall.toString(), getRollCallSaga),
    takeLatest(WelFareActions.getStatistic.toString(), getStatisticSaga),
    takeLatest(WelFareActions.recive.toString(), reciveSaga),
  ])
}
