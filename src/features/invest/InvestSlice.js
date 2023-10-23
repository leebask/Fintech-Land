import { createSlice } from '@reduxjs/toolkit'
import { set } from 'react-hook-form'

const initialState = {
  loading: false,
  list: [],
  detail: {},
  isBuy: false,
  isCancel: false,
}

export const InvestSlice = createSlice({
  name: 'invest',
  initialState: initialState,
  reducers: {
    getList: (state) => {
      state.loading = true
    },
    getListSuccess: (state, payload) => {
      state.loading = false
      state.list = payload.payload
    },
    getListFail: (state) => {
      state.loading = false
    },
    getDetail: (state) => {
      state.loading = true
    },
    getDetailSuccess: (state, payload) => {
      state.loading = false
      state.detail = payload.payload
    },
    getDetailFail: (state) => {
      state.loading = false
    },
    buyInvest: (state) => {
      state.loading = true
      state.isBuy = false
    },
    buyInvestSuccess: (state) => {
      state.loading = false
      state.isBuy = true
    },
    buyInvestFail: (state) => {
      state.loading = false
      state.isBuy = false
    },

    //kênh mua
    getMyInvest: (state) => {
      state.loading = true
    },
    getMyInvestSuccess: (state, payload) => {
      state.loading = false
      state.list = payload.payload
    },
    getMyInvestFail: (state) => {
      state.loading = false
    },
    cancelMyInvest: (state) => {
      state.loading = true
      state.isCancel = false
    },
    cancelMyInvestSuccess: (state) => {
      state.loading = false
      state.isCancel = true
    },
    cancelMyInvestFail: (state) => {
      state.loading = false
      state.isCancel = false
      // state.isCancel = true
    },
  },
})

export const InvestActions = InvestSlice.actions

export default InvestSlice.reducer
