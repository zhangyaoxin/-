<template lang="html">
  <div class="">
    <headerItem message="我的钱包"></headerItem>

    <!-- 卡内余额 -->
    <div class="card_box">
      <div class="card_box_left">
        <span>余额(元)</span>
        <p>8.80</p>
        <span>累计收益</span>
        <span>18.88</span>
      </div>
      <h1 class="money_btn" @click="showAlert()">提现</h1>
    </div>

    <!-- 提现弹框 -->
    <div class="money_alert_wrap" v-show="isAlert">
      <div class="money_alert_content">
        <img @click="closeAlert()" class="closebtn" src="../../../assets/images/site/close.png" alt="">
        <img class="tixian" src="../../../assets/images/site/tixian.png" alt="">
        <p>你可以前往微信钱包查看余额</p>
      </div>
    </div>


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
      isAlert: true
    }
  },
  methods: {
    // 提現成功後顯示彈框
    showAlert : function (){
      this.axios.get('').then((response) => {
        console.log(response);
        this.isAlert = true;
        this.titleMsg = '收入明细';
        if (response.code == 200) {
          // this.isAlert = true;
          // this.titleMsg = '收入明细';
        }
      })
      .catch((err) => {
        console.log(err);
      })

    },
    closeAlert: function(){
      this.isAlert = false;
    }
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
.card_box{
  width: 100%;
  height: 5rem;
  background-image: url('../../../assets/images/site/sitecard.png');
  background-size: 100%;
  text-align: left;
}
.card_box_left{
  width: 40%;
  height: 100%;
  float: left;
}
.card_box p{
  display: block;
  margin-top: 0.3rem;
  margin-bottom: 0;
  font-size: 1.1rem;
  padding-left: 0.7rem;
  color: #4185f4;
  /* line-height: 1.5rem; */
}
.card_box span{
  display: block;
  margin-top: 0.9rem;
  font-size: 0.35rem;
  padding-left: 0.7rem;
  color: #999999;
}
.card_box span:nth-of-type(2){
  margin-top: 0.1rem;
  float: left;
}
.card_box span:nth-of-type(3){
  color: black;
  margin-left: 1.7rem;
  margin-top: 0.15rem;
}
.card_box h1{
  display: inline-block;
  width: 1.5rem;
  height: 0.5rem;
  line-height: 0.55rem;
  font-size: 0.3rem;
  background-color: #3e87f3;
  color: #fff;
  text-align: center;
  border-radius: 0.3rem;
  float: right;
  margin-right: 0.7rem;
  margin-top: 3.5rem;
  cursor: pointer;
}
/* 弹窗 */
.money_alert_wrap{
  width:100%;
  height:100%;
  position: absolute;
  bottom:0;
  left: 0;
  background-color: rgba(0,0,0,.3);
}
.money_alert_content{
  width: 80%;
  height: 4rem;
  margin-left: 10%;
  margin-top: 60%;
  border-radius: 0.4rem;
  background-color: #fff;
}
.money_alert_content .closebtn{
  width: 0.5rem;
  height: 0.5rem;
  margin-right: 0.3rem;
  margin-top: 0.3rem;
  cursor: pointer;
}
.money_alert_content .tixian{
  width: 6rem;
  height: 2rem;
  margin-top: 0.7rem;
  margin-left: 1rem;
  float: left;
}
.money_alert_content p{
  display: block;
  width: 100%;
  float: left;
  font-size: 0.4rem;
  text-align: center;
  color: #666666;
}
.site_rent_msg{
  width: 100%;
}
</style>
