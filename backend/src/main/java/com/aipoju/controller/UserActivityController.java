package com.aipoju.controller;

import com.aipoju.common.ApiResponse;
import com.aipoju.entity.UserActivity;
import com.aipoju.service.UserActivityService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Tag(name = "用户活动管理", description = "用户活动相关接口")
@RestController
@RequestMapping("/api/user-activities")
public class UserActivityController {
    
    @Autowired
    private UserActivityService userActivityService;

    @Operation(summary = "用户报名活动")
    @PostMapping("/register")
    public ApiResponse<UserActivity> registerUserActivity(@RequestParam Long userId, @RequestParam Long activityId) {
        return ApiResponse.success(userActivityService.registerUserActivity(userId, activityId));
    }

    @Operation(summary = "获取用户活动详情")
    @GetMapping("/{userId}/{activityId}")
    public ApiResponse<UserActivity> getUserActivity(@PathVariable Long userId, @PathVariable Long activityId) {
        return ApiResponse.success(userActivityService.getUserActivity(userId, activityId));
    }

    @Operation(summary = "获取用户的所有活动")
    @GetMapping("/user/{userId}")
    public ApiResponse<List<UserActivity>> getUserActivities(@PathVariable Long userId) {
        return ApiResponse.success(userActivityService.getUserActivities(userId));
    }

    @Operation(summary = "检查用户是否已报名活动")
    @GetMapping("/check")
    public ApiResponse<Boolean> isUserRegistered(@RequestParam Long userId, @RequestParam Long activityId) {
        return ApiResponse.success(userActivityService.isUserRegistered(userId, activityId));
    }
} 