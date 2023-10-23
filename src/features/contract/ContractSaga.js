import { iToast } from '@/utils'
import { all, call, put, takeLatest } from 'redux-saga/effects'

import bankApi from '../../api/bankApi'
import { ContractActions } from './ContractSlice'
import investApi from '../../api/investApi'

function* getContractSaga(action) {
  const { payload } = action
  try {
    const res = yield call(investApi.getContract, payload)
    yield put(ContractActions.getContractSuccess(res.data.results?.packages))
  } catch (error) {
    iToast(error?.response?.data?.message || 'Đã xảy ra lỗi', 'error')
    yield put(ContractActions.getContractFail())
  }
}

export default function* ContractSaga() {
  yield all([
    takeLatest(ContractActions.getContract.toString(), getContractSaga),
  ])
}
