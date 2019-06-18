<template>
  <div>
    <van-tabs v-model="active" background="none" color="#8c6222" title-active-color="#8c6222">
      <van-tab title="券明细">
        <van-cell-group>
          <van-cell title="发放100元代金券" label="2017-08-01 12：53 鹭岛店">
            <div>
              <span class="value">+2</span>张
            </div>
          </van-cell>
          <van-cell title="使用100元代金券" label="2017-08-01 12：53 鹭岛店">
            <div>
              <span class="value">+2</span>张
            </div>
          </van-cell>
        </van-cell-group>
      </van-tab>
      <van-tab title="积分明细">
        <van-cell-group>
          <van-cell title="消费" label="2017-08-01 12：53 鹭岛店">
            <div>
              <span class="value">-500</span>
              <span class="value-label">余1500</span>
            </div>
          </van-cell>
          <van-cell title="充值" label="2017-08-01 12：53 鹭岛店">
            <div>
              <span class="value">+500</span>
              <span class="value-label">余2000</span>
            </div>
          </van-cell>
        </van-cell-group>
      </van-tab>
      <van-tab title="储值明细">
        <van-cell-group>
          <van-cell title="消费" label="2017-08-01 12：53 鹭岛店">
            <div>
              <span class="value">-500</span>
              <span class="value-label">余1500</span>
            </div>
          </van-cell>
          <van-cell title="充值" label="2017-08-01 12：53 鹭岛店">
            <div>
              <span class="value">+500</span>
              <span class="value-label">余2000</span>
            </div>
          </van-cell>
        </van-cell-group>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Vue from "vue";
import { Tab, Tabs, Cell, CellGroup } from "vant";

Vue.use(Tab)
  .use(Tabs)
  .use(Cell)
  .use(CellGroup);
export default {
  data() {
    return {
      active: 0
    };
  }
};
</script>

<style lang="scss" scoped>
/deep/.van-cell-group,.van-cell {
  background-color: transparent;
}
.value {
  color: #333;
  font-size: 18px;
}

.value-label {
  display: block;
  font-size: 12px;
  color: #999;
}
</style>
