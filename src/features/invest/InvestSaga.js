import { iToast } from '@/utils'
import { all, call, put, takeLatest } from 'redux-saga/effects'
import { InvestActions } from './InvestSlice'
import investApi from '../../api/investApi'

function* getListSaga(action) {
  const { payload } = action
  try {
    const res = yield call(investApi.getListInvest, payload)
    yield put(InvestActions.getListSuccess(res.data.results))
  } catch (error) {
    iToast(error?.response?.data?.message || 'Đã xảy ra lỗi', 'error')
    yield put(InvestActions.registerFail())
  }
}
function* getDetailSaga(action) {
  const { payload } = action
  try {
    const res = yield call(investApi.getDetailInvest, payload)
    yield put(InvestActions.getDetailSuccess(res.data.results))
  } catch (error) {
    iToast(error?.response?.data?.message || 'Đã xảy ra lỗi', 'error')
    yield put(InvestActions.registerFail())
  }
}
function* buyInvestSaga(action) {
  const { payload } = action
  try {
    yield call(investApi.buyInvest, payload)
    yield put(InvestActions.buyInvestSuccess())
    yield put(InvestActions.getList())
  } catch (error) {
    iToast(error?.response?.data?.message || 'Đã xảy ra lỗi', 'error')
    yield put(InvestActions.buyInvestFail())
  }
}
function* getMyInvestSaga(action) {
  const { payload } = action
  try {
    const res = yield call(investApi.getMyInvest, payload)
    yield put(InvestActions.getMyInvestSuccess(res.data.results.packages))
  } catch (error) {
    iToast(error?.response?.data?.message || 'Đã xảy ra lỗi', 'error')
    yield put(InvestActions.getMyInvestFail())
  }
}
function* cancelMyInvestSaga(action) {
  const { payload } = action
  try {
    yield call(investApi.cancelMyInvest, payload)
    yield put(InvestActions.cancelMyInvestSuccess())
    yield put(InvestActions.getMyInvest())
  } catch (error) {
    iToast(error?.response?.data?.message || 'Đã xảy ra lỗi', 'error')
    yield put(InvestActions.cancelMyInvestFail())
  }
}
export default function* InvestSaga() {
  yield all([
    takeLatest(InvestActions.getList.toString(), getListSaga),
    takeLatest(InvestActions.getDetail.toString(), getDetailSaga),
    takeLatest(InvestActions.buyInvest.toString(), buyInvestSaga),
    takeLatest(InvestActions.getMyInvest.toString(), getMyInvestSaga),
    takeLatest(InvestActions.cancelMyInvest.toString(), cancelMyInvestSaga),
  ])
}
