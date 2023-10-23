import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: false,
  bankInfo: {},
  adminBankInfo: {}
}

export const ReChargeSlice = createSlice({
  name: 'reCharge',
  initialState: initialState,
  reducers: {
    reCharge: (state) => {
      state.loading = true
    },
    reChargeSuccess: (state) => {
      state.loading = false
    },
    reChargeFail: (state) => {
      state.loading = false
    },
    getInfoBank: (state) => {
      state.loading = true
    },
    getInfoBankSuccess: (state, action) => {
      state.bankInfo = action.payload
      state.loading = false
    },
    getInfoAdminBank: (state) => {
      state.loading = true
    },
    getInfoAdminBankSuccess: (state, action) => {
      state.adminBankInfo = action.payload
      state.loading = false
    },
    getInfoAdminBankFail: (state) => {
      state.loading = false
    },
  },
})

export const ReChargeActions = ReChargeSlice.actions

export default ReChargeSlice.reducer
