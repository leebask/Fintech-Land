import { getCookie } from '@/utils'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoggedIn: Boolean(localStorage.getItem('user')) && getCookie('token'),
  user: JSON.parse(localStorage.getItem('user') || '{}'),
  loading: false,
  userLoading: false,
  userInfo: null,
  role: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    login: (state) => {
      state.loading = true
    },
    loginSuccess: (state, action) => {
      console.log(action)
      state.isLoggedIn = true
      state.user = action.payload
      state.loading = false
      state.role = action.payload.role
    },
    loginFail: (state) => {
      state.isLoggedIn = false
      state.user = {}
      state.loading = false
    },
    logout: (state) => {
      state.isLoggedIn = false
      state.user = undefined
    },

    getUserInfo: (state) => {
      state.userLoading = true
    },
    getUserInfoSuccess: (state, action) => {
      state.userLoading = false
      state.userInfo = action.payload
    },
    getUserInfoFail: (state) => {
      state.userLoading = false
    },
  },
})

export const authActions = authSlice.actions

export default authSlice.reducer
