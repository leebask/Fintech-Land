import { iToast } from '@/utils'
import { all, call, put, takeLatest } from 'redux-saga/effects'

import { ReChargeActions } from './ReChargeSlice'
import bankApi from '../../api/bankApi'

function* reChargeSaga(action) {
  const { payload } = action
  console.log(payload, 'payload')
  try {
    yield call(bankApi.reChargeBank, payload)
    yield put(ReChargeActions.reChargeSuccess())
    iToast('Nạp tiền thành công!', 'success')
  } catch (error) {
    iToast(error?.response?.data?.message || 'Nạp tiền thất bại', 'error')
    yield put(ReChargeActions.reChargeFail())
  }
}
function* getInfoBankSaga() {
  try {
    const res = yield call(bankApi.getBankInfo)
    yield put(ReChargeActions.getInfoBankSuccess(res.data?.results))
  } catch (error) {
    iToast(
      error?.response?.data?.message || 'Lấy thông tin ngân hàng thất bại',
      'error'
    )
    yield put(ReChargeActions.getInfoBankFail())
  }
}
function* getInfoAdminBankSaga() {
  try {
    
    const res = yield call(bankApi.getAdminBank)
    yield put(ReChargeActions.getInfoAdminBankSuccess(res.data?.results))
  } catch (error) {
    iToast(
      error?.response?.data?.message || 'Lấy thông tin ngân hàng thất bại',
      'error'
    )
    yield put(ReChargeActions.getInfoAdminBankFail())
  }
}
export default function* authSaga() {
  yield all([
    takeLatest(ReChargeActions.reCharge.toString(), reChargeSaga),
    takeLatest(ReChargeActions.getInfoBank.toString(), getInfoBankSaga),
    takeLatest(
      ReChargeActions.getInfoAdminBank.toString(),
      getInfoAdminBankSaga
    ),
  ])
}
