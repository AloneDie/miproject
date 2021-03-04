<template>
  <!-- 侧边栏全局组件 -->
  <div id="sidebar">
    <ul>
      <li class="phoneApp">
        <a href>
          <em class="icofont icon-phone"></em>
          <span>手机APP</span>
        </a>
      </li>
      <li class="personCenter">
        <a href>
          <em class="iconfont icon-personCenter"></em>
          <span>个人中心</span>
        </a>
      </li>
      <li class="afterSaleServices">
        <a href>
          <em class="iconfont icon-buoumaotubiao46"></em>
          <span>售后服务</span>
        </a>
      </li>
      <li class="personServicer">
        <a href>
          <em class="iconfont iconpersonkefu"></em>
          <span>人工客服</span>
        </a>
      </li>
      <li class="shopCart">
        <a href>
          <em class="iconfont icon-shopCart"></em>
          <span>购物车</span>
        </a>
      </li>
      <li class="callTop">
        <a href>
          <em class="iconfont icon-callTop"></em>
          <span>回到顶部</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style>
#sidebar {
  width: 100px;
  height: 500px;
  position: fixed;
  bottom: 70px;
  right: 0;
  z-index: 99;
}

#sidebar li {
  width: 82px;
  height: 90px;
  background-color: #fff;
}
#sidebar li a {
  display: inline-block;
  width: 82px;
  height: 90px;
  color: #333;
}
</style>