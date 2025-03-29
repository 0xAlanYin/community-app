<template>
  <view class="container">
    <!-- 顶部轮播图 -->
    <swiper
      class="banner"
      circular
      :indicator-dots="true"
      :autoplay="true"
      :interval="3000"
      :duration="1000"
    >
      <swiper-item v-for="(item, index) in banners" :key="index">
        <image :src="item.image" mode="aspectFill" class="banner-image" />
      </swiper-item>
    </swiper>

    <!-- 功能导航 -->
    <view class="nav-section">
      <view
        class="nav-item"
        v-for="(item, index) in navItems"
        :key="index"
        @tap="navigateTo(item.path)"
      >
        <image :src="item.icon" mode="aspectFit" class="nav-icon" />
        <text class="nav-text">{{ item.text }}</text>
      </view>
    </view>

    <!-- 即将开始的活动 -->
    <view class="section">
      <view class="section-header">
        <text class="section-title">即将开始</text>
        <text class="more" @tap="navigateTo('/pages/activity/list')">更多</text>
      </view>
      <view class="activity-list">
        <view
          class="activity-item"
          v-for="activity in upcomingActivities"
          :key="activity.id"
          @tap="navigateToActivity(activity.id)"
        >
          <image
            :src="activity.coverImage"
            mode="aspectFill"
            class="activity-image"
          />
          <view class="activity-info">
            <text class="activity-title">{{ activity.title }}</text>
            <view class="activity-meta">
              <text class="activity-time">{{
                formatTime(activity.startTime)
              }}</text>
              <text class="activity-location">{{ activity.location }}</text>
            </view>
            <view class="activity-status">
              <text class="status-text">{{
                activity.status === "upcoming" ? "即将开始" : "进行中"
              }}</text>
              <text class="participants"
                >{{ activity.currentParticipants }}/{{
                  activity.maxParticipants
                }}</text
              >
            </view>
          </view>
        </view>
      </view>
    </view>

    <!-- 社区动态 -->
    <view class="section">
      <view class="section-header">
        <text class="section-title">社区动态</text>
        <text class="more" @tap="navigateTo('/pages/community/index')"
          >更多</text
        >
      </view>
      <view class="community-list">
        <view
          class="community-item"
          v-for="(item, index) in communityPosts"
          :key="index"
        >
          <view class="post-header">
            <image :src="item.avatar" mode="aspectFill" class="avatar" />
            <view class="post-info">
              <text class="username">{{ item.username }}</text>
              <text class="time">{{ item.time }}</text>
            </view>
          </view>
          <text class="post-content">{{ item.content }}</text>
          <view class="post-images" v-if="item.images && item.images.length">
            <image
              v-for="(image, imgIndex) in item.images"
              :key="imgIndex"
              :src="image"
              mode="aspectFill"
              class="post-image"
            />
          </view>
          <view class="post-footer">
            <view class="action-item">
              <text class="iconfont icon-like"></text>
              <text>{{ item.likes }}</text>
            </view>
            <view class="action-item">
              <text class="iconfont icon-comment"></text>
              <text>{{ item.comments }}</text>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useActivityStore } from "@/stores/activity";
import dayjs from "dayjs";

const activityStore = useActivityStore();

// 轮播图数据
const banners = ref([
  { image: "/static/images/banner/1.jpg" },
  { image: "/static/images/banner/2.jpg" },
  { image: "/static/images/banner/3.jpg" },
]);

// 导航菜单
const navItems = ref([
  {
    icon: "/static/images/nav/activity.png",
    text: "活动",
    path: "/pages/activity/list",
  },
  {
    icon: "/static/images/nav/community.png",
    text: "社区",
    path: "/pages/community/index",
  },
  {
    icon: "/static/images/nav/course.png",
    text: "课程",
    path: "/pages/course/index",
  },
  {
    icon: "/static/images/nav/profile.png",
    text: "我的",
    path: "/pages/profile/index",
  },
]);

// 即将开始的活动
const upcomingActivities = ref([]);

// 社区动态
const communityPosts = ref([
  {
    avatar: "/static/images/avatar/1.jpg",
    username: "AI创业者",
    time: "10分钟前",
    content: "参加了AI创业实战营，收获很多！",
    images: ["/static/images/post/1.jpg"],
    likes: 12,
    comments: 3,
  },
  {
    avatar: "/static/images/avatar/2.jpg",
    username: "技术专家",
    time: "30分钟前",
    content: "分享一个AI技术实践案例...",
    images: ["/static/images/post/2.jpg", "/static/images/post/3.jpg"],
    likes: 8,
    comments: 5,
  },
]);

// 格式化时间
const formatTime = (time) => {
  return dayjs(time).format("MM-DD HH:mm");
};

// 页面跳转
const navigateTo = (path) => {
  uni.navigateTo({ url: path });
};

// 跳转到活动详情
const navigateToActivity = (id) => {
  uni.navigateTo({ url: `/pages/activity/detail?id=${id}` });
};

// 获取即将开始的活动
const getUpcomingActivities = async () => {
  const activities = await activityStore.getUpcomingActivities();
  upcomingActivities.value = activities;
};

onMounted(() => {
  getUpcomingActivities();
});
</script>

<style lang="scss">
.container {
  min-height: 100vh;
  background-color: #f5f5f5;
}

.banner {
  height: 350rpx;

  .banner-image {
    width: 100%;
    height: 100%;
  }
}

.nav-section {
  display: flex;
  justify-content: space-around;
  padding: 30rpx;
  background-color: #fff;
  margin-bottom: 20rpx;

  .nav-item {
    display: flex;
    flex-direction: column;
    align-items: center;

    .nav-icon {
      width: 80rpx;
      height: 80rpx;
      margin-bottom: 10rpx;
    }

    .nav-text {
      font-size: 24rpx;
      color: #333;
    }
  }
}

.section {
  background-color: #fff;
  margin-bottom: 20rpx;
  padding: 20rpx;

  .section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20rpx;

    .section-title {
      font-size: 32rpx;
      font-weight: bold;
      color: #333;
    }

    .more {
      font-size: 24rpx;
      color: #999;
    }
  }
}

.activity-list {
  .activity-item {
    display: flex;
    padding: 20rpx 0;
    border-bottom: 1rpx solid #eee;

    &:last-child {
      border-bottom: none;
    }

    .activity-image {
      width: 200rpx;
      height: 150rpx;
      border-radius: 8rpx;
      margin-right: 20rpx;
    }

    .activity-info {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .activity-title {
        font-size: 28rpx;
        color: #333;
        margin-bottom: 10rpx;
      }

      .activity-meta {
        font-size: 24rpx;
        color: #666;

        .activity-time {
          margin-right: 20rpx;
        }
      }

      .activity-status {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .status-text {
          font-size: 24rpx;
          color: #018eff;
        }

        .participants {
          font-size: 24rpx;
          color: #999;
        }
      }
    }
  }
}

.community-list {
  .community-item {
    padding: 20rpx 0;
    border-bottom: 1rpx solid #eee;

    &:last-child {
      border-bottom: none;
    }

    .post-header {
      display: flex;
      align-items: center;
      margin-bottom: 20rpx;

      .avatar {
        width: 80rpx;
        height: 80rpx;
        border-radius: 50%;
        margin-right: 20rpx;
      }

      .post-info {
        .username {
          font-size: 28rpx;
          color: #333;
          margin-bottom: 4rpx;
        }

        .time {
          font-size: 24rpx;
          color: #999;
        }
      }
    }

    .post-content {
      font-size: 28rpx;
      color: #333;
      margin-bottom: 20rpx;
    }

    .post-images {
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 20rpx;

      .post-image {
        width: 220rpx;
        height: 220rpx;
        margin-right: 10rpx;
        margin-bottom: 10rpx;
        border-radius: 8rpx;
      }
    }

    .post-footer {
      display: flex;

      .action-item {
        display: flex;
        align-items: center;
        margin-right: 30rpx;

        .iconfont {
          font-size: 32rpx;
          color: #999;
          margin-right: 8rpx;
        }

        text {
          font-size: 24rpx;
          color: #999;
        }
      }
    }
  }
}
</style>
