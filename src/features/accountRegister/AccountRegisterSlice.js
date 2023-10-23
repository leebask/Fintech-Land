import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: false,
}

export const AccountRegisterSlice = createSlice({
  name: 'register',
  initialState: initialState,
  reducers: {
    register: (state) => {
      state.loading = true
    },
    registerSuccess: (state) => {
      state.loading = false
    },
    registerFail: (state) => {
      state.loading = false
    },
  },
})

export const AccountRegisterActions = AccountRegisterSlice.actions

export default AccountRegisterSlice.reducer
