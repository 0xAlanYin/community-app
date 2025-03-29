package com.aipoju.service.impl;

import com.aipoju.entity.Activity;
import com.aipoju.entity.User;
import com.aipoju.entity.UserActivity;
import com.aipoju.exception.BusinessException;
import com.aipoju.repository.ActivityRepository;
import com.aipoju.repository.UserActivityRepository;
import com.aipoju.repository.UserRepository;
import com.aipoju.service.UserActivityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class UserActivityServiceImpl implements UserActivityService {
    
    @Autowired
    private UserActivityRepository userActivityRepository;
    
    @Autowired
    private UserRepository userRepository;
    
    @Autowired
    private ActivityRepository activityRepository;

    @Override
    @Transactional
    public UserActivity registerUserActivity(Long userId, Long activityId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new BusinessException("USER_NOT_FOUND", "用户不存在"));
        
        Activity activity = activityRepository.findById(activityId)
                .orElseThrow(() -> new BusinessException("ACTIVITY_NOT_FOUND", "活动不存在"));
        
        if (activity.getCurrentParticipants() >= activity.getMaxParticipants()) {
            throw new BusinessException("ACTIVITY_FULL", "活动已满");
        }
        
        if (userActivityRepository.existsByUserIdAndActivityId(userId, activityId)) {
            throw new BusinessException("ALREADY_REGISTERED", "已经报名过该活动");
        }
        
        UserActivity userActivity = new UserActivity();
        userActivity.setUserId(userId);
        userActivity.setActivityId(activityId);
        userActivity.setStatus("registered");
        
        activity.setCurrentParticipants(activity.getCurrentParticipants() + 1);
        activityRepository.save(activity);
        
        return userActivityRepository.save(userActivity);
    }

    @Override
    public UserActivity getUserActivity(Long userId, Long activityId) {
        return userActivityRepository.findByUserIdAndActivityId(userId, activityId)
                .orElseThrow(() -> new BusinessException("NOT_REGISTERED", "用户未报名该活动"));
    }

    @Override
    public List<UserActivity> getUserActivities(Long userId) {
        return userActivityRepository.findByUserId(userId);
    }

    @Override
    public boolean isUserRegistered(Long userId, Long activityId) {
        return userActivityRepository.existsByUserIdAndActivityId(userId, activityId);
    }
} 