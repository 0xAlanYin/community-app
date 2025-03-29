package com.aipoju.controller;

import com.aipoju.common.ApiResponse;
import com.aipoju.entity.User;
import com.aipoju.service.UserService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@Tag(name = "用户管理", description = "用户相关接口")
@RestController
@RequestMapping("/api/users")
public class UserController {
    
    @Autowired
    private UserService userService;

    @Operation(summary = "获取用户信息")
    @GetMapping("/{openid}")
    public ApiResponse<User> getUserByOpenid(@PathVariable String openid) {
        return ApiResponse.success(userService.getUserByOpenid(openid));
    }

    @Operation(summary = "创建用户")
    @PostMapping
    public ApiResponse<User> createUser(@RequestBody User user) {
        return ApiResponse.success(userService.createUser(user));
    }

    @Operation(summary = "更新用户信息")
    @PutMapping("/{id}")
    public ApiResponse<User> updateUser(@PathVariable Long id, @RequestBody User user) {
        user.setId(id);
        return ApiResponse.success(userService.updateUser(user));
    }
} 