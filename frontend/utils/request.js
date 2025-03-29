import { useUserStore } from '@/stores/user'

// 请求拦截器
const requestInterceptor = (config) => {
  const userStore = useUserStore()
  if (userStore.token) {
    config.header['Authorization'] = `Bearer ${userStore.token}`
  }
  return config
}

// 响应拦截器
const responseInterceptor = (response) => {
  const { data } = response
  if (data.success) {
    return data.data
  }
  uni.showToast({
    title: data.message || '请求失败',
    icon: 'none'
  })
  return Promise.reject(new Error(data.message || '请求失败'))
}

// 创建请求实例
const request = {
  baseURL: '',
  header: {
    'Content-Type': 'application/json'
  },
  
  // GET请求
  get(url, options = {}) {
    return this.request({
      url,
      method: 'GET',
      ...options
    })
  },
  
  // POST请求
  post(url, data, options = {}) {
    return this.request({
      url,
      method: 'POST',
      data,
      ...options
    })
  },
  
  // PUT请求
  put(url, data, options = {}) {
    return this.request({
      url,
      method: 'PUT',
      data,
      ...options
    })
  },
  
  // DELETE请求
  delete(url, options = {}) {
    return this.request({
      url,
      method: 'DELETE',
      ...options
    })
  },
  
  // 统一请求方法
  request(options) {
    const config = requestInterceptor(options)
    return new Promise((resolve, reject) => {
      uni.request({
        ...config,
        success: (res) => {
          resolve(responseInterceptor(res))
        },
        fail: (err) => {
          uni.showToast({
            title: '网络错误',
            icon: 'none'
          })
          reject(err)
        }
      })
    })
  }
}

export default request 