<template>
  <view class="container">
    <view class="logo-section">
      <image class="logo" src="/static/images/logo.png" mode="aspectFit" />
      <text class="title">AI破局俱乐部</text>
    </view>

    <view class="login-section">
      <view class="welcome">
        <text class="greeting">欢迎加入</text>
        <text class="subtitle">登录后体验更多功能</text>
      </view>

      <view class="login-methods">
        <button
          class="login-btn wechat"
          open-type="getUserInfo"
          @getuserinfo="handleWechatLogin"
        >
          <text class="iconfont icon-wechat"></text>
          <text>微信一键登录</text>
        </button>

        <button
          class="login-btn phone"
          open-type="getPhoneNumber"
          @getphonenumber="handlePhoneLogin"
        >
          <text class="iconfont icon-phone"></text>
          <text>手机号一键登录</text>
        </button>
      </view>

      <view class="agreement">
        <checkbox-group @change="handleAgreementChange">
          <checkbox value="agreed" :checked="isAgreed" />
          <text class="agreement-text">
            登录即代表同意
            <text class="link" @tap="navigateTo('/pages/agreement/user')"
              >《用户协议》</text
            >
            和
            <text class="link" @tap="navigateTo('/pages/agreement/privacy')"
              >《隐私政策》</text
            >
          </text>
        </checkbox-group>
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref } from "vue";
import { useUserStore } from "@/stores/user";

const userStore = useUserStore();

// 是否同意协议
const isAgreed = ref(false);

// 处理微信登录
const handleWechatLogin = async (e) => {
  if (!isAgreed.value) {
    uni.showToast({
      title: "请先同意用户协议和隐私政策",
      icon: "none",
    });
    return;
  }

  if (e.detail.errMsg !== "getUserInfo:ok") {
    uni.showToast({
      title: "登录失败",
      icon: "none",
    });
    return;
  }

  try {
    // 获取用户信息
    const userInfo = e.detail.userInfo;
    // 获取登录code
    const { code } = await uni.login();
    // 调用后端登录接口
    const response = await userStore.login({
      code,
      userInfo,
    });

    if (response) {
      uni.showToast({
        title: "登录成功",
        icon: "success",
      });
      // 返回上一页
      setTimeout(() => {
        uni.navigateBack();
      }, 1500);
    }
  } catch (error) {
    console.error("登录失败:", error);
    uni.showToast({
      title: "登录失败",
      icon: "none",
    });
  }
};

// 处理手机号登录
const handlePhoneLogin = async (e) => {
  if (!isAgreed.value) {
    uni.showToast({
      title: "请先同意用户协议和隐私政策",
      icon: "none",
    });
    return;
  }

  if (e.detail.errMsg !== "getPhoneNumber:ok") {
    uni.showToast({
      title: "获取手机号失败",
      icon: "none",
    });
    return;
  }

  try {
    // 获取登录code
    const { code } = await uni.login();
    // 调用后端登录接口
    const response = await userStore.login({
      code,
      phoneCode: e.detail.code,
    });

    if (response) {
      uni.showToast({
        title: "登录成功",
        icon: "success",
      });
      // 返回上一页
      setTimeout(() => {
        uni.navigateBack();
      }, 1500);
    }
  } catch (error) {
    console.error("登录失败:", error);
    uni.showToast({
      title: "登录失败",
      icon: "none",
    });
  }
};

// 处理协议勾选
const handleAgreementChange = (e) => {
  isAgreed.value = e.detail.value.length > 0;
};

// 页面跳转
const navigateTo = (url) => {
  uni.navigateTo({ url });
};
</script>

<style lang="scss">
.container {
  min-height: 100vh;
  background-color: #fff;
  padding: 60rpx 40rpx;
}

.logo-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 80rpx;

  .logo {
    width: 160rpx;
    height: 160rpx;
    margin-bottom: 20rpx;
  }

  .title {
    font-size: 40rpx;
    font-weight: bold;
    color: #333;
  }
}

.login-section {
  .welcome {
    margin-bottom: 60rpx;

    .greeting {
      font-size: 48rpx;
      font-weight: bold;
      color: #333;
      margin-bottom: 16rpx;
      display: block;
    }

    .subtitle {
      font-size: 28rpx;
      color: #999;
    }
  }

  .login-methods {
    margin-bottom: 40rpx;

    .login-btn {
      width: 100%;
      height: 88rpx;
      line-height: 88rpx;
      border-radius: 44rpx;
      font-size: 32rpx;
      margin-bottom: 30rpx;
      display: flex;
      align-items: center;
      justify-content: center;

      .iconfont {
        font-size: 40rpx;
        margin-right: 10rpx;
      }

      &.wechat {
        background-color: #07c160;
        color: #fff;
      }

      &.phone {
        background-color: #018eff;
        color: #fff;
      }
    }
  }

  .agreement {
    display: flex;
    justify-content: center;
    align-items: center;

    checkbox-group {
      display: flex;
      align-items: center;
    }

    checkbox {
      transform: scale(0.8);
    }

    .agreement-text {
      font-size: 24rpx;
      color: #666;

      .link {
        color: #018eff;
      }
    }
  }
}
</style>
