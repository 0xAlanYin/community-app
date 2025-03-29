package com.aipoju.repository;

import com.aipoju.entity.UserActivity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserActivityRepository extends JpaRepository<UserActivity, Long> {
    Optional<UserActivity> findByUserIdAndActivityId(Long userId, Long activityId);
    List<UserActivity> findByUserId(Long userId);
    boolean existsByUserIdAndActivityId(Long userId, Long activityId);
} 