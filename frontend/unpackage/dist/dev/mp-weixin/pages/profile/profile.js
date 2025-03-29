"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "profile",
  setup(__props) {
    const userInfo = common_vendor.ref({
      avatar: "/static/avatar/user1.jpg",
      nickname: "AI创业者",
      bio: "正在探索AI创业之路"
    });
    const menuItems = common_vendor.ref([
      {
        icon: "icon-book",
        title: "我的课程"
      },
      {
        icon: "icon-users",
        title: "我的社群"
      },
      {
        icon: "icon-star",
        title: "我的收藏"
      },
      {
        icon: "icon-settings",
        title: "设置"
      }
    ]);
    return (_ctx, _cache) => {
      return {
        a: userInfo.value.avatar,
        b: common_vendor.t(userInfo.value.nickname),
        c: common_vendor.t(userInfo.value.bio),
        d: common_vendor.f(menuItems.value, (item, index, i0) => {
          return {
            a: common_vendor.n(item.icon),
            b: common_vendor.t(item.title),
            c: index
          };
        })
      };
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/profile/profile.js.map
