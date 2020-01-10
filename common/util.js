const isArray = Array.isArray || function(obj) {
	return obj instanceof Array;
};
const Interface = {
	"SendMail": {
		"url": "http://www.spacehu.com/space/mail/mail.php?leo=",
		"email": ["980558589@qq.com", "stk@meetji.com", "yunfeng.ma@inmobi.com", "jason.wu@inmobi.com"],
		"testEmail": ["407794660@qq.com"]
	},
	// 	,"getData":"http://api_test.meetji.com/v1/ApiEnum-getRegion.htm?id=110000"
	"apiurl": "http://api_test.meetji.com",
	"domain": "http://www.meetji.com",
	"addr": {
		"slideShow": "/v2/ApiHome-slideShow.htm",
		"article": "/v2/ApiHome-article.htm", //列表
		"getDetail": "/v2/ApiHome-article_detail.htm",
		"saveSingle": "/v2/ApiHome-saveSingle.htm", //预约POST
		"getHelp": "/v2/ApiHome-getHelp.htm", //助力详细
		"saveHelp": "/v2/ApiHome-saveHelp.htm", //帮助助力
		"saveComment": "/v2/ApiHome-saveComment.htm", //评论
		"getCategory": "/v2/ApiHome-getCategory.htm", //获取分类
		"getSubjectCategory": "/v2/ApiHome-getSubjectCategory.htm", //获取子分类
		"getAgeRange": "/v2/ApiHome-getAgeRange.htm", //获取年龄段
		"getBrand": "/v2/ApiHome-getBrand.htm", //品牌
		"getRegion": "/v1/ApiEnum-getRegion.htm",
		"getRegion2": "/v2/ApiEnum-getRegion.htm", //区域
		"getBookedList": "/v2/ApiHome-getBookedList.htm", //预约列表
		"saveUserInfo": "/v2/ApiHome-saveUserInfo.htm", //编辑保存用户
		"getWeChatInfo": "/v2/ApiWeChat-getWeChatInfo.htm",
		"getJsApiTicket": "/v2/ApiWeChat-getJsApiTicket.htm",
		"savePoint": "/v2/ApiHome-savePoint.htm" //得积分POST
	}

};
const module = {
	getData: function(url, fun, method, data, _head) {
		let result = [];
		let resultAll = [];
		uni.request({
			url: url,
			method: method || "GET",
			data: data || {},
			header: _head || {},
			success: function(res) {
				console.log("mdl.getData:", url);
				console.log(res);
				let __res = res.data;
				resultAll = __res;
				if (__res.success) {
					if (__res.data) {
						result = __res.data;
					} else if (__res.post) {
						result = __res.post;
					} else if (__res.result) {
						result = __res.result;
					} else {
						result = __res.info;
					}
				} else {
					result = {
						"Result": "0",
						"Msg": "请求失败，请重试!",
						"err": ""
					}
				}
			},
			fail: function(err) {
				// 				console.log("======fail========");
				// 				console.log(err);
				result = {
					"Result": "0",
					"Msg": "接口请求失败",
					"err": err
				}
			},
			complete: function(comp) {
				// 				console.log("======complete========");
				// 				console.log(result)
				if (fun) {
					new fun(result, resultAll)
				}
			}
		})
	},
	queryString: function(value) {
		const reg = new RegExp(`(^|&)${value}=([^&]*)(&|$)`, 'i')
		const r = window && window.location.search.substr(1).match(reg)
		if (r != null) {
			return unescape(r[2])
		}
		return null
	},
	isIOS: function() {
		var isIphone = navigator.userAgent.includes('iPhone');
		var isIpad = navigator.userAgent.includes('iPad');
		return isIphone || isIpad;
	},
	getSysInfo: function() {
		return uni.getSystemInfoSync().platform;
	},
	getMyStorage: function(key, val, fun) {
		var _storage = "";
		uni.getStorage({
			key: key,
			success: function(res) {
				if (val) {
					_storage = res.data.val;
				} else {
					_storage = res.data;
				}
			},
			complete(c) {
				if (fun) {
					new fun(_storage)
				}
			}
		});
	}
}
const getList = function(key) {
	let _list = [{}, {}, {
		"id": 5,
		"title": "专业认证培训师,教你地道英语",
		"overview": "免费试听体验课",
		"price": "7999",
		"sale": "免费",
		"total": "1000",
		"putout": "101",
		"brandLogo": "../../static/ef/logo2.png",
		"navTo": "",
		//"navTo": "http://www.ef.com.cn/online/lp/cn/2017yr/mobile/product_feature_ft_light.aspx?ctr=cn&lng=cs&apr=ProductFeatureFT&offer=FreeDemo&ptn=EMSP&Etag=edm-dcoo-none-all-none-E_3rd_DS_030",
		"slideimg": [
			"../../static/ef/img1.jpg",
			"../../static/ef/img2.jpg"
		],
		"comment": {
			"percent": "4.5",
			"list": [{
				"portrait": "../../static/ef/logo.png",
				"name": "amile",
				"cont": "孩子喜欢这样的环境，老师很优秀，家长很放心",
				"grade": "4.8",
				"date": "2018-5-10"
			}]
		}
	}]
	if (key != undefined) {
		return _list[key];
	} else {
		return _list;
	}
}
export default {
	Interface,
	module,
	getList,
	isArray
}
