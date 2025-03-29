package com.aipoju.service.impl;

import com.aipoju.entity.Activity;
import com.aipoju.repository.ActivityRepository;
import com.aipoju.service.ActivityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ActivityServiceImpl implements ActivityService {
    
    @Autowired
    private ActivityRepository activityRepository;

    @Override
    public List<Activity> getUpcomingActivities() {
        return activityRepository.findByStatus("upcoming");
    }

    @Override
    public Activity getActivityById(Long id) {
        return activityRepository.findById(id)
                .orElse(null);
    }

    @Override
    public Activity createActivity(Activity activity) {
        return activityRepository.save(activity);
    }

    @Override
    public Activity updateActivity(Activity activity) {
        return activityRepository.save(activity);
    }

    @Override
    public void deleteActivity(Long id) {
        activityRepository.deleteById(id);
    }
} 