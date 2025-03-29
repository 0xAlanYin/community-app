package com.aipoju.controller;

import com.aipoju.common.ApiResponse;
import com.aipoju.entity.Activity;
import com.aipoju.service.ActivityService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Tag(name = "活动管理", description = "活动相关接口")
@RestController
@RequestMapping("/api/activities")
public class ActivityController {
    
    @Autowired
    private ActivityService activityService;

    @Operation(summary = "获取即将开始的活动列表")
    @GetMapping("/upcoming")
    public ApiResponse<List<Activity>> getUpcomingActivities() {
        return ApiResponse.success(activityService.getUpcomingActivities());
    }

    @Operation(summary = "获取活动详情")
    @GetMapping("/{id}")
    public ApiResponse<Activity> getActivityById(@PathVariable Long id) {
        return ApiResponse.success(activityService.getActivityById(id));
    }

    @Operation(summary = "创建活动")
    @PostMapping
    public ApiResponse<Activity> createActivity(@RequestBody Activity activity) {
        return ApiResponse.success(activityService.createActivity(activity));
    }

    @Operation(summary = "更新活动信息")
    @PutMapping("/{id}")
    public ApiResponse<Activity> updateActivity(@PathVariable Long id, @RequestBody Activity activity) {
        activity.setId(id);
        return ApiResponse.success(activityService.updateActivity(activity));
    }

    @Operation(summary = "删除活动")
    @DeleteMapping("/{id}")
    public ApiResponse<Void> deleteActivity(@PathVariable Long id) {
        activityService.deleteActivity(id);
        return ApiResponse.success();
    }
} 