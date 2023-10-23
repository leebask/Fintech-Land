// import queryString from 'query-string'
import { API_GET_ROLL_CALL, API_GET_STATISTIC } from '../constants/api'
import axiosClient from './axiosClient'

const welFareApi = {
  getRollCall() {
    return axiosClient.get(API_GET_ROLL_CALL, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
  },
  getStatistic() {
    return axiosClient.get(API_GET_STATISTIC, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
  },
  recive() {
    return axiosClient.post(API_GET_ROLL_CALL, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
  },
}

export default welFareApi
