<template>
  <!-- 优惠券 -->
  <div>
    <van-tabs v-model="active" background="none" color="#8c6222" title-active-color="#8c6222">
      <van-tab title="可用券">
        <coupon-item></coupon-item>
        <coupon-item></coupon-item>
      </van-tab>
      <van-tab title="已用/过期">
        <coupon-item :disabled="true"></coupon-item>
        <coupon-item :disabled="true"></coupon-item>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Vue from "vue";
import { Tab, Tabs } from "vant";
import CouponItem from "@/components/CouponItem";
Vue.use(Tab).use(Tabs);
export default {
  components: {
    CouponItem
  },
  data() {
    return {
      active: 0
    };
  }
};
</script>
