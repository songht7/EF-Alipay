<template>
	<view class="ef-page-thx">
		<view class="page-cont">
			<view class="icon">
				<img src="../../static/ef/good.png" class="good-img" alt="">
			</view>
			<view class="page-title">感谢您的注册</view>
			<view class="line"></view>
			<view class="page-views">稍后将会有课程顾问和您联系</view>
			<view class="qrbox ">
				<img src="../../static/ef/customer_qrcode.png" class="qr-code" alt="">
				<view class="qrtxt hide">扫一扫 联系客服</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniIcon from '../../components/uni-icon.vue';
	export default {
		components: {
			uniIcon
		},
		data() {
			return {
				key: ""
			};
		},
		onLoad(option) {
			var _key = option.key;
			if (_key == "wb") {this.key=_key}
			uni.setNavigationBarTitle({
				title: ""
			});
		}
	}
</script>

<style>
	.ef-page-thx {
		background: url(../../static/ef/page-thanks.jpg) 50% 0 no-repeat #0E0E0E;
		width: 100%;
		height: 100%;
		min-height: 1200upx;
		color: #fff;
		background-size: contain;
		padding: 160upx 0 0;
	}

	.page-cont {
		width: 90%;
		margin: 0 auto;
	}

	.icon {
		width: 100%;
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100upx;
	}

	.good-img {
		height: 100%;
		width: auto;
	}

	.line {
		width: 100upx;
		margin: 40upx auto;
		height: 2upx;
		overflow: hidden;
		background: #fff;
	}

	.page-title {
		font-weight: lighter;
		font-size: 46upx;
		text-align: center;
		line-height: 3;
		letter-spacing: 4upx;
	}

	.page-views {
		text-align: center;
		line-height: 2;
		font-size: 30upx;
		letter-spacing: 2upx;
		padding: 20upx 0 50upx;
	}

	.qrbox {
		text-align: center;
		color: #CCCCCC;
	}

	.qr-code {
		display: block;
		width: 40%;
		margin: 0 auto 40upx;
	}
	.qr-code2{
		width: 80%;
	}
</style>
