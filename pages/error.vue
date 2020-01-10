<template>
	<view class="error-page">
		<view class="err-tip">
			{{msg}}
			<img src="/static/qrcode1.png" alt="英语" class="qrcodefot" />
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				err: "",
				msg: "请在移动设备中打开！"
			};
		},
		onLoad(option) {},
		onShow() {

		}
	}
</script>

<style>
	page {
		background: #000;
	}

	.err-tip {
		font-size: 28px;
		text-align: center;
		line-height: 3;
		color: #999;
	}

	.qrcodefot {
		width: 50%;
		display: block;
		margin: 0 auto;
	}
</style>
