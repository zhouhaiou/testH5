import axios from 'axios'
import { getToken, removeToken } from '@/utils/token'

// 创建一个 axios 实例
const service = axios.create({
  baseURL: process.env.VUE_APP_API,
  timeout: 5000, // 请求超时时间
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    // 在请求发送之前做一些处理
    const token = getToken()
    // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
    config.headers['Authorization'] = "bearer " + token
    return config
  },
  error => {
    // 发送失败
    console.log(error)
    Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  response => {
    // dataAxios 是 axios 返回数据中的 data
    const dataAxios = response.data
    // 这个状态码是和后端约定的
    const { errcode } = dataAxios
    // 根据 code 进行判断
    if (errcode === undefined) {
      return dataAxios
    } else {
      // 有 code 代表这是一个后端接口 可以进行进一步的判断
      switch (errcode) {
        // 不合法的用户凭证，需要重新登录
        case "20001":
          removeToken()
          window.location.href = '/user/login'
          break
      }
      return dataAxios
    }
  },
  error => {

    return Promise.reject(error)
  }
)

export default service
