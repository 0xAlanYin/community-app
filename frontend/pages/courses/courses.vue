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
      <text class="title">AI课程</text>
    </view>

    <!-- 主要内容区域 -->
    <scroll-view scroll-y class="content">
      <!-- 课程列表 -->
      <view class="course-list">
        <view class="course-item" v-for="(item, index) in courses" :key="index">
          <image
            :src="item.cover"
            mode="aspectFill"
            class="course-cover"
          ></image>
          <view class="course-info">
            <text class="course-title">{{ item.title }}</text>
            <text class="course-desc">{{ item.description }}</text>
            <view class="course-meta">
              <text class="price">¥{{ item.price }}</text>
              <text class="students">{{ item.students }}人学习</text>
            </view>
          </view>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<script setup>
import { ref } from "vue";

const courses = ref([
  {
    cover: "/static/courses/course1.jpg",
    title: "AI创业实战课程",
    description: "从0到1，带你掌握AI创业全流程",
    price: 999,
    students: 1280,
  },
  {
    cover: "/static/courses/course2.jpg",
    title: "ChatGPT应用开发",
    description: "快速掌握ChatGPT API开发技能",
    price: 699,
    students: 856,
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

.course-list {
  padding: 16px;

  .course-item {
    background-color: #fff;
    border-radius: 12px;
    margin-bottom: 16px;
    overflow: hidden;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);

    .course-cover {
      width: 100%;
      height: 160px;
    }

    .course-info {
      padding: 16px;

      .course-title {
        font-size: 18px;
        font-weight: 600;
        color: #333;
      }

      .course-desc {
        font-size: 14px;
        color: #666;
        margin-top: 8px;
        line-height: 1.5;
      }

      .course-meta {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 12px;

        .price {
          font-size: 20px;
          font-weight: 600;
          color: #ff6b6b;
        }

        .students {
          font-size: 12px;
          color: #999;
        }
      }
    }
  }
}
</style>
