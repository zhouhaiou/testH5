<template>
  <div>
    <header class="home-header"></header>
    <div class="card-box">
      <van-image class="card-bg" fit="contain" :src="require('@/assets/card_bg.svg')" loading/>
    </div>
    <div class="apply-form">
      <!-- <van-cell-group> -->
      <van-field v-model="tel" clearable placeholder="请输入手机号"/>
      <van-field v-model="code" clearable placeholder="请输入验证码">
        <van-button slot="button" size="small" round class="code-btn">发送</van-button>
      </van-field>
      <van-button size="large" round class="submit" @click="applyCard">申请会员卡</van-button>
      <!-- </van-cell-group> -->
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Image, Field, Button } from "vant";
import { saveToken } from "@/utils/token";
import { apply } from "@/api/auth";

Vue.use(Image)
  .use(Field)
  .use(Button);
export default {
  data() {
    return {
      tel: "",
      code: "",
      redirect: ""
    };
  },
  methods: {
    applyCard() {
      apply().then(res => {
        if (!res.errcode) {
          console.log(res);
          saveToken(res.access_token);
          this.$router.push({ path: this.redirect || "/", redirect: "/" });
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.home-header {
  position: absolute;
  top: 0;
  width: 100%;
  height: 150px;
  background: #000;
  z-index: 0;
}
.card-box {
  position: relative;
  top: 0;
  margin: 20px auto;
  width: 300px;
  min-height: 200px;

  .card-bg {
    width: 100%;
    height: auto;
  }
}

.apply-form {
  width: 80%;
  margin: 0 auto;

  .submit,
  .code-btn {
    background: #8c6222;
    color: #fff;
    border-color: #8c6222;
  }

  .submit {
    margin-top: 20px;
  }
}
</style>
