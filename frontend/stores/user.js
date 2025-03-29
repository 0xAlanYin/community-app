import { defineStore } from 'pinia'
import { getUserInfo, updateUserInfo, login } from '@/api/user'

export const useUserStore = defineStore('user', {
  state: () => ({
    userInfo: null,
    token: null,
    openid: null
  }),
  
  getters: {
    isLoggedIn: (state) => !!state.token,
    userId: (state) => state.userInfo?.id
  },
  
  actions: {
    // 设置用户信息
    setUserInfo(info) {
      this.userInfo = info
    },
    
    // 设置token
    setToken(token) {
      this.token = token
      uni.setStorageSync('token', token)
    },
    
    // 设置openid
    setOpenid(openid) {
      this.openid = openid
      uni.setStorageSync('openid', openid)
    },
    
    // 登录
    async login(data) {
      try {
        const response = await login(data)
        this.setToken(response.data.token)
        this.setOpenid(response.data.openid)
        this.setUserInfo(response.data.userInfo)
        return response.data
      } catch (error) {
        console.error('登录失败:', error)
        throw error
      }
    },
    
    // 获取用户信息
    async fetchUserInfo() {
      try {
        const response = await getUserInfo()
        this.userInfo = response.data
        return this.userInfo
      } catch (error) {
        console.error('获取用户信息失败:', error)
        throw error
      }
    },
    
    // 更新用户信息
    async updateUserInfo(data) {
      try {
        const response = await updateUserInfo(data)
        this.userInfo = response.data
        return this.userInfo
      } catch (error) {
        console.error('更新用户信息失败:', error)
        throw error
      }
    },
    
    // 创建用户
    async createUser(data) {
      try {
        const res = await userApi.createUser(data)
        this.setUserInfo(res)
        return res
      } catch (error) {
        console.error('创建用户失败:', error)
        return null
      }
    },
    
    // 初始化用户状态
    async init() {
      const token = uni.getStorageSync('token')
      const openid = uni.getStorageSync('openid')
      
      if (token) {
        this.token = token
        await this.fetchUserInfo()
      }
      
      if (openid) {
        this.openid = openid
      }
    },
    
    // 退出登录
    logout() {
      this.userInfo = null
      this.token = null
      this.openid = null
      uni.removeStorageSync('token')
      uni.removeStorageSync('openid')
    }
  }
}) 