import { iToast } from '@/utils'
import { all, call, put, takeLatest } from 'redux-saga/effects'

import { SendFundsActions } from './SendFundsSlice'
import sendFundsApi from '../../api/sendFundsApi'

function* getListFundsSaga(action) {
  const { payload } = action
  try {
    const res = yield call(sendFundsApi.getListFunds, payload)
    yield put(SendFundsActions.getListFundsSuccess(res.data.results))
  } catch (error) {
    iToast(error?.response?.data?.message || 'Đã xảy ra lỗi', 'error')
    yield put(SendFundsActions.getListFundsFail())
  }
}

function* getListMyFundsSaga(action) {
  const { payload } = action
  try {
    const res = yield call(sendFundsApi.getListMyFunds, payload)
    yield put(SendFundsActions.getListMyFundsSuccess(res.data.results?.datas))
  } catch (error) {
    iToast(error?.response?.data?.message || 'Đã xảy ra lỗi', 'error')
    yield put(SendFundsActions.getListMyFundsFail())
  }
}
function* sendFundsSaga(action) {
  const { payload } = action
  try {
    yield call(sendFundsApi.sendFunds, payload)
    yield put(SendFundsActions.sendFundsSuccess())
    yield put(SendFundsActions.getListFunds())
  } catch (error) {
    yield put(SendFundsActions.sendFundsFail())
    iToast(error?.response?.data?.message || 'Đã xảy ra lỗi', 'error')
  }
}
function* getCardMoneySaga(action) {
  const { payload } = action
  try {
    const res = yield call(sendFundsApi.getCardMoney, payload)
    yield put(SendFundsActions.getCardMoneySuccess(res.data.results))
  } catch (error) {
    yield put(SendFundsActions.getCardMoneyFail())
    iToast(error?.response?.data?.message || 'Đã xảy ra lỗi', 'error')
  }
}
export default function* SendFundsSaga() {
  yield all([
    takeLatest(SendFundsActions.getListFunds.toString(), getListFundsSaga),
    takeLatest(SendFundsActions.getListMyFunds.toString(), getListMyFundsSaga),
    takeLatest(SendFundsActions.sendFunds.toString(), sendFundsSaga),
    takeLatest(SendFundsActions.getCardMoney.toString(), getCardMoneySaga),
  ])
}
