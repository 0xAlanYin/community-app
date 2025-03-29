package com.aipoju.service;

import com.aipoju.entity.User;

public interface UserService {
    User getUserByOpenid(String openid);
    User createUser(User user);
    User updateUser(User user);
} 