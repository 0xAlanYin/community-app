-- 初始化数据库
CREATE DATABASE aipoju;

-- 创建用户表
CREATE TABLE IF NOT EXISTS users (
    id BIGSERIAL PRIMARY KEY,
    openid VARCHAR(100) UNIQUE NOT NULL,
    nickname VARCHAR(50),
    avatar_url TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 创建活动表
CREATE TABLE IF NOT EXISTS activities (
    id BIGSERIAL PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    description TEXT,
    cover_image TEXT,
    start_time TIMESTAMP NOT NULL,
    end_time TIMESTAMP NOT NULL,
    location VARCHAR(200),
    max_participants INTEGER DEFAULT 100,
    current_participants INTEGER DEFAULT 0,
    status VARCHAR(20) DEFAULT 'upcoming',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 创建用户活动关联表
CREATE TABLE IF NOT EXISTS user_activities (
    id BIGSERIAL PRIMARY KEY,
    user_id BIGINT REFERENCES users(id),
    activity_id BIGINT REFERENCES activities(id),
    status VARCHAR(20) DEFAULT 'registered',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(user_id, activity_id)
);

-- 插入测试数据
INSERT INTO users (openid, nickname, avatar_url) VALUES
('test_openid_1', 'AI破局行动家', 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e'),
('test_openid_2', 'AI创业者', 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e'),
('test_openid_3', 'AI技术专家', 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e');

INSERT INTO activities (title, description, cover_image, start_time, end_time, location, max_participants) VALUES
('AI创业实战营', '从0到1打造AI创业项目，分享实战经验', 'https://images.unsplash.com/photo-1677442136019-21780ecad995', 
 CURRENT_TIMESTAMP + INTERVAL '7 days', 
 CURRENT_TIMESTAMP + INTERVAL '8 days',
 '线上直播', 100),
('AI技术分享会', '最新AI技术趋势与应用实践', 'https://images.unsplash.com/photo-1677442136019-21780ecad995',
 CURRENT_TIMESTAMP + INTERVAL '14 days',
 CURRENT_TIMESTAMP + INTERVAL '15 days',
 '线上直播', 200),
('AI项目路演', '优秀AI项目展示与投资对接', 'https://images.unsplash.com/photo-1677442136019-21780ecad995',
 CURRENT_TIMESTAMP + INTERVAL '21 days',
 CURRENT_TIMESTAMP + INTERVAL '22 days',
 '线上直播', 50);

-- 插入用户活动关联数据
INSERT INTO user_activities (user_id, activity_id, status) VALUES
(1, 1, 'registered'),
(1, 2, 'registered'),
(2, 1, 'registered'),
(3, 2, 'registered'); 