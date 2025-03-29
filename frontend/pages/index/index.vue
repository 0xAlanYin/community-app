<template>
  <view class="container">
    <!-- 状态栏 -->
    <view class="status-bar">
      <view class="status-bar-left">
        <text class="time">9:41</text>
      </view>
      <view class="status-bar-right">
        <text class="iconfont icon-signal"></text>
        <text class="iconfont icon-wifi"></text>
        <text class="iconfont icon-battery"></text>
      </view>
    </view>

    <!-- 导航栏 -->
    <view class="nav-bar">
      <text class="title">AI破局俱乐部</text>
    </view>

    <!-- 主要内容区域 -->
    <scroll-view scroll-y class="content">
      <!-- 轮播图 -->
      <swiper
        class="banner"
        :indicator-dots="true"
        :autoplay="true"
        :interval="3000"
        :duration="1000"
      >
        <swiper-item>
          <image
            src="/static/banner/ai-banner.jpg"
            mode="aspectFill"
            class="banner-image"
          ></image>
          <view class="banner-content">
            <text class="banner-title">AI破局行动家</text>
            <text class="banner-subtitle">开启你的AI创业之旅</text>
          </view>
        </swiper-item>
      </swiper>

      <!-- 功能卡片 -->
      <view class="feature-grid">
        <view
          class="feature-item"
          v-for="(item, index) in features"
          :key="index"
        >
          <view class="feature-icon" :style="{ backgroundColor: item.bgColor }">
            <text class="iconfont" :class="item.icon"></text>
          </view>
          <text class="feature-title">{{ item.title }}</text>
          <text class="feature-desc">{{ item.desc }}</text>
        </view>
      </view>

      <!-- 最新动态 -->
      <view class="news-section">
        <text class="section-title">最新动态</text>
        <view class="news-list">
          <view class="news-item" v-for="(item, index) in news" :key="index">
            <view class="news-header">
              <image
                :src="item.avatar"
                mode="aspectFill"
                class="avatar"
              ></image>
              <view class="user-info">
                <text class="username">{{ item.username }}</text>
                <text class="time">{{ item.time }}</text>
              </view>
            </view>
            <text class="news-content">{{ item.content }}</text>
            <view class="news-footer">
              <view class="action-btn">
                <text class="iconfont icon-heart"></text>
                <text class="count">{{ item.likes }}</text>
              </view>
              <view class="action-btn">
                <text class="iconfont icon-comment"></text>
                <text class="count">{{ item.comments }}</text>
              </view>
            </view>
          </view>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<script setup>
import { ref } from "vue";

const features = ref([
  {
    icon: "icon-graduation-cap",
    title: "AI课程",
    desc: "系统学习AI知识",
    bgColor: "#E3F2FD",
  },
  {
    icon: "icon-users",
    title: "AI社群",
    desc: "加入AI创业者圈子",
    bgColor: "#F3E5F5",
  },
  {
    icon: "icon-lightbulb",
    title: "AI项目",
    desc: "实战AI创业项目",
    bgColor: "#E8F5E9",
  },
  {
    icon: "icon-chart-line",
    title: "AI咨询",
    desc: "专业AI创业指导",
    bgColor: "#FFF3E0",
  },
]);

const news = ref([
  {
    avatar: "/static/avatar/user1.jpg",
    username: "AI破局行动家",
    time: "2小时前",
    content:
      "🎉 欢迎加入AI破局俱乐部！这里有最前沿的AI技术分享，最实用的创业经验，让我们一起在AI时代创造价值！",
    likes: 128,
    comments: 32,
  },
]);
</script>

<style lang="scss">
.container {
  min-height: 100vh;
  background-color: #f8f8f8;
}

.status-bar {
  height: 44px;
  background-color: #000;
  color: #fff;
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
}

.nav-bar {
  height: 52px;
  background-color: #fff;
  border-bottom: 1px solid #eee;
  display: flex;
  align-items: center;
  padding: 0 16px;

  .title {
    font-size: 20px;
    font-weight: 600;
    color: #333;
  }
}

.content {
  height: calc(100vh - 44px - 52px - 83px);
}

.banner {
  height: 200px;
  position: relative;

  .banner-image {
    width: 100%;
    height: 100%;
  }

  .banner-content {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 16px;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent);

    .banner-title {
      color: #fff;
      font-size: 20px;
      font-weight: bold;
    }

    .banner-subtitle {
      color: rgba(255, 255, 255, 0.8);
      font-size: 14px;
      margin-top: 4px;
    }
  }
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  padding: 16px;

  .feature-item {
    background-color: #fff;
    border-radius: 16px;
    padding: 16px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);

    .feature-icon {
      width: 48px;
      height: 48px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 12px;

      .iconfont {
        font-size: 24px;
        color: #007aff;
      }
    }

    .feature-title {
      font-size: 16px;
      font-weight: 600;
      color: #333;
    }

    .feature-desc {
      font-size: 14px;
      color: #666;
      margin-top: 4px;
    }
  }
}

.news-section {
  padding: 16px;

  .section-title {
    font-size: 18px;
    font-weight: 600;
    color: #333;
    margin-bottom: 16px;
  }

  .news-list {
    .news-item {
      background-color: #fff;
      border-radius: 12px;
      padding: 16px;
      margin-bottom: 16px;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);

      .news-header {
        display: flex;
        align-items: center;
        margin-bottom: 12px;

        .avatar {
          width: 40px;
          height: 40px;
          border-radius: 20px;
          margin-right: 12px;
        }

        .user-info {
          .username {
            font-size: 16px;
            font-weight: 500;
            color: #333;
          }

          .time {
            font-size: 12px;
            color: #999;
            margin-top: 2px;
          }
        }
      }

      .news-content {
        font-size: 14px;
        color: #666;
        line-height: 1.5;
      }

      .news-footer {
        display: flex;
        margin-top: 12px;
        color: #999;

        .action-btn {
          display: flex;
          align-items: center;
          margin-right: 16px;

          .iconfont {
            font-size: 16px;
            margin-right: 4px;
          }

          .count {
            font-size: 12px;
          }
        }
      }
    }
  }
}
</style>
