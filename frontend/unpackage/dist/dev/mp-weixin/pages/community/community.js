"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "community",
  setup(__props) {
    const communities = common_vendor.ref([
      {
        cover: "/static/community/community1.jpg",
        name: "AI创业者交流群",
        description: "分享AI创业经验，对接资源",
        members: 1280,
        posts: 256
      },
      {
        cover: "/static/community/community2.jpg",
        name: "ChatGPT开发者社区",
        description: "交流ChatGPT开发技术",
        members: 856,
        posts: 128
      }
    ]);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(communities.value, (item, index, i0) => {
          return {
            a: item.cover,
            b: common_vendor.t(item.name),
            c: common_vendor.t(item.description),
            d: common_vendor.t(item.members),
            e: common_vendor.t(item.posts),
            f: index
          };
        })
      };
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/community/community.js.map
