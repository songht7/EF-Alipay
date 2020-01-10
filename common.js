/*
 *	userType 1：management管理员		2：business商业	3：customer顾客
 *	A：普通用户 or 员工 
 *	B：企业管理员
 * */

var api = {
	"formal": {
		"interface": "http://api_test.meetji.com", //接口
		"domain": "http://www.meetji.com",
		"appName": "EF",
		"aliplay": {
			"AppID": "2019103168833246"
		}
	},
	"dev": {
		"interface": "http://api_test.meetji.com", //接口
		"domain": "http://train.wsshanghai.com",
		"appName": "EF",
		"aliplay": {
			"AppID": "wxeaf6d3cdbb53e013"
		}
	}
}
var lks = "dev";
export default {
	Interface: {
		"site": lks,
		"apiurl": api[lks]["interface"],
		"domain": api[lks]["domain"],
		"appName": api[lks]["appName"],
		"addr": {}
	}
}
