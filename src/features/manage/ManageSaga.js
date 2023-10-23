import { iToast } from '@/utils'
import { all, call, put, takeLatest } from 'redux-saga/effects'
import userApi from '../../api/userApi'
import bankApi from '../../api/bankApi'
import { ManageActions } from './ManageSlice'

function* changePassWordSaga(action) {
  const { payload } = action
  try {
    yield call(userApi.changePassword, payload)
    yield put(ManageActions.changePasswordSuccess())
    iToast('Thành công!', 'success')
    setTimeout(() => {
      history.back()
    }, 1000)
  } catch (error) {
    iToast(error?.response?.data?.message || 'Đã xảy ra lỗi', 'error')
    yield put(ManageActions.changePasswordFail())
  }
}
function* changePassWordLevel2Saga(action) {
  const { payload } = action
  try {
    yield call(userApi.changePasswordLevel2, payload)
    yield put(ManageActions.changePasswordLevel2Success())
    iToast('Thành công!', 'success')
    setTimeout(() => {
      history.back()
    }, 1000)
  } catch (error) {
    iToast(error?.response?.data?.message || 'Đã xảy ra lỗi', 'error')
    yield put(ManageActions.changePasswordLevel2Fail())
  }
}
function* historyTransactionSaga(action) {
  const { payload } = action
  try {
    const res = yield call(bankApi.historyTransaction, payload)
    yield put(ManageActions.historyTransactionSuccess(res.data.results.trans))
  } catch (error) {
    iToast(error?.response?.data?.message || 'Đã xảy ra lỗi', 'error')
    yield put(ManageActions.historyTransactionFail())
  }
}
function* historyRechargeSaga(action) {
  const { payload } = action
  try {
    const res = yield call(bankApi.historyRecharge, payload)
    yield put(ManageActions.historyRechargeSuccess(res?.data.results.datas))
  } catch (error) {
    iToast(error?.response?.data?.message || 'Đã xảy ra lỗi', 'error')
    yield put(ManageActions.historyRechargeFail())
  }
}
function* historyWithDrawSaga(action) {
  const { payload } = action
  try {
    const res = yield call(bankApi.historyWithDraw, payload)
    yield put(ManageActions.historyWithDrawSuccess(res?.data.results.datas))
  } catch (error) {
    iToast(error?.response?.data?.message || 'Đã xảy ra lỗi', 'error')
    yield put(ManageActions.historyWithDrawFail())
  }
}
function* uploadAvatarSaga(action) {
  const { payload } = action
  try {
    yield call(userApi.uploadAvatar, payload)
    yield put(ManageActions.uploadAvatarSuccess())
    iToast('Thành công!', 'success')
  } catch (error) {
    iToast(error?.response?.data?.message || 'Đã xảy ra lỗi', 'error')
    yield put(ManageActions.uploadAvatarFail())
  }
}
export default function* ManageSaga() {
  yield all([
    takeLatest(ManageActions.changePassword.toString(), changePassWordSaga),
    takeLatest(
      ManageActions.changePasswordLevel2.toString(),
      changePassWordLevel2Saga
    ),
    takeLatest(
      ManageActions.historyTransaction.toString(),
      historyTransactionSaga
    ),
    takeLatest(ManageActions.historyRecharge.toString(), historyRechargeSaga),
    takeLatest(ManageActions.historyWithDraw.toString(), historyWithDrawSaga),
    takeLatest(ManageActions.uploadAvatar.toString(), uploadAvatarSaga),
  ])
}
