import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: false,
  data: [],
  dataLevel1: [],
  dataLevel2: [],
  dataLevel3: [],
  dataLevelAll: [],
}

export const TeamSlice = createSlice({
  name: 'team',
  initialState: initialState,
  reducers: {
    getTeam: (state) => {
      state.loading = true
    },
    getTeamSuccess: (state, payload) => {
      state.loading = false
      state.data = payload.payload
    },
    getTeamFail: (state) => {
      state.loading = false
    },
    getTeamLevelAll: (state) => {
      state.loading = true
    },
    getTeamLevelALLSuccess: (state, payload) => {
      state.loading = false
      state.dataLevelAll = payload.payload
    },
    getTeamLevel1Success: (state, payload) => {
      state.loading = false
      state.dataLevel1 = [...state.dataLevel1, ...payload.payload].filter(
        (item, index, self) =>
          index === self.findIndex((t) => t._id === item._id)
      )
    },
    getTeamLevel2Success: (state, payload) => {
      state.loading = false
      state.dataLevel2 = [...state.dataLevel2, ...payload.payload].filter(
        (item, index, self) =>
          index === self.findIndex((t) => t._id === item._id)
      )
    },
    getTeamLevel3Success: (state, payload) => {
      state.loading = false
      state.dataLevel3 = [...state.dataLevel3, ...payload.payload].filter(
        (item, index, self) =>
          index === self.findIndex((t) => t._id === item._id)
      )
    },
    getTeamLevelAllFail: (state) => {
      state.loading = false
    },
  },
})

export const TeamActions = TeamSlice.actions

export default TeamSlice.reducer
