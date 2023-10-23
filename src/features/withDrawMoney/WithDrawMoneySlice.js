import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: false,
  success: false,
}

export const WithDrawMoneySlice = createSlice({
  name: 'withDrawMoney',
  initialState: initialState,
  reducers: {
    resetSuccess: (state) => {
      state.success = false
    },
    withDrawMoney: (state) => {
      state.loading = true
    },
    withDrawMoneySuccess: (state) => {
      state.loading = false
      state.success = true

    },
    withDrawMoneyFail: (state) => {
      state.loading = false

    },
  },
})

export const WithDrawMoneyActions = WithDrawMoneySlice.actions

export default WithDrawMoneySlice.reducer
