import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: false,
  list: [],
}

export const ContractSlice = createSlice({
  name: 'contract',
  initialState: initialState,
  reducers: {
    getContract: (state) => {
        
      state.loading = true
    },
    getContractSuccess: (state,payload) => {
      state.loading = false
        state.list = payload.payload
    },
    getContractFail: (state) => {
      state.loading = false
    },
  },
})

export const ContractActions = ContractSlice.actions

export default ContractSlice.reducer
