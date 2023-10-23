import authApi from '@/api/authApi'
import { iToast } from '@/utils'
import { all, call, put, takeLatest } from 'redux-saga/effects'
import { AccountRegisterActions } from './AccountRegisterSlice'

function* registerSaga(action) {
  const { payload } = action
  try {
    yield call(authApi.register, payload)
    yield put(AccountRegisterActions.registerSuccess())
    iToast('Đăng kí thành công!', 'success')
    setTimeout(() => {
      history.back('/login')
    }, 1000)
  } catch (error) {
    iToast(error?.response?.data?.message || 'Đăng kí thất bại', 'error')
    yield put(AccountRegisterActions.registerFail())
  }
}

export default function* authSaga() {
  yield all([
    takeLatest(AccountRegisterActions.register.toString(), registerSaga),
  ])
}
