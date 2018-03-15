<template lang="html">
  <div class="siteOwnerMsg">
    <!-- 公共头部  -->
    <headerItem message="农广传媒"></headerItem>
    <alertBomb :alertMsg='alertMessage' v-show="alertBomb"></alertBomb>
    <!-- 点位信息 -->
    <div class="site_banner">
      <p>超市名称</p>
      <p>人人乐超市</p>
      <p>晋州市-小礁镇-田村</p>
    </div>
    <!-- 租金记录 -->
    <div class="site_money_wrap">
      <div class="rent_history" @click="openCenter">  <!-- 租金记录 -->
        <img src="../../assets/images/site/siteleft.png" alt="">
        <p>租金记录(元)</p>
        <span>378</span>
      </div>
      <div class="ad_Commission" @click="adCommission"> <!-- 广告分佣 -->
        <img src="../../assets/images/site/siteleft.png" alt="">
        <p>广告分佣(元)</p>
        <span>567</span>
      </div>
    </div>
    <!-- 点位租金具体信息 -->
    <ul class="site_rent_msg" v-loading="loading">
      <li>
        <div class="site_rent_msg_left">
          <p>农广传媒点位租金</p>
          <span>2008-10-10</span>
          <span>08:08:08</span>
        </div>
        <p class="reduce_rent_money">+2.00</p>
      </li>
      <li>
        <div class="site_rent_msg_left">
          <p>农广传媒点位租金</p>
          <span>2008-10-10</span>
          <span>08:08:08</span>
        </div>
        <p class="add_rent_money">+2.00</p>
      </li>
      <li>
        <div class="site_rent_msg_left">
          <p>农广传媒点位租金</p>
          <span>2008-10-10</span>
          <span>08:08:08</span>
        </div>
        <p class="add_rent_money">+2.00</p>
      </li>
    </ul>

  </div>

</template>

<script>
import headerItem from '../common/headItem'  //公共頭部
import alertBomb from '../common/alertBomb'  //公共彈框
import { Loading } from 'element-ui';
 export default {
  components: {
    headerItem,
    alertBomb
  },
  data(){
    return {
      alertMessage : '這是提示框！',
      alertBomb: true,
      loading: false

    }
  },
  methods: {
    // 跳转查看广告分佣
    adCommission: function(){
      this.$router.push({
        path: '/ad'
      })
    },
    // 初始化租金信息
    __getSiteMoney(){
      // 租金信息
      console.log(this.utils.BaseURL); //主域名
      // this.utils.BaseURL + '/wxpub/siter_controller/transferRecord.html'
      this.loading = true;
      this.axios.get('').then((response) => {
        console.log(response);
        this.loading = false;
        setTimeout(()=> {
          this.alertBomb = false;
        },3000);
        if (response.code == 200) {

        }

      })
      .catch((res) => {
        console.log(res);
      })
    },
    openCenter(){
        this.$message({
          message: '弹框',
          center: true
        });
      }
  },
  watch: {},
  filters: {},
  computed: {},
  beforeCreate() {}, // 创建前
  created () {  // 创建完毕
    this.__getSiteMoney();  //初始化租金信息


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
.site_banner{
  width: 100%;
  height: 4rem;
  background-image: url('../../assets/images/site/sitebj.png');
  background-size: 100%;
}
.site_banner p{
  font-size: 0.3rem;
  line-height: 1.1rem;
  color: #fff;
}
.site_banner p:nth-of-type(2){
  font-size: 0.8rem;
}
.site_money_wrap{
  width: 90%;
  height: 3.2rem;
  margin: 0 auto;
  margin-top: -0.8rem;
  border-radius: 0.2rem;
  box-shadow: 0.1rem 0.1rem 0.1rem #edf1f6;
  background-color: #fff;
}
.site_money_wrap div{
  width: 50%;
  height: 100%;
  float: left;
}
.site_money_wrap div img{
  width: 1.5rem;
  height: 1.5rem;
  margin-top: 0.2rem;
}
.site_money_wrap div p{
  color: #999999;
  font-size: 0.4rem;
  line-height: 0.2rem;
}
.site_money_wrap div span{
  color: #666666;
  font-size: 0.45rem;
  line-height: 1.2rem;
}
.site_rent_msg{
  width: 100%;
}
.site_rent_msg li{
  width: 90%;
  height: 2rem;
  margin: 0 auto;
  border-bottom: 0.01rem solid #eaeaea;
  margin-top: 0.02rem;
}
.site_rent_msg_left{
  width: 70%;
  height: 100%;
  text-align: left;
  padding-left: 0.5rem;
  line-height: 0;
  float: left;
  font-size: 0.4rem;
}
.site_rent_msg_left p{
  line-height: 0.8rem;
  display: inline-block;
  width: 100%;
  height: 0.8rem;
  margin-bottom: 0.3rem;
  margin-top: 0.3rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space:nowrap;
}
.site_rent_msg_left span{
  color: #999999;
  padding-right: 0.2rem;
}
.add_rent_money{
  color: #2098ef;
  font-size: 0.5rem;
  line-height: 1.5rem;
}
.reduce_rent_money{
  color: gray;
  font-size: 0.5rem;
  line-height: 1.5rem;
}

















</style>
