// import queryString from 'query-string'
import { API_GET_CARD_MONEY, API_LIST_MY_FUNDS, API_LIST_SEND_FUNDS, API_SEND_FUNDS } from '../constants/api'
import axiosClient from './axiosClient'

const sendFundsApi = {
  getListFunds() {
    return axiosClient.get(API_LIST_SEND_FUNDS, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
  },
  getListMyFunds() {
    return axiosClient.get(API_LIST_MY_FUNDS, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
  },


  sendFunds(payload) {
    return axiosClient.post(API_SEND_FUNDS, payload, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
  },
  getCardMoney() {
    return axiosClient.get(API_GET_CARD_MONEY , {
      headers: {
        'Content-Type': 'application/json',
      },
    })
  },
}

export default sendFundsApi
