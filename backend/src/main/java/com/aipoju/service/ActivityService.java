package com.aipoju.service;

import java.util.List;

import com.aipoju.entity.Activity;

public interface ActivityService {
    List<Activity> getUpcomingActivities();
    Activity getActivityById(Long id);
    Activity createActivity(Activity activity);
    Activity updateActivity(Activity activity);
    void deleteActivity(Long id);
} 