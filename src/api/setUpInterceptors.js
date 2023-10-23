// import { API_GET_TOKEN } from '@/constants'
import { authActions } from '@/features/auth/authSlice'
import { getCookie } from '@/utils'
import { API_GET_TOKEN } from '../constants/api'
import { iToast } from '../utils'
import axiosClient from './axiosClient'

const setUpInterceptors = (store) => {
  const { dispatch } = store
  axiosClient.interceptors.request.use(
    (config) => {
      const token = getCookie('token')
      if (token && !config.headers.Authorization) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )
  axiosClient.interceptors.response.use(
    function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response
    },
    function (err) {
      const originalConfig = err.config
      if (err.response.status === 401 && originalConfig.url !== API_GET_TOKEN) {
        // dispatch(authActions.logout())
        // iToast('Bạn chưa được cấp quyền!', 'error')
      }
      if (err.response.status === 401) {
        // dispatch(authActions.logout())
        // iToast('Bạn chưa được cấp quyền!', 'error')
      }
      return Promise.reject(err)
    }
  )
  // axiosClient.interceptors.response.use(
  //   (response) => {
  //     if (response && response.data) {
  //       return response.data
  //     }
  //     return response
  //   },
  //   async (err) => {
  //     const originalConfig = err.config
  //     if (err.response.status === 401 && originalConfig.url !== API_GET_TOKEN) {
  //       // dispatch(authActions.logout())
  //       iToast('Bạn chưa được cấp quyền!','error')
  //     }
  //     return Promise.reject(err)
  //     // if (err.response.status === 401) {
  //     //   dispatch(authActions.logout())
  //     // }
  //     // return Promise.reject(err)
  //   }
  // )
}
export default setUpInterceptors
