<template>
  <!-- 顶部组件 -->
  <div id="topBar">
    <div class="container">
      <div class="topbar-nav">
        <a rel="nofollow" href="//www.mi.com/index.html">小米商城</a>
        <span class="sep">|</span>
        <a rel="nofollow" href="//www.miui.com/" target="_blank">MIUI</a>
        <span class="sep">|</span>
        <a rel="nofollow" href="//iot.mi.com" target="_blank">IoT</a>
        <span class="sep">|</span>
        <a rel="nofollow" href="//i.mi.com/" target="_blank">云服务</a>
        <span class="sep">|</span>
        <a rel="nofollow" href="//airstar.com/home" target="_blank">天星数科</a>
        <span class="sep">|</span>
        <a rel="nofollow" href="//youpin.mi.com/" target="_blank">有品</a>
        <span class="sep">|</span>
        <a rel="nofollow" href="//xiaoai.mi.com/" target="_blank">小爱开放平台</a>
        <span class="sep">|</span>
        <a rel="nofollow" href="//qiye.mi.com/" target="_blank">企业团购</a>
        <span class="sep">|</span>
        <a rel="nofollow" href="//www.mi.com/aptitude/list/?id=41" target="_blank">资质证照</a>
        <span class="sep">|</span>
        <a rel="nofollow" href="//www.mi.com/aptitude/list/" target="_blank">协议规则</a>
        <span class="sep">|</span>
        <a href="//www.mi.com/appdownload/" target="_blank">
          下载app
          <span class="appcode">
            <!-- <img
              src="//i1.mifile.cn/f/i/17/appdownload/download.png?1"
              alt="小米商城"
              width="90"
              height="90"
            />-->
            小米商城APP
          </span>
        </a>
        <span class="sep">|</span>
        <a rel="nofollow" href="https://xiaomishare.mi.com/?from=micom" target="_blank">智能生活</a>
        <span class="sep">|</span>
        <a rel="nofollow" href="javascript:;" class="J_siteGlobalRegion">Select Location</a>
      </div>
      <div class="shopCart">
        <a href="//www.mi.com/buy/cart">
          <em class="iconfont icon-shopCart"></em>购物车
          <span class>（0）</span>
        </a>
      </div>
      <div class="btn-login">
        <a rel="nofollow" href="/login" target="_blank">登录</a>
        <span>|</span>
        <a rel="nofollow" href="/login" target="_blank">注册</a>
        <span>|</span>
        <a rel="nofollow" href="/msg" target="_blank">消息通知</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
/* @import url(//at.alicdn.com/t/font_2392189_z7dhp16xqm.css); */

#topBar {
  background-color: #333;
  height: 40px;
  font-size: 12px;
  color: #b0b0b0;
}
#topBar .container {
  width: 1200px;
  margin: 0 auto;
}

/* 头部页面下的a标签与.sep的通用样式 */
#topBar .container a {
  color: #b0b0b0;
  line-height: 40px;
  display: inline-block;
}

#topBar .container .sep {
  margin: 0 0.3em;
  color: #424242;
}

/* topBar-nav */
#topBar .topbar-nav {
  float: left;
  height: 40px;
  line-height: 40px;
}

#topBar .topbar-nav a:hover {
  color: #fff;
}

/* 购物车 */
#topBar .shopCart {
  position: relative;
  float: right;
  width: 120px;
  height: 40px;
  margin-left: 15px;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
  font-size: 12px;
}
#topBar .shopCart a {
  display: block;
  position: relative;
  z-index: 32;
  height: 40px;
  text-align: center;
  color: #b0b0b0;
  background: #424242;
}
#topBar .shopCart a:hover {
  color: #fff;
}

/* 登录注册模块 */
#topBar .btn-login {
  float: right;
}
#topBar .btn-login a {
  padding: 0 5px;
}
#topBar .btn-login a:last-child {
  padding: 0 10px;
}
</style>