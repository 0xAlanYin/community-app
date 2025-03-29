import { createSSRApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { createI18n } from 'vue-i18n'

// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
  ...App
})
app.$mount()
// #endif

// #ifdef VUE3
export function createApp() {
  const app = createSSRApp(App)
  const pinia = createPinia()
  
  // 创建i18n实例
  const i18n = createI18n({
    locale: 'zh-CN',
    messages: {
      'zh-CN': {
        // 中文语言包
      }
    }
  })
  
  app.use(pinia)
  app.use(i18n)
  
  return {
    app
  }
}
// #endif