import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: false,
}

export const BankInformationSlice = createSlice({
  name: 'bankInformation',
  initialState: initialState,
  reducers: {
    setBank: (state) => {
      state.loading = true
    },
    setBankSuccess: (state) => {
      state.loading = false
    },
    setBankFail: (state) => {
      state.loading = false
    },
  },
})

export const BankInformationActions = BankInformationSlice.actions

export default BankInformationSlice.reducer
