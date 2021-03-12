<template>
  <!-- 底部组件（联系方式） -->
  <div id="site-footer">
    <div class="container">
      <div class="services">
        <ul>
          <li v-for="(item, key) in footerService" :key="key">
            <em class="iconfont" :class="item.iconfont"></em>
            <a href="item.href">{{item.service}}</a>
          </li>
        </ul>
      </div>
      <div class="footer-links">
        <dl class="help">
          <dt>帮助中心</dt>
          <dd>账户管理</dd>
          <dd>购物指南</dd>
          <dd>订单操作</dd>
        </dl>
        <dl class="serviceSupport">
          <dt>服务支持</dt>
          <dd>售后政策</dd>
          <dd>自助服务</dd>
          <dd>相关下载</dd>
        </dl>
        <dl class="offlineStore">
          <dt>线下门店</dt>
          <dd>小米之家</dd>
          <dd>服务网点</dd>
          <dd>授权体验店</dd>
        </dl>
        <dl class="about">
          <dt>关于小米</dt>
          <dd>了解小米</dd>
          <dd>加入小米</dd>
          <dd>投资者关系</dd>
          <dd>企业社会责任</dd>
          <dd>廉洁举报</dd>
        </dl>
        <dl class="focusOn">
          <dt>关注我们</dt>
          <dd>新浪微博</dd>
          <dd>官方微信</dd>
          <dd>联系我们</dd>
          <dd>公益基金会</dd>
        </dl>
        <dl class="specialService">
          <dl>特色服务</dl>
          <dd>F 码通道</dd>
          <dd>礼物码</dd>
          <dd>防伪查询</dd>
        </dl>
        <div class="call-us">
          <p class="phone">400-100-5678</p>
          <p>8:00-18:00（仅收市话费）</p>
          <a rel class="servicer">
            <em class="iconfont icon-xiaoxi"></em> 人工客服
          </a>
          <div class="follow">
            关注小米：
            <a target="_blank" class="weibo" stat_exposure="true"></a>
            <a href="javascript:void(0);" class="weixin"></a>
            <img
              src="//cdn.cnbj1.fds.api.mi-img.com/staticsfile/global/wx-img.png"
              id="J_followWxImg"
              style="display: none;"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'site-footer',
  data () {
    return {
      footerService: [
        {
          id: 1,
          iconfont: "icon-buoumaotubiao46",
          service: '预约维修服务',
          href: ''
        },
        {
          id: 2,
          iconfont: "icon-footer-7",
          service: '7天无理由退货',
          href: ''
        },
        {
          id: 3,
          iconfont: "icon-liwu",
          service: '15天免费换货',
          href: ''
        },
        {
          id: 4,
          iconfont: "icon-tian",
          service: '满99元包邮',
          href: ''
        },
        {
          id: 5,
          iconfont: "icon-Frame1",
          service: '520余家售后网点',
          href: ''
        }]
    }
  }

}
</script>

<style text="text/css">
/* @import url('//at.alicdn.com/t/font_2392189_vaf0ec67mz.css'); */
#site-footer a {
  color: rgb(97, 97, 97);
}

#site-footer {
  margin-top: auto;
  width: 100%;
}
#site-footer .container {
  width: 1200px;
  margin: 0 auto;
}

#site-footer .services {
  padding: 27px 0;
  border-bottom: 1px solid rgb(224, 224, 224);
  font-size: 16px;
}
/* service样式 */
#site-footer .services ul {
  display: flex;
  justify-content: space-around;
}
#site-footer .services ul li {
  flex-basis: 19.8%;
  border-left: 1px solid #e0e0e0;
}
#site-footer .services ul li:first-child {
  border-left: 0;
}
/* hover效果 */
#site-footer .services li:hover a,
#site-footer .services li:hover em,
.footer-links dl dd:hover {
  color: #ff6700;
  cursor: pointer;
}
#site-footer .services .iconfont {
  margin-right: 6px;
  font-size: 24px !important;
  line-height: 24px;
  vertical-align: -4px;
}

/* 剩余部分 */
#site-footer .footer-links {
  padding: 40px 0;
  display: flex;
  justify-content: space-between;
}
#site-footer .footer-links dl dt {
  font-size: 14px;
  line-height: 1.25;
  color: #424242;
  margin-bottom: 26px;
}

#site-footer .footer-links dl dd {
  font-size: 12px;
  margin: 10px 0 0;
  color: rgb(117, 117, 117);
}
#site-footer .footer-links dl dd:hover {
  color: #ff6700;
}

/* 联系我们 */
#site-footer .call-us {
  text-align: center;
  flex-basis: 19.8%;
  border-left: 1px solid #e0e0e0;
}

#site-footer .call-us p {
  font-size: 12px;
  margin: 5px;
}
#site-footer .call-us a {
  font-size: 12px;
  width: 24px;
  height: 24px;
  display: inline-block;
  cursor: pointer;
}

#site-footer .call-us .phone {
  font-size: 22px;
  color: #ff6700;
  line-height: 1;
}

#site-footer .call-us .servicer {
  width: 118px;
  height: 28px;
  line-height: 28px;
  border: 1px solid #ff6700;
  background-color: #fff;
  color: #ff6700;
  transition: all 0.4s;
}

#site-footer .call-us .servicer:hover {
  background-color: #ff6700;
  color: #fff;
}
#site-footer .call-us .servicer em {
  font-size: 12px !important;
}
#site-footer .call-us .follow {
  margin-top: 10px;
  font-size: 12px;
}

#site-footer .call-us .follow a {
  margin-left: 6px;
  margin-top: -3px;
  vertical-align: middle;
}

#site-footer .call-us .follow .weibo {
  background: url(https://cdn.cnbj1.fds.api.mi-img.com/staticsfile/global/wb.png)
    50% 0 no-repeat;
  background-size: cover;
}
#site-footer .call-us .follow .weibo:hover {
  background-image: url(https://cdn.cnbj1.fds.api.mi-img.com/staticsfile/global/wb@2x.png);
}
#site-footer .call-us .follow .weixin {
  background: url(https://cdn.cnbj1.fds.api.mi-img.com/staticsfile/global/wx.png)
    50% 0 no-repeat;
  background-size: cover;
}
#site-footer .call-us .follow .weixin:hover {
  background-image: url(https://cdn.cnbj1.fds.api.mi-img.com/staticsfile/global/wx@2x.png);
}
</style>