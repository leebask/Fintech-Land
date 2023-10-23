import { iToast } from '@/utils'
import { all, call, put, takeLatest } from 'redux-saga/effects'

import { TeamActions } from './TeamSlice'
import teamApi from '../../api/teamApi'

function* getTeamSaga(action) {
  const { payload } = action
  try {
    const res = yield call(teamApi.getTeam, payload)
    yield put(TeamActions.getTeamSuccess(res.data.results))
  } catch (error) {
    iToast(error?.response?.data?.message || 'Đã xảy ra lỗi', 'error')
    yield put(TeamActions.getTeamFail())
  }
}
function* getTeamLevelAllSaga(action) {
  const { payload } = action
  console.log(payload);
  try {
    const res = yield call(teamApi.getTeamlevelAll, payload)
    console.log(payload.payload?.level)

    yield put(TeamActions.getTeamLevelALLSuccess(res.data.results?.datas))
    if(payload.payload?.level ==1){
      yield put(TeamActions.getTeamLevel1Success(res.data.results?.datas.users))
    }
    if(payload.payload?.level ==2){
      yield put(TeamActions.getTeamLevel2Success(res.data.results?.datas.users))
    }
    if(payload.payload?.level ==3){
      yield put(TeamActions.getTeamLevel3Success(res.data.results?.datas.users))
    }
  } catch (error) {
    iToast(error?.response?.data?.message || 'Đã xảy ra lỗi', 'error')
    yield put(TeamActions.getTeamLevelAllFail())
  }
}
export default function* TeamSaga() {
  yield all([
    takeLatest(TeamActions.getTeam.toString(), getTeamSaga),
    takeLatest(TeamActions.getTeamLevelAll.toString(), getTeamLevelAllSaga),
  ])
}
