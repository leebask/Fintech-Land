import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: false,
  listRollCall: [],
  statistic: {},
  isRecive: false,
}

export const WelFareSlice = createSlice({
  name: 'welFare',
  initialState: initialState,
  reducers: {
    getRollCall: (state) => {
      state.loading = true
    },
    getRollCallSuccess: (state, payload) => {
      state.loading = false
      state.listRollCall = payload.payload
    },
    getRollCallFail: (state) => {
      state.loading = false
    },
    getStatistic: (state) => {
      state.loading = true
    },
    getStatisticSuccess: (state, payload) => {
      state.loading = false
      state.statistic = payload.payload
    },
    getStatisticFail: (state) => {
      state.loading = false
    },
    recive: (state) => {
      state.loading = true
    },
    reciveSuccess: (state) => {
      state.loading = false
      state.isRecive = true
    },
    reciveFail: (state) => {
      state.loading = false
      state.isRecive = false
    },
  },
})

export const WelFareActions = WelFareSlice.actions

export default WelFareSlice.reducer
