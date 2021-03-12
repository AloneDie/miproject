<template>
  <!-- 侧边栏全局组件 -->
  <div id="sidebar">
    <ul>
      <li>
        <a href>
          <div class="icon">
            <img
              class="hover"
              src="https://i8.mifile.cn/b2c-mimall-media/74c4fcb4475af8308e9a670db9c01fdf.png"
            />
            <img
              class="static"
              src="https://i8.mifile.cn/b2c-mimall-media/98a23aae70f25798192693f21c4d4039.png"
            />
          </div>
          <span class="text">手机app</span>
        </a>
      </li>
      <li>
        <a href>
          <div class="icon">
            <img
              src="https://i8.mifile.cn/b2c-mimall-media/55cad219421bee03a801775e7309b920.png"
              class="static"
            />
            <img
              src="https://i8.mifile.cn/b2c-mimall-media/41f858550f42eb1770b97faf219ae215.png"
              class="hover"
            />
          </div>
          <span class="text">个人中心</span>
        </a>
      </li>
      <li>
        <a href>
          <div class="icon">
            <img
              src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/12eb0965ab33dc8e05870911b90f3f13.png"
              class="static"
            />
            <img
              src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/95fbf0081a06eec7be4d35e277faeca0.png"
              class="hover"
            />
          </div>
          <span class="text">售后服务</span>
        </a>
      </li>
      <li>
        <a href>
          <div class="icon">
            <img
              src="https://i8.mifile.cn/b2c-mimall-media/4f036ae4d45002b2a6fb6756cedebf02.png"
              class="static"
            />
            <img
              src="https://i8.mifile.cn/b2c-mimall-media/5e9f2b1b0da09ac3b3961378284ef2d4.png"
              class="hover"
            />
          </div>
          <span class="text">人工客服</span>
        </a>
      </li>
      <li>
        <a href>
          <div class="icon">
            <img
              class="static"
              src="https://i8.mifile.cn/b2c-mimall-media/d7db56d1d850113f016c95e289e36efa.png"
            />
            <img
              class="hover"
              src="https://i8.mifile.cn/b2c-mimall-media/692a6c3b0a93a24f74a29c0f9d68ec71.png"
            />
          </div>
          <span class="text">购物车</span>
        </a>
      </li>
      <li class="backTop">
        <a href>
          <div class="icon">
            <img src="//i1.mifile.cn/f/i/2018/home/totop.png" class="static" />
            <img src="//i1.mifile.cn/f/i/2018/home/totop_hover.png" class="hover" />
          </div>
          <span class="text">回到顶部</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='scss'>
#sidebar {
  width: 100px;
  height: 500px;
  position: fixed;
  bottom: 70px;
  right: 0;
  z-index: 99;
  background: #fff;
  a {
    color: #757575;
  }
  ul {
    .backTop {
      margin-top: 14px;
      border-top: 1px solid #f5f5f5;
    }
    li {
      position: relative;
      width: 82px;
      height: 90px;
      margin-top: -1px;
      background-color: #fff;
      border: 1px solid #f5f5f5;
      text-align: center;
      a {
        .icon {
          position: relative;
          width: 30px;
          height: 30px;
          margin: 0 auto 8px;
          padding-top: 18px;
          img {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 30px;
            height: 30px;
            -webkit-transition: opacity 0.3s;
            transition: opacity 0.3s;
          }
          .hover {
            display: none;
          }
        }
        &:hover .hover {
          display: block;
        }
        &:hover {
          color: #ff6700;
        }
      }
    }
  }
}
</style>