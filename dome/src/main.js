import Vue from 'vue'
import App from './layouts/App.vue'

Vue.config.productionTip = false

import './assets/css/base.css'; //scr
import './assets/js/font.js';  //字体比值控制

//van插件底部
import { Tabbar, TabbarItem } from 'vant';
Vue.use(Tabbar);
Vue.use(TabbarItem);
//van通知栏
import { NoticeBar } from 'vant';
Vue.use(NoticeBar);
//vant轮播
import { Swipe, SwipeItem } from 'vant';

Vue.use(Swipe);
Vue.use(SwipeItem);



// import axios from 'axios';
// Vue.prototype.$axios = axios;
import './plugins/axios'

//引入路由配置
import router from './plugins/router.js';


import './filters';


 let vm = new Vue({
  render: h => h(App),
  router,
  data:{
    bNav:false,
    bFoot:false,
    bLoading:false
  }
}).$mount('#app')

export default vm
