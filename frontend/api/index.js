import request from '@/utils/request'

const BASE_URL = 'http://localhost:8080/api'

// 用户相关接口
export const userApi = {
  // 获取用户信息
  getUserByOpenid(openid) {
    return request.get(`${BASE_URL}/users/${openid}`)
  },
  
  // 创建用户
  createUser(data) {
    return request.post(`${BASE_URL}/users`, data)
  },
  
  // 更新用户信息
  updateUser(id, data) {
    return request.put(`${BASE_URL}/users/${id}`, data)
  }
}

// 活动相关接口
export const activityApi = {
  // 获取即将开始的活动列表
  getUpcomingActivities() {
    return request.get(`${BASE_URL}/activities/upcoming`)
  },
  
  // 获取活动详情
  getActivityById(id) {
    return request.get(`${BASE_URL}/activities/${id}`)
  },
  
  // 创建活动
  createActivity(data) {
    return request.post(`${BASE_URL}/activities`, data)
  },
  
  // 更新活动信息
  updateActivity(id, data) {
    return request.put(`${BASE_URL}/activities/${id}`, data)
  },
  
  // 删除活动
  deleteActivity(id) {
    return request.delete(`${BASE_URL}/activities/${id}`)
  }
}

// 用户活动相关接口
export const userActivityApi = {
  // 用户报名活动
  registerUserActivity(userId, activityId) {
    return request.post(`${BASE_URL}/user-activities/register`, {
      userId,
      activityId
    })
  },
  
  // 获取用户活动详情
  getUserActivity(userId, activityId) {
    return request.get(`${BASE_URL}/user-activities/${userId}/${activityId}`)
  },
  
  // 获取用户的所有活动
  getUserActivities(userId) {
    return request.get(`${BASE_URL}/user-activities/user/${userId}`)
  },
  
  // 检查用户是否已报名活动
  isUserRegistered(userId, activityId) {
    return request.get(`${BASE_URL}/user-activities/check`, {
      params: {
        userId,
        activityId
      }
    })
  }
} 