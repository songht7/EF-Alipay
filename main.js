import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
// 引入vuex 状态库
import store from "./store";
Vue.prototype.$store = store;

import copyright from "./components/copyright.vue"
Vue.component("copyright",copyright)

/*用户协议*/
import agreement from "./components/agreement.vue"
Vue.component("agreement", agreement)

/*全局方法或变量*/
Vue.prototype.now = Date.now || function() {
	return new Date().getTime();
};
Vue.prototype.websiteUrl = 'http://www.meetji.com';
Vue.prototype.sourceUrl = 'http://api_test.meetji.com';

App.mpType = 'app'

const app = new Vue({
	store,
	...App
})
app.$mount()
