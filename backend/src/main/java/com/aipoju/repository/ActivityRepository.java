package com.aipoju.repository;

import com.aipoju.entity.Activity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface ActivityRepository extends JpaRepository<Activity, Long> {
    List<Activity> findByStatus(String status);
    List<Activity> findByStartTimeAfterOrderByStartTimeAsc(LocalDateTime startTime);
} 