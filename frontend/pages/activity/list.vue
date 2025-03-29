<template>
  <view class="container">
    <!-- 搜索栏 -->
    <view class="search-bar">
      <view class="search-input">
        <text class="iconfont icon-search"></text>
        <input
          type="text"
          v-model="searchKeyword"
          placeholder="搜索活动"
          @confirm="handleSearch"
        />
      </view>
    </view>

    <!-- 筛选栏 -->
    <view class="filter-bar">
      <view
        class="filter-item"
        :class="{ active: currentStatus === 'all' }"
        @tap="handleFilter('all')"
      >
        全部
      </view>
      <view
        class="filter-item"
        :class="{ active: currentStatus === 'upcoming' }"
        @tap="handleFilter('upcoming')"
      >
        即将开始
      </view>
      <view
        class="filter-item"
        :class="{ active: currentStatus === 'ongoing' }"
        @tap="handleFilter('ongoing')"
      >
        进行中
      </view>
      <view
        class="filter-item"
        :class="{ active: currentStatus === 'ended' }"
        @tap="handleFilter('ended')"
      >
        已结束
      </view>
    </view>

    <!-- 活动列表 -->
    <scroll-view
      scroll-y
      class="activity-list"
      @scrolltolower="loadMore"
      refresher-enabled
      :refresher-triggered="isRefreshing"
      @refresherrefresh="onRefresh"
    >
      <view
        class="activity-item"
        v-for="activity in activities"
        :key="activity.id"
        @tap="navigateToDetail(activity.id)"
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
              getStatusText(activity.status)
            }}</text>
            <text class="participants"
              >{{ activity.currentParticipants }}/{{
                activity.maxParticipants
              }}</text
            >
          </view>
        </view>
      </view>

      <!-- 加载更多 -->
      <view class="loading-more" v-if="hasMore">
        <text>加载中...</text>
      </view>
      <view class="no-more" v-else>
        <text>没有更多了</text>
      </view>
    </scroll-view>
  </view>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useActivityStore } from "@/stores/activity";
import dayjs from "dayjs";

const activityStore = useActivityStore();

// 搜索关键词
const searchKeyword = ref("");
// 当前筛选状态
const currentStatus = ref("all");
// 活动列表
const activities = ref([]);
// 分页参数
const page = ref(1);
const pageSize = ref(10);
const hasMore = ref(true);
// 下拉刷新状态
const isRefreshing = ref(false);

// 格式化时间
const formatTime = (time) => {
  return dayjs(time).format("MM-DD HH:mm");
};

// 获取状态文本
const getStatusText = (status) => {
  const statusMap = {
    upcoming: "即将开始",
    ongoing: "进行中",
    ended: "已结束",
  };
  return statusMap[status] || status;
};

// 处理搜索
const handleSearch = () => {
  page.value = 1;
  activities.value = [];
  loadActivities();
};

// 处理筛选
const handleFilter = (status) => {
  currentStatus.value = status;
  page.value = 1;
  activities.value = [];
  loadActivities();
};

// 加载活动列表
const loadActivities = async () => {
  try {
    const params = {
      page: page.value,
      pageSize: pageSize.value,
      status: currentStatus.value === "all" ? undefined : currentStatus.value,
      keyword: searchKeyword.value,
    };
    const { list, total } = await activityStore.getActivityList(params);

    if (page.value === 1) {
      activities.value = list;
    } else {
      activities.value = [...activities.value, ...list];
    }

    hasMore.value = activities.value.length < total;
  } catch (error) {
    console.error("加载活动列表失败:", error);
    uni.showToast({
      title: "加载失败",
      icon: "none",
    });
  }
};

// 加载更多
const loadMore = () => {
  if (hasMore.value) {
    page.value++;
    loadActivities();
  }
};

// 下拉刷新
const onRefresh = async () => {
  isRefreshing.value = true;
  page.value = 1;
  await loadActivities();
  isRefreshing.value = false;
  uni.stopPullDownRefresh();
};

// 跳转到活动详情
const navigateToDetail = (id) => {
  uni.navigateTo({
    url: `/pages/activity/detail?id=${id}`,
  });
};

onMounted(() => {
  loadActivities();
});
</script>

<style lang="scss">
.container {
  min-height: 100vh;
  background-color: #f5f5f5;
}

.search-bar {
  padding: 20rpx;
  background-color: #fff;

  .search-input {
    display: flex;
    align-items: center;
    height: 72rpx;
    background-color: #f5f5f5;
    border-radius: 36rpx;
    padding: 0 30rpx;

    .iconfont {
      font-size: 32rpx;
      color: #999;
      margin-right: 10rpx;
    }

    input {
      flex: 1;
      height: 100%;
      font-size: 28rpx;
    }
  }
}

.filter-bar {
  display: flex;
  padding: 20rpx;
  background-color: #fff;
  border-bottom: 1rpx solid #eee;

  .filter-item {
    flex: 1;
    text-align: center;
    font-size: 28rpx;
    color: #666;
    padding: 10rpx 0;
    position: relative;

    &.active {
      color: #018eff;
      font-weight: bold;

      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 40rpx;
        height: 4rpx;
        background-color: #018eff;
        border-radius: 2rpx;
      }
    }
  }
}

.activity-list {
  height: calc(100vh - 200rpx);

  .activity-item {
    display: flex;
    padding: 20rpx;
    background-color: #fff;
    margin-bottom: 20rpx;

    .activity-image {
      width: 240rpx;
      height: 180rpx;
      border-radius: 8rpx;
      margin-right: 20rpx;
    }

    .activity-info {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .activity-title {
        font-size: 32rpx;
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

.loading-more,
.no-more {
  text-align: center;
  padding: 20rpx;
  color: #999;
  font-size: 24rpx;
}
</style>
