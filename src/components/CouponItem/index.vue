<template>
  <div>
    <div :class="['coupon-item', disabled ? 'disabled' : '']">
      <div class="coupon-left">
        <span class="price">¥100</span>
        <span>满300元可用</span>
      </div>
      <div class="coupon-con">
        <span class="title">中秋100元代金券</span>
        <span>适用机构：全部机构</span>
        <span>有效期至：2017-08-01</span>
      </div>
      <div class="coupon-right">
        <span class="count">
          <strong>3</strong> 张
        </span>
        <span class="tips" @click="toggleShow">详细说明 ></span>
      </div>
    </div>
    <div class="coupon-tips" v-show="show">
      <p>有效期：2018-01-01到2019-01-10</p>
      <p>可用星期：周一 周二 周三 周四 周五 周六 周日</p>
      <p>可用机构：全部机构</p>
      <p>允许赠送：不允许</p>
      <p>使用说明：test</p>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Popup } from "vant";
Vue.use(Popup);
export default {
  name: "CouponItem",
  props: {
    disabled: {
      type: Boolean,
      default: () => false
    }
  },
  data() {
    return {
      show: false,
    };
  },
  methods: {
    toggleShow() {
      this.show = !this.show;
    }
  }
};
</script>
<style lang="scss" scoped>
.coupon-item {
  position: relative;
  display: flex;
  margin: 10px 5% 0;
  height: 90px;
  background: #fff;
  border-radius: 6px;
  overflow: hidden;

  &.disabled {
    .title,
    .count {
      color: #999;
    }
    .coupon-left {
      background-color: #999;
    }
  }
}

.coupon-left {
  width: 90px;
  padding-top: 25px;
  background-color: #8c6222;
  color: #fff;
  text-align: center;

  &:before {
    content: "";
    position: absolute;
    left: -5px;
    top: 50%;
    width: 10px;
    height: 10px;
    transform: translateY(-50%);
    background: #f5f5f5;
    border-radius: 50%;
  }

  span {
    display: block;
    font-size: 12px;
  }

  .price {
    font-size: 20px;
    font-weight: bolder;
  }
}

.coupon-con {
  flex: 1;
  display: flex;
  padding: 10px 0 10px 10px;
  flex-direction: column;
  justify-content: space-between;
  font-size: 12px;
  text-align: left;
  overflow: hidden;

  span {
    display: block;
    color: #999;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .title {
    font-size: 14px;
    color: #666;
  }
}

.coupon-right {
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 12px;
  color: #999;
  padding-right: 10px;
  text-align: center;

  .count {
    color: #8c6222;

    strong {
      font-size: 18px;
    }
  }
}

.coupon-tips{
  background-color: #fff;
  margin:0 5%;
  padding: 10px;
  height: auto;
  font-size: 12px;
  text-align: left;
  color: #999;
  line-height: 20px;
  border-top: 1px solid #f5f5f5;
}
</style>