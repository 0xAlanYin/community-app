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
      <text class="title">个人中心</text>
    </view>

    <!-- 主要内容区域 -->
    <scroll-view scroll-y class="content">
      <!-- 用户信息 -->
      <view class="user-info">
        <image :src="userInfo.avatar" mode="aspectFill" class="avatar"></image>
        <view class="info">
          <text class="nickname">{{ userInfo.nickname }}</text>
          <text class="bio">{{ userInfo.bio }}</text>
        </view>
      </view>

      <!-- 功能菜单 -->
      <view class="menu-list">
        <view class="menu-group">
          <view
            class="menu-item"
            v-for="(item, index) in menuItems"
            :key="index"
          >
            <view class="menu-item-left">
              <text class="iconfont" :class="item.icon"></text>
              <text class="menu-title">{{ item.title }}</text>
            </view>
            <text class="iconfont icon-arrow-right"></text>
          </view>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<script setup>
import { ref } from "vue";

const userInfo = ref({
  avatar: "/static/avatar/user1.jpg",
  nickname: "AI创业者",
  bio: "正在探索AI创业之路",
});

const menuItems = ref([
  {
    icon: "icon-book",
    title: "我的课程",
  },
  {
    icon: "icon-users",
    title: "我的社群",
  },
  {
    icon: "icon-star",
    title: "我的收藏",
  },
  {
    icon: "icon-settings",
    title: "设置",
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

.user-info {
  background-color: #fff;
  padding: 24px;
  display: flex;
  align-items: center;
  margin-bottom: 16px;

  .avatar {
    width: 80px;
    height: 80px;
    border-radius: 40px;
    margin-right: 16px;
  }

  .info {
    .nickname {
      font-size: 20px;
      font-weight: 600;
      color: #333;
    }

    .bio {
      font-size: 14px;
      color: #666;
      margin-top: 4px;
    }
  }
}

.menu-list {
  padding: 0 16px;

  .menu-group {
    background-color: #fff;
    border-radius: 12px;
    overflow: hidden;

    .menu-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px;
      border-bottom: 1px solid #eee;

      &:last-child {
        border-bottom: none;
      }

      .menu-item-left {
        display: flex;
        align-items: center;

        .iconfont {
          font-size: 20px;
          color: #007aff;
          margin-right: 12px;
        }

        .menu-title {
          font-size: 16px;
          color: #333;
        }
      }

      .icon-arrow-right {
        font-size: 16px;
        color: #999;
      }
    }
  }
}
</style>
