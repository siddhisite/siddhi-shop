import Vue from 'vue'
import App from './App'
import config from './config.js' //配置信息
Vue.prototype.config = config;

Vue.config.productionTip = false

App.mpType = 'app'

// 引入全局uView
import uView from 'uview-ui'
Vue.use(uView);

// 引入uView对小程序分享的mixin封装
let mpShare = require('uview-ui/libs/mixin/mpShare.js');
Vue.mixin(mpShare)

const app = new Vue({
    ...App
})

//支付相关
import $mPayment from "@/common/payment.js";
Vue.prototype.$mPayment=$mPayment;


import $app from "./common/common.js";
Vue.prototype.app=$app;

// http拦截器，将此部分放在new Vue()和app.$mount()之间，才能App.vue中正常使用
import httpInterceptor from '@/common/http.interceptor.js'
Vue.use(httpInterceptor, app)


// http接口API抽离，免于写url或者一些固定的参数
import httpApi from '@/common/http.api.js'
Vue.use(httpApi, app)

import share from '@/mixins/share.js'
Vue.mixin(share)
//https://ext.dcloud.net.cn/plugin?id=415
/*
设置剪切板
uni.setClipboardData({ data:'文字', success:function(data){}, fail:function(err){}, complete:function(res){} })

获取剪贴板
uni.getClipboardData({success:function(data){}, fail:function(err){}, complete:function(res){} })

保存图片到系统相册
uni.saveImageToPhotosAlbum({ filePath: res.tempFilePaths[0], success: function () { console.log('save success'); } })

保存视频到系统相册
uni.saveVideoToPhotosAlbum({ filePath: res.tempFilePath, success: function () { console.log('save success'); } });
*/
import './js_sdk/ican-H5Api/ican-H5Api.js'

app.$mount()
