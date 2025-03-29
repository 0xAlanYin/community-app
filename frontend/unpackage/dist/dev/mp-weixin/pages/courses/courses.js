"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "courses",
  setup(__props) {
    const courses = common_vendor.ref([
      {
        cover: "/static/courses/course1.jpg",
        title: "AI创业实战课程",
        description: "从0到1，带你掌握AI创业全流程",
        price: 999,
        students: 1280
      },
      {
        cover: "/static/courses/course2.jpg",
        title: "ChatGPT应用开发",
        description: "快速掌握ChatGPT API开发技能",
        price: 699,
        students: 856
      }
    ]);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(courses.value, (item, index, i0) => {
          return {
            a: item.cover,
            b: common_vendor.t(item.title),
            c: common_vendor.t(item.description),
            d: common_vendor.t(item.price),
            e: common_vendor.t(item.students),
            f: index
          };
        })
      };
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/courses/courses.js.map
