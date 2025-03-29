package com.aipoju.service;

import java.util.List;

import com.aipoju.entity.UserActivity;

public interface UserActivityService {
    UserActivity registerUserActivity(Long userId, Long activityId);
    UserActivity getUserActivity(Long userId, Long activityId);
    List<UserActivity> getUserActivities(Long userId);
    boolean isUserRegistered(Long userId, Long activityId);
} 