import authApi from '@/api/authApi'
import { iToast, removeCookie, setCookie } from '@/utils'
import { all, call, put, takeLatest } from 'redux-saga/effects'
import { authActions } from './authSlice'

function* loginSaga(action) {
  try {
    const { payload } = action
    const { email } = payload
    // let role = {}

    const response = yield call(authApi.login, {
      ...payload,
      // grant_type: 'password',
    })

    console.log(response, 'response')
    setCookie('token', response?.data?.results?.access_token)

    let data = {}

    if (import.meta.env.VITE_APP_STAGE === 'development') {
      try {
        data = yield call(authApi.getUserInfo, response.data?.access_token)
      } catch (error) {
        data = {}
      }
    } else {
      data = yield call(authApi.getUserInfo, response.data?.access_token)
    }
    setCookie('user', email)
    localStorage.setItem(
      'user',
      JSON.stringify({
        user: email,
        fullName: data?.data?.results?.fullName,
        avatar: data?.data?.results?.avatar,
        role: response?.data?.results?.roles,
      })
    )
    yield put(
      authActions.loginSuccess({
        ...data?.data?.results,
        role: response?.data?.results?.roles,
      })
    )
  } catch (error) {
    iToast(error?.response?.data?.message || 'Đăng nhập thất bại', 'error')
    yield put(authActions.loginFail())
  }
}

function* logoutSaga() {
  localStorage.removeItem('user')
  removeCookie('user')
  removeCookie('token')
  window.location = '/login'
}

function* getUserInfoSaga(action) {
  const { payload } = action
  try {
    const data = yield call(authApi.getUserInfo, payload)
    yield put(authActions.getUserInfoSuccess(data.data?.results))
  } catch (error) {
    iToast(error?.response?.data?.message || 'Đăng nhập thất bại', 'error')
    yield put(authActions.getUserInfoFail())
  }
}

export default function* authSaga() {
  yield all([
    takeLatest(authActions.login.toString(), loginSaga),
    takeLatest(authActions.logout.toString(), logoutSaga),
    takeLatest(authActions.getUserInfo.toString(), getUserInfoSaga),
  ])
}
