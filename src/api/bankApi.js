// import queryString from 'query-string'
import {
  API_GET_INFO_ADMIN_BANK,
  API_GET_INFO_BANK,
  API_HISTORY_RECHARGE,
  API_HISTORY_TRANSACTION,
  API_HISTORY_WITHDRAW,
  API_RECHARGE_BANK,
  API_SET_BANK,
  API_WITHDRAW_BANK,
} from '../constants/api'
import axiosClient from './axiosClient'

const bankApi = {
  reChargeBank(payload) {
    return axiosClient.post(API_RECHARGE_BANK, payload, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
  },
  getBankInfo() {
    return axiosClient.get(API_GET_INFO_BANK, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
  },
  setBank(payload) {
    return axiosClient.post(API_SET_BANK, payload, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
  },
  withDrawMoney(payload) {
    return axiosClient.post(API_WITHDRAW_BANK, payload, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
  },
  historyRecharge(payload) {
    return axiosClient.get(API_HISTORY_RECHARGE + payload, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
  },
  historyWithDraw(payload) {
    return axiosClient.get(API_HISTORY_WITHDRAW + payload, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
  },
  historyTransaction() {
    return axiosClient.get(API_HISTORY_TRANSACTION, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
  },
  getAdminBank() {
    return axiosClient.get(API_GET_INFO_ADMIN_BANK, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
  },
}

export default bankApi
