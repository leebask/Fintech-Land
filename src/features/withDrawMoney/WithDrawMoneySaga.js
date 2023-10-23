import { iToast } from '@/utils'
import { all, call, put, takeLatest } from 'redux-saga/effects'

import { WithDrawMoneyActions } from './WithDrawMoneySlice'
import bankApi from '../../api/bankApi'

function* setBankSaga(action) {
  const { payload } = action
  try {
    yield call(bankApi.withDrawMoney, payload)
    yield put(WithDrawMoneyActions.withDrawMoneySuccess())
  } catch (error) {
    iToast(error?.response?.data?.message || 'Đã xảy ra lỗi', 'error')
    yield put(WithDrawMoneyActions.withDrawMoneyFail())
  }
}

export default function* WithDrawMoneySaga() {
  yield all([takeLatest(WithDrawMoneyActions.withDrawMoney.toString(), setBankSaga)])
}
