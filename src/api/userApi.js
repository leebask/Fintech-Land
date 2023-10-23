// import queryString from 'query-string'
import {
  API_CHANGE_PASSWORD,
  API_CHANGE_PASSWORD_LEVEL_2,
  API_UP_AVATAR,
} from '../constants/api'
import axiosClient from './axiosClient'

const userApi = {
  changePassword(payload) {
    console.log(payload)
    return axiosClient.put(API_CHANGE_PASSWORD, payload, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
  },
  changePasswordLevel2(payload) {
    return axiosClient.put(API_CHANGE_PASSWORD_LEVEL_2, payload, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
  },

  uploadAvatar(payload) {
    return axiosClient.put(API_UP_AVATAR, payload, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
  },
}

export default userApi
