import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: false,
  listFunds: [],
  listMyFunds: [],
  isSendFunds: false,
  dataCardMoney:{}
}

export const SendFundsSlice = createSlice({
  name: 'sendFunds',
  initialState: initialState,
  reducers: {
    getListFunds: (state) => {
      state.loading = true
    },
    getListFundsSuccess: (state, action) => {
      state.loading = false
      state.listFunds = action.payload
    },
    getListFundsFail: (state) => {
      state.loading = false
    },
    getListMyFunds: (state) => {
      state.loading = true
    },
    getListMyFundsSuccess: (state, action) => {
      state.loading = false
      state.listMyFunds = action.payload
    },
    getListMyFundsFail: (state) => {
      state.loading = false
    },
    sendFunds: (state) => {
      state.loading = true
    },
    sendFundsSuccess: (state) => {
      state.loading = false
      state.isSendFunds = true
    },
    sendFundsFail: (state) => {
      state.loading = false
      state.isSendFunds = false
    },
    getCardMoney: (state) => {
      state.loading = true
    },
    getCardMoneySuccess: (state, action) => {
      state.loading = false
      state.dataCardMoney = action.payload
    },
    getCardMoneyFail: (state) => {
      state.loading = false
    },
  },
})

export const SendFundsActions = SendFundsSlice.actions

export default SendFundsSlice.reducer
