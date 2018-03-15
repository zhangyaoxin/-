<template lang="html">
  <div class="">
    <!-- 公共头部 -->
    <headerItem message="充值详情"></headerItem>

    <!-- 内容 -->
    <div class="recharge_wrap">
      <div class="recharge_wrap_img">
        <img src="../../../assets/images/ad/recharge/chongzhi.png" alt="">
      </div>
      <div class="recharge_wrap_conent">
        <ul>
          <li>
            <p>储蓄卡</p>
            <p>工商银行   尾号2018</p>
          </li>
          <li>
            <p>充值金额</p>
            <p>￥3000.00</p>
          </li>
        </ul>
      </div>
    </div>
    <!-- 完成按钮 -->
    <div class="finishBtn">完成</div>

  </div>

</template>

<script>
import headerItem from '../../common/headItem' //公共头部
export default {
  components:{
    headerItem
  },
  data(){
    return {

    }
  },
  methods: {

  },
  watch: {},
  filters: {},
  computed: {},
  created () {

  },
  beforeMount () {}, // 挂载前
  mounted () {}, // 挂载完毕
  beforeUpdate () {}, // 更新前
  updated () {}, // 更新完毕
  beforeDestroy () {}, // 销毁前
  destroyed () {} // 销毁完毕

}
</script>

<style lang="css">
.recharge_wrap{
  width: 100%;
}
.recharge_wrap img{
  width: 2.5rem;
  height: 2rem;
  margin: 1rem auto;
}
.recharge_wrap_conent{
  width: 100%;
  height: 4rem;
}
.recharge_wrap_conent ul li{
  width: 90%;
  height: 1.5rem;
  margin: 0.2rem auto;
  border-bottom: 0.05rem solid #f3f3f3;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.4rem;
}
.recharge_wrap_conent ul li p:nth-of-type(2){
  color: #2794f0;
}
.finishBtn{
  width: 40%;
  height: 1rem;
  margin: 0 auto;
  background-color: #2794f0;
  color: #fff;
  line-height: 1rem;
  font-size: 0.38rem;
  border-radius:0.5rem;
}
</style>
