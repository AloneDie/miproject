<template>
  <div id="login">
    <topBar></topBar>
    <div class="logo">
      <div class="wapper">
        <a href>小米商城</a>
      </div>
      <div class="poster">
        <div class="layout">
          <div id="nav-tabs" class="nav_tabs">
            <a
              class="navtab-link"
              href="javascript:void(0);"
              :class="{active:navTab.isAccount}"
              @click="selected($event,navTab)"
            >帐号登录</a>
            <span class="line"></span>
            <a
              class="navtab-link"
              href="javascript:void(0); "
              :class="{active:navTab.isSweep}"
              @click="selected($event,navTab)"
            >扫码登录</a>
          </div>
          <div class="login-info">
            <input type="text" placeholder="邮箱/手机号码/小米ID" v-model="username" />
            <input type="password" placeholder="密码" v-model="password" />
            <button class="btnlgn" @click="login">登录</button>
            <button class="btnlgn phone">手机短信登录/注册</button>
            <button class="reg">立即注册</button>
            <span>|</span>
            <button class="forPass">忘记密码?</button>
          </div>
          <div class="others">
            <a
              href="https://graph.qq.com/oauth2.0/show?which=Login&display=pc&response_type=code&client_id=100284651&redirect_uri=https://account.xiaomi.com/pass/sns/login/load&state=STATE_661025"
              title="QQ登录"
              target="_blank"
            >
              <em class="iconfont icon-QQ"></em>
            </a>
            <a
              title="微博登录"
              target="_blank"
              href="https://api.weibo.com/oauth2/authorize?response_type=code&client_id=2996826273&redirect_uri=https://sns.account.xiaomi.com/pass/sns/login/load&state=STATE_342318###"
            >
              <em class="iconfont icon-weibo1"></em>
            </a>
            <a
              href="https://open.weixin.qq.com/connect/qrconnect?appid=wxa21de3acc0d5e79b&redirect_uri=https%3A%2F%2Fsns.account.xiaomi.com%2Fpass%2Fsns%2Flogin%2Fload&response_type=code&scope=snsapi_login&state=STATE_675106#wechat_redirect"
              title="微信登录"
              target="_blank"
            >
              <em class="iconfont icon-weixin1"></em>
            </a>
            <a
              title="支付宝登录"
              target="_blank"
              href="https://auth.alipay.com/login/express.htm?goto=https%3A%2F%2Fmemberexprod.alipay.com%3A443%2Fauthorize%2FuserAuthQuickLoginAction.htm%3Fe_i_i_d%3Dd5f608bcaaf38d62c05524d459e51409"
            ></a>
            <em class="iconfont icon-zhifubao"></em>
          </div>
        </div>
      </div>
    </div>
    <site-footer></site-footer>
    <footer-info></footer-info>
  </div>
</template>

<script>
import topBar from '../components/topBar';
import siteFooter from '../components/site-footer';
import footerInfo from '../components/footer-info'
export default {
  components: {
    topBar,
    siteFooter,
    footerInfo
  },
  data () {
    return {
      username: '',
      password: '',
      userId: '',
      navTab: {
        isAccount: true,
        isSweep: false
      }

    }
  },
  methods: {
    login () {
      // 使用es6的解构赋值
      let { username, password } = this;
      // 提交登录请求
      this.axios.post('/user/login', {
        username,
        password
      }).then((res) => {
        this.$cookie.set('userId', res.id, { expires: 'Session' });
        this.saveUserName(res.username);
        this.$router.push({
          name: 'index',
          params: {
            from: 'login'
          }
        });
      })
    },
    selected (event, target) {
      if (event.target.classList.contains('active')) {
        return
      } else {
        for (let k in target) {
          target[k] = !target[k]
        }
      }
    }
  }
}
</script>

<style lang="scss">
.logo {
  .wapper {
    width: 1130px;
    margin: 0 auto;
    height: 98px;
    text-align: left;
    a {
      display: block;
      height: 98px;
      width: 200px;

      background: url(https://account.xiaomi.com/static/res/7f6f2f5/account-static/respassport/acc-2014/img/mistore_logo.png)
        no-repeat;
      text-indent: -9999px;
    }
  }
  .poster {
    width: 100%;
    height: 588px;
    background: url(https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/72644d9b8031286de3cc74e151aefd90.jpg)
      no-repeat;
    background-repeat: no-repeat;
    background-position: top center;
    box-sizing: border-box;
    border-top: 1px solid #fff;
    cursor: pointer;
    .layout {
      background-color: #fff;
      margin: 31px auto 0;
      position: relative;
      width: 410px;
      min-width: 400px;
      min-height: 556px;
      margin-right: 180px;
      bottom: 0;
      font-size: 14px;
      z-index: 4;
      .nav_tabs {
        padding: 27px 0 24px;
        text-align: center;
        font-size: 24px;
        color: #666;
        a {
          color: #666;
          &:hover {
            color: #ff6700;
          }
        }

        .active {
          color: #ff6700;
        }
        .line {
          width: 1px;
          height: 24px;
          margin: 0 35px 0 42px;
          border: 1px solid #e0e0e0;
          background: #e0e0e0;
        }
      }
      .login-info {
        width: 348px;
        margin: 0 auto;
        input {
          display: block;
          box-sizing: content-box;
          width: 306px;
          height: 22px;
          line-height: 22px;
          padding: 13px 16px 13px 14px;
          color: #4a4a4a;
          background: none;
          border: 1px solid #e0e0e0;
          margin-bottom: 14px;
          outline: none;
        }
        button {
          color: #999;
          outline: none;
          cursor: pointer;
          border: 0 none;
          background: #fff;
        }
        .btnlgn {
          background-color: #ff6700;
          width: 100%;
          height: 50px;
          line-height: 50px;
          display: block;
          margin-bottom: 14px;
          font-size: 14px;
          color: #fff;
        }
        .phone {
          color: #ff6700;
          border: 0 none;
          height: auto;
          line-height: normal;
          margin: 0;
          background: #fff;
          margin-bottom: 30px;
        }
        .reg:hover,
        .forPass:hover {
          color: #ff6700;
        }
      }
      .others {
        padding-top: 143px;
        em {
          font-size: 30px;
          margin: 0 17px;
        }
        .icon-QQ {
          color: #3ca6db;
        }
        .icon-weibo1 {
          color: #d03231;
        }
        .icon-weixin1 {
          color: #27d034;
        }
        .icon-zhifubao {
          color: #24abeb;
        }
      }
    }
  }
}
</style>