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
      <text class="title">AI社群</text>
    </view>

    <!-- 主要内容区域 -->
    <scroll-view scroll-y class="content">
      <!-- 社群列表 -->
      <view class="community-list">
        <view
          class="community-item"
          v-for="(item, index) in communities"
          :key="index"
        >
          <image
            :src="item.cover"
            mode="aspectFill"
            class="community-cover"
          ></image>
          <view class="community-info">
            <text class="community-name">{{ item.name }}</text>
            <text class="community-desc">{{ item.description }}</text>
            <view class="community-meta">
              <text class="members">{{ item.members }}位成员</text>
              <text class="posts">{{ item.posts }}篇帖子</text>
            </view>
          </view>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<script setup>
import { ref } from "vue";

const communities = ref([
  {
    cover: "/static/community/community1.jpg",
    name: "AI创业者交流群",
    description: "分享AI创业经验，对接资源",
    members: 1280,
    posts: 256,
  },
  {
    cover: "/static/community/community2.jpg",
    name: "ChatGPT开发者社区",
    description: "交流ChatGPT开发技术",
    members: 856,
    posts: 128,
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

.community-list {
  padding: 16px;

  .community-item {
    background-color: #fff;
    border-radius: 12px;
    margin-bottom: 16px;
    overflow: hidden;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);

    .community-cover {
      width: 100%;
      height: 160px;
    }

    .community-info {
      padding: 16px;

      .community-name {
        font-size: 18px;
        font-weight: 600;
        color: #333;
      }

      .community-desc {
        font-size: 14px;
        color: #666;
        margin-top: 8px;
        line-height: 1.5;
      }

      .community-meta {
        display: flex;
        gap: 16px;
        margin-top: 12px;

        .members,
        .posts {
          font-size: 12px;
          color: #999;
        }
      }
    }
  }
}
</style>
