import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: false,
  historyTransaction: [],
  historyRecharge: [],
  historyWithDraw: [],
}

export const ManageSlice = createSlice({
  name: 'manage',
  initialState: initialState,
  reducers: {
    changePassword: (state) => {
      state.loading = true
    },
    changePasswordSuccess: (state) => {
      state.loading = false
    },
    changePasswordFail: (state) => {
      state.loading = false
    },
    changePasswordLevel2: (state) => {
      state.loading = true
    },
    changePasswordLevel2Success: (state) => {
      state.loading = false
    },
    changePasswordLevel2Fail: (state) => {
      state.loading = false
    },
    historyTransaction: (state) => {
      state.loading = true
    },
    historyTransactionSuccess: (state, payload) => {
      state.loading = false
      state.historyTransaction = payload.payload
    },
    historyTransactionFail: (state) => {
      state.loading = false
    },
    historyRecharge: (state) => {
      state.loading = true
    },
    historyRechargeSuccess: (state, payload) => {
      state.loading = false
      state.historyRecharge = [
        ...state.historyRecharge,
        ...payload.payload,
      ].filter(
        (item, index, self) =>
          index === self.findIndex((t) => t._id === item._id)
      )
    },
    historyRechargeFail: (state) => {
      state.loading = false
    },
    historyWithDraw: (state) => {
      state.loading = true
    },
    historyWithDrawSuccess: (state, payload) => {
      state.loading = false
      state.historyWithDraw = [
        ...state.historyWithDraw,
        ...payload.payload,
      ].filter(
        (item, index, self) =>
          index === self.findIndex((t) => t._id === item._id)
      )
    },
    historyWithDrawFail: (state) => {
      state.loading = false
    },

    uploadAvatar: (state) => {
      state.loading = true
    },
    uploadAvatarSuccess: (state) => {
      state.loading = false
    },
    uploadAvatarFail: (state) => {
      state.loading = false
    },
  },
})

export const ManageActions = ManageSlice.actions

export default ManageSlice.reducer
