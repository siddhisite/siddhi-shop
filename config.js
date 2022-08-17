var _baseUrl = 'https://huimaihuimai.net/';//api请求网址	
export default {
	defaultIndex:'/pages/shop/index/index',//默认首页
	defaultColor:'#fe0079',//默认颜色
	baseUrl: _baseUrl,//api地址
	upImageUrl: _baseUrl+'index.php/publics/api.index/upImage',//公共上传图片地址
	removeImageUrl:_baseUrl+'index.php/publics/api.index/removeImage',//删除公共上传图片地址
	moreLanguage:true,//是否多语言
	wxmpProvider:'',//微信小程序直播组件appid
	//代理渠道端设置
	channelLoginWhiteList:[//登陆判断白名单,设置后不验证登陆
		'/preview-image',//特殊页，展示图片
		'pagesB/channel/passport/login',
		'pagesB/channel/passport/forget',
		'pagesB/channel/passport/register',
		'pagesB/channel/center/authorizedShow',//查看授权查询结果，无须登陆
	]
	//代理渠道端设置end
}