package com.aipoju.service.impl;

import com.aipoju.entity.User;
import com.aipoju.repository.UserRepository;
import com.aipoju.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {
    
    @Autowired
    private UserRepository userRepository;

    @Override
    public User getUserByOpenid(String openid) {
        return userRepository.findByOpenid(openid)
                .orElse(null);
    }

    @Override
    public User createUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public User updateUser(User user) {
        return userRepository.save(user);
    }
} 