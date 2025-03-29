import request from '@/utils/request'

// 登录
export function login(data) {
  return request({
    url: '/api/auth/login',
    method: 'post',
    data
  })
}

// 获取用户信息
export function getUserInfo() {
  return request({
    url: '/api/users/me',
    method: 'get'
  })
}

// 更新用户信息
export function updateUserInfo(data) {
  return request({
    url: '/api/users/me',
    method: 'put',
    data
  })
}

// 获取用户统计数据
export function getUserStats() {
  return request({
    url: '/api/users/me/stats',
    method: 'get'
  })
}

// 获取用户活动列表
export function getUserActivities(params) {
  return request({
    url: '/api/users/me/activities',
    method: 'get',
    params
  })
}

// 获取用户收藏列表
export function getUserCollections(params) {
  return request({
    url: '/api/users/me/collections',
    method: 'get',
    params
  })
}

// 获取用户动态列表
export function getUserPosts(params) {
  return request({
    url: '/api/users/me/posts',
    method: 'get',
    params
  })
} 