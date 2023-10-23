// import queryString from 'query-string'
import { API_GET_TEAM, API_GET_TEAM_LEVEL_ALL } from '../constants/api'
import axiosClient from './axiosClient'

const teamApi = {
  getTeam() {
    return axiosClient.get(API_GET_TEAM, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
  },
  getTeamlevelAll(payload) {
    return axiosClient.post(API_GET_TEAM_LEVEL_ALL+payload.page,payload.payload ,{
      headers: {
        'Content-Type': 'application/json',
      },
    })
  },
}

export default teamApi
