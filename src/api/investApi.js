// import queryString from 'query-string'

import {
  API_GET_INVEST,
  API_GET_MY_INVEST,
  API_POST_INVEST_BUY,
} from '../constants/api'
import axiosClient from './axiosClient'

const investApi = {
  getListInvest() {
    return axiosClient.get(API_GET_INVEST, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
  },
  getDetailInvest(payload) {
    return axiosClient.get(API_GET_INVEST + '/' + payload, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
  },
  buyInvest(payload) {
    return axiosClient.post(API_POST_INVEST_BUY, payload, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
  },
  getMyInvest() {
    return axiosClient.get(API_GET_MY_INVEST, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
  },
  cancelMyInvest(payload) {
    return axiosClient.put(API_GET_INVEST + '/cancel/' + payload, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
  },
  getContract(payload) {
    return axiosClient.get(API_GET_MY_INVEST + '?status=' + payload, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
  },
}

export default investApi
