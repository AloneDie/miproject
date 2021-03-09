<template>
  <div id="login">
    <topBar></topBar>
    <div class="logo">
      <div class="wapper">
        <a href>小米商城</a>
      </div>
      <div class="poster">
        <input v-model="userName" type="text" placeholder="请输入用户名" />
        <input v-model="pwd" type="password" />
        <button @click="loging">登录</button>
      </div>
    </div>
    <site-footer></site-footer>
    <footer-info></footer-info>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userName: "",
      pwd: ''
    }
  },
  methods: {
    loging () {
      let userName = this.userName;
      let pwd = this.pwd
      this.$http({
        method: 'post',
        url: '/login',
        data: { userName, pwd }
      })
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
      display: inline-block;
      height: 98px;
      width: 200px;

      background: url(https://account.xiaomi.com/static/res/7f6f2f5/account-static/respassport/acc-2014/img/mistore_logo.png)
        no-repeat;
    }
  }
  .poster {
    width: 100%;
    height: 588px;
    background: url(https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/72644d9b8031286de3cc74e151aefd90.jpg)
      no-repeat;
    background-repeat: no-repeat;
    background-position: top center;
  }
}
</style>