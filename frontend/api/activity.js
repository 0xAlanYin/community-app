import request from '@/utils/request'

// 获取活动列表
export function getActivityList(params) {
  return request({
    url: '/api/activities',
    method: 'get',
    params
  })
}

// 获取活动详情
export function getActivityDetail(id) {
  return request({
    url: `/api/activities/${id}`,
    method: 'get'
  })
}

// 获取用户活动列表
export function getUserActivities(userId) {
  return request({
    url: `/api/users/${userId}/activities`,
    method: 'get'
  })
}

// 注册活动
export function registerActivity(activityId) {
  return request({
    url: `/api/activities/${activityId}/register`,
    method: 'post'
  })
} 