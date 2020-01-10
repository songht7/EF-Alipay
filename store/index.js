import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		sourceUrl: "http://api_test.meetji.com",
		loading: "0",
		base_url: "",
		user: {},
		openid:"",
		phone:"",
		data: "",
		isWeixin: true,
		sysInfo: "",
		popup_user:"on"
	},
	mutations: {
		isWeixin(state, status) {
			state.isWeixin = status
		},
		get_user(state, data) {
			console.log(data)
			state.user = data
			state.openid = data.openid
			state.phone = data.phone
		},
		set_sysInfo(state, data) {
			state.sysInfo = data
		},
		set_popup_user(state, data) {
			state.popup_user = data
		}
	},
	actions: {
		cheack_user(ctx) {
			var user = "";
			uni.getStorage({
				key: "uWXInfo",
				success: function(res) {
					user = res.data;
					ctx.commit("get_user", user)
				}
			})
		},
		goback(ctx, url) {
			if (url) {
				uni.navigateTo({
					url: url
				});
			} else {
				uni.navigateBack({
					delta: 1
				});
			}
		},
		makePhoneCall(ctx) {
			uni.makePhoneCall({
				phoneNumber: ctx.state.phoneNumber
			});
		},
		checkWeixin(ctx) {
			let _isWeixin = !!/micromessenger/i.test(navigator.userAgent.toLowerCase());
			ctx.commit("isWeixin", _isWeixin)
		},
		get_sysInfo(ctx) {
			uni.getSystemInfo({
				success: (res) => {
					ctx.commit("set_sysInfo", res)
				}
			})
		},
		set_popup_user(ctx,t){
			console.log(t)
			ctx.commit("set_popup_user", t)
		}
	},
	modules: {
	}
})
export default store
