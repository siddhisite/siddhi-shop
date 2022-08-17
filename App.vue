<script>
	export default {
		onLaunch: function(options) {
			//页面带share_token传参，保存在缓存
			if (options.query.share_token){
				uni.setStorageSync("share_token",options.query.share_token);
			}
			this.app.getPlatform();//获取用户来源端口
			//获取系统语言
			let that = this;
			uni.getSystemInfo({
				success: function (res) {
					let lang = 'zh-CN';
					if (res.language.indexOf('en')>=0){
						lang = 'en';
					}
					//lang = 'en';
					uni.setStorageSync("sys_language",lang);
					//获取全站默认配置
					that.$u.get('publics/api.index/defaultSetting',{notLoginLimit:1}).then(res => {
						uni.setStorageSync("setting",res.data.setting);
						var session_id = uni.getStorageSync("session_id");
						if (session_id == ''){
							uni.setStorageSync("session_id",res.data.session_id);
						}
						
						options.query.auto_login = 1;//尝试自动登陆，前提后台开启权限
						that.app.getWxOauthOpenId(that,options.query);//微信自动登陆，针对公众号访问和微信小程序有效
						
						//微信公众号分享
						let setting = uni.getStorageSync('setting');
					})
					if (lang != 'zh-CN' && that.config.moreLanguage == true){
						//获取语言包
						that.$u.get('publics/api.index/getLangPack').then(res => {
							uni.setStorageSync("sys_LangPackArr",res.data);
						})
					}
				}
			})
			
			//代理端每3秒验证登陆状态
			setInterval(() => {
				this.app.isLogin(this,'channel')},3000);
		},
		onShow: function() {
			uni.removeStorageSync("isNotLoginTip");
			console.log('App Show');
			
		},
		onHide: function() {
			console.log('App Hide');
		}
	}
</script>

<style lang="scss">
	@import "uview-ui/index.scss";
	@import './layout.scss';
	@import './static/public/css/public.scss';
	@import "./static/shop/diyPage/css/diy.scss";
	/* #ifdef H5 */

	/* #endif */
</style>
