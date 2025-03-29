import { defineStore } from 'pinia'
import { getActivityList, getActivityDetail, getUserActivities, registerActivity } from '@/api/activity'

export const useActivityStore = defineStore('activity', {
  state: () => ({
    upcomingActivities: [],
    currentActivity: null,
    userActivities: []
  }),
  
  getters: {
    // 获取活动详情
    getActivityById: (state) => (id) => {
      return state.upcomingActivities.find(activity => activity.id === id)
    },
    
    // 获取用户活动
    getUserActivityById: (state) => (id) => {
      return state.userActivities.find(userActivity => userActivity.id === id)
    }
  },
  
  actions: {
    // 获取即将开始的活动
    async getUpcomingActivities() {
      try {
        const response = await getActivityList({ status: 'upcoming' })
        this.upcomingActivities = response.data.list
        return this.upcomingActivities
      } catch (error) {
        console.error('获取即将开始的活动失败:', error)
        throw error
      }
    },
    
    // 获取活动列表
    async getActivityList(params) {
      try {
        const response = await getActivityList(params)
        return response.data
      } catch (error) {
        console.error('获取活动列表失败:', error)
        throw error
      }
    },
    
    // 获取活动详情
    async getActivityDetail(id) {
      try {
        const response = await getActivityDetail(id)
        this.currentActivity = response.data
        return this.currentActivity
      } catch (error) {
        console.error('获取活动详情失败:', error)
        throw error
      }
    },
    
    // 获取用户活动列表
    async getUserActivities(userId) {
      try {
        const response = await getUserActivities(userId)
        this.userActivities = response.data
        return this.userActivities
      } catch (error) {
        console.error('获取用户活动列表失败:', error)
        throw error
      }
    },
    
    // 注册活动
    async registerActivity(activityId) {
      try {
        const response = await registerActivity(activityId)
        return response.data
      } catch (error) {
        console.error('注册活动失败:', error)
        throw error
      }
    },
    
    // 检查是否已报名
    async checkRegistration(userId, activityId) {
      try {
        const res = await userActivityApi.isUserRegistered(userId, activityId)
        return res
      } catch (error) {
        console.error('检查报名状态失败:', error)
        return false
      }
    }
  }
}) 