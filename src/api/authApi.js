import {
  API_GET_TOKEN,
  // API_ROLE_CALLCENTER,
  // API_ROLE_cHAT,
  // BASIC_ID,
  // USER_API,
} from '@/constants/api'
// import queryString from 'query-string'
import axiosClient from './axiosClient'
import { API_GET_PROFILE_USER, API_REGISTER } from '../constants/api'

const authApi = {
  login(payload) {
    return axiosClient.post(API_GET_TOKEN,payload, {
      headers: {
        // Authorization: `Basic ${BASIC_ID}`,
        'Content-Type': 'application/json',
      },
    })
  },
  register(payload) {
    return axiosClient.post(API_REGISTER,payload, {
      headers: {
        // Authorization: `Basic ${BASIC_ID}`,
        'Content-Type': 'application/json',
      },
    })
  },
  getUserInfo(token) {
    return axiosClient.get(
      API_GET_PROFILE_USER,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
  },
  // getRoleCallCenter({ token, timeout }) {
  //   return axiosClient.get(API_ROLE_CALLCENTER, {
  //     data: {},
  //     'Content-Type': 'application/json',
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //     timeout,
  //   })
  // },
  // getRoleChat({ token, timeout }) {
  //   return axiosClient.post(
  //     API_ROLE_cHAT,
  //     {},
  //     {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //       timeout,
  //     }
  //   )
  // },
}

export default authApi
