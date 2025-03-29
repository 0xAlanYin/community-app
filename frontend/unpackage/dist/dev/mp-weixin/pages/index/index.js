"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const features = common_vendor.ref([
      {
        icon: "icon-graduation-cap",
        title: "AI课程",
        desc: "系统学习AI知识",
        bgColor: "#E3F2FD"
      },
      {
        icon: "icon-users",
        title: "AI社群",
        desc: "加入AI创业者圈子",
        bgColor: "#F3E5F5"
      },
      {
        icon: "icon-lightbulb",
        title: "AI项目",
        desc: "实战AI创业项目",
        bgColor: "#E8F5E9"
      },
      {
        icon: "icon-chart-line",
        title: "AI咨询",
        desc: "专业AI创业指导",
        bgColor: "#FFF3E0"
      }
    ]);
    const news = common_vendor.ref([
      {
        avatar: "/static/avatar/user1.jpg",
        username: "AI破局行动家",
        time: "2小时前",
        content: "🎉 欢迎加入AI破局俱乐部！这里有最前沿的AI技术分享，最实用的创业经验，让我们一起在AI时代创造价值！",
        likes: 128,
        comments: 32
      }
    ]);
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0,
        b: common_vendor.f(features.value, (item, index, i0) => {
          return {
            a: common_vendor.n(item.icon),
            b: item.bgColor,
            c: common_vendor.t(item.title),
            d: common_vendor.t(item.desc),
            e: index
          };
        }),
        c: common_vendor.f(news.value, (item, index, i0) => {
          return {
            a: item.avatar,
            b: common_vendor.t(item.username),
            c: common_vendor.t(item.time),
            d: common_vendor.t(item.content),
            e: common_vendor.t(item.likes),
            f: common_vendor.t(item.comments),
            g: index
          };
        })
      };
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map
