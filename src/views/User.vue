<template>
  <div class="user">
    <van-cell-group>
      <van-cell title="会员编号" title-class="title" value-class="value" value="87799785"/>
      <van-cell title="会员等级" title-class="title" value-class="value" value="钻石卡"/>
      <van-cell title="实体卡号" title-class="title" value-class="value" value="88762"/>
      <van-cell title="开卡机构" title-class="title" value-class="value" value="鹭岛店"/>
      <van-cell title="开卡时间" title-class="title" value-class="value" value="2019-12-30"/>
    </van-cell-group>

    <van-cell-group style="margin: 20px 0">
      <van-cell title="姓名" is-link value="张飞" />
      <van-cell title="性别" is-link value="男" />
      <van-cell title="生日" is-link value="2018-12-30" />
      <van-cell title="手机号" is-link value="13812345678" />
    </van-cell-group>
  </div>
</template>

<script>
import Vue from "vue";
import { Cell, CellGroup } from "vant";
Vue.use(Cell).use(CellGroup);
export default {};
</script>

<style lang="scss" scoped>
.user{
  padding: 10px;
}

.title{
  color: #999;
}

.value{
  color: #8c6222;
  font-weight: bolder;
}
</style>
