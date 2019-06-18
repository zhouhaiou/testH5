<template>
  <div class="home">
    <header class="home-header"></header>
    <div class="card-box">
      <div class="card-num">№: 888999</div>
      <div class="card-qr">
        <img src="@/assets/qr_icon.png" alt>
      </div>
      <van-image class="card-bg" fit="contain" :src="require('@/assets/card_bg.svg')" loading/>
      <!-- <img  src="@/assets/card_bg.svg" alt> -->
    </div>

    <ul class="member-info">
      <li>
        <span>余额</span>
        <strong>90.00</strong>
      </li>
      <li>
        <span>积分</span>
        <strong>26</strong>
      </li>
      <li>
        <span>券</span>
        <strong>8</strong>
      </li>
    </ul>

    <div class="home-nav">
      <router-link :to="nav.path" tag="div" v-for="(nav,index) in navList" :key="index">
        <!-- <div> -->
        <img :src="require(`@/assets/nav_${index+1}.png`)" alt>
        <span>{{nav.name}}</span>
        <!-- </div> -->
      </router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Vue from "vue";
import { Image } from "vant";
Vue.use(Image);

export default {
  name: "home",
  // components: {
  //   [Button.name]: Button
  // },
  data() {
    {
      return {
        navList: [
          { name: "优惠券", path: "/coupon" },
          { name: "最新活动", path: "/activity" },
          { name: "我的权益", path: "/equity" },
          { name: "个人信息", path: "/user" },
          { name: "消费明细", path: "/consumer" },
          { name: "分享有礼", path: "/share" },
          { name: "二维码", path: "/qrcode" }
        ]
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.home {
  overflow: hidden;
}
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

  .card-num {
    position: absolute;
    top: 15px;
    left: 20px;
    font-size: 16px;
    color: #f59a23;
    font-weight: bolder;
    z-index: 9;
  }

  .card-qr {
    position: absolute;
    bottom: -20px;
    left: 50%;
    width: 40px;
    height: 40px;
    padding: 15px;
    transform: translateX(-50%);
    background: #fff;
    border-radius: 50%;
    z-index: 9;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .card-bg {
    width: 100%;
    height: auto;
  }
}

.member-info {
  margin: 0 10%;
  display: flex;
  padding: 10px 0;
  list-style: none;
  background: #fff;

  li {
    flex: 1;
    text-align: center;
    border-right: 1px solid #f5f5f5;
    &:last-child {
      border: none;
    }

    span,
    strong {
      display: block;
    }

    span {
      font-size: 12px;
      color: #999;
    }

    strong {
      margin-top: 5px;
      font-weight: bolder;
      font-size: 18px;
    }
  }
}

.home-nav {
  margin: 20px 10%;
  overflow: hidden;
  // display: flex;

  div {
    float: left;
    margin: 10px 0;
    width: 33.3333%;
    text-align: center;
    font-size: 14px;
  }

  img {
    display: block;
    width: 25%;
    margin: 0 auto 10px;
    // height: 60px;
  }
}
</style>

