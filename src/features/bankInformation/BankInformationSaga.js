import { iToast } from '@/utils'
import { all, call, put, takeLatest } from 'redux-saga/effects'

import { BankInformationActions } from './BankInformationSlice'
import bankApi from '../../api/bankApi'

function* setBankSaga(action) {
  const { payload } = action
  try {
    yield call(bankApi.setBank, payload)
    yield put(BankInformationActions.setBankSuccess())
    iToast('Thành công!', 'success')
  } catch (error) {
    iToast(error?.response?.data?.message || 'Đã xảy ra lỗi', 'error')
    yield put(BankInformationActions.setBankFail())
  }
}

export default function* authSaga() {
  yield all([
    takeLatest(BankInformationActions.setBank.toString(), setBankSaga),
  ])
}
