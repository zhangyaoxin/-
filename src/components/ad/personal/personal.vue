<template lang="html">
  <div class="">
    <!-- 公共头部 -->
    <headerItem message="个人中心"></headerItem>

    <div class="personal_wrap">
      <!-- 导航 -->
      <div class="personal_nav_wrap">
        <router-link :to="{ name: '', params: {} }">
          <img style="width:0.35rem;" src="../../../assets/images/ad/personal/mine.png" alt="">
          <span>个人中心</span>
        </router-link>
        <router-link to="/recharge">
          <img src="../../../assets/images/ad/personal/myad.png" alt="">
          <span>我的广告</span>
        </router-link>
      </div>
      <router-view></router-view>

      <!-- 头像部分 -->
      <div class="person_header_wrap">
        <div class="header_box">

        </div>
        <p>北极星小姐姐</p>
      </div>

      <!-- 广告 钱包部分 -->
      <div class="mine_wrap">
        <ul>
          <li @click="lookAd()">
            <img src="../../../assets/images/ad/personal/ad.png" alt="">
            <p>广告</p>
            <img src="../../../assets/images/ad/personal/more.png" alt="">
          </li>
          <li @click="mineWallet()">
            <img src="../../../assets/images/ad/personal/wallet.png" alt="">
            <p>我的钱包</p>
            <img src="../../../assets/images/ad/personal/more.png" alt="">
          </li>
        </ul>
      </div>

    </div>

  </div>

</template>

<script>
import headerItem from '../../common/headItem' //公共头部
export default {
  components: {
    headerItem
  },
  methods:{
    // 查看广告
    lookAd: function(){
      this.$router.push({
        path: '/admsg'
      })
    },
    // 我的钱包
    mineWallet: function(){
      this.$router.push({
        path: '/mineWallet'
      })
    }

  }
}
</script>

<style lang="css" scoped>
.personal_wrap{
  width: 100%;
  position: fixed;
  left: 0;
  top: 1rem;
  bottom: 0;
  background-color: #fff;
}
.personal_nav_wrap{
  width: 100%;
  height: 1.3rem;
  border-top: 0.01rem solid #f3f3f3;
  position: fixed;
  bottom: 0;
}
.personal_nav_wrap a{
  display: block;
  width: 50%;
  height: 100%;
  float: left;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  color: gray;
  cursor: pointer;
  text-decoration: none;
}
.personal_nav_wrap a img{
  width: 0.5rem;
  height: 0.45rem;
  margin-top: 0.15rem;
}
.personal_nav_wrap span{
  font-size: 0.35rem;
}
.person_header_wrap{
  width: 100%;
  height: 5.4rem;
  background-image: url('../../../assets/images/ad/personal/personalBJ.png');
  background-size: 100%;
  padding: 0.01rem;
}
.person_header_wrap p{
  font-size: 0.38rem;
  color: #fff;
  padding-top: 0.3rem;
}
.person_header_wrap .header_box{
  width: 2rem;
  height: 2rem;
  background-color: pink;
  margin: 0 auto;
  margin-top: 10%;
  border-radius: 1.2rem;
  background-color: #fff;
}
.mine_wrap{
  width: 100%;
  height: 5rem;
  margin-top: -1rem;
  background-color: #fff;
  border-radius: 0.6rem 0.6rem 0 0 ;
  padding: 0.01rem;
}
.mine_wrap ul{
  width: 95%;
  margin: 0 auto;
  margin-top: 1rem;
}
.mine_wrap li{
  width: 95%;
  height: 1.4rem;
  margin:0 auto;
  border-bottom: 0.01rem solid #f3f3f3;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
}
.mine_wrap li p{
  width: 85%;
  text-align: left;
  font-size: 0.38rem;
}
.mine_wrap li img{
  width: 0.5rem;
  height: 0.5rem;
}
.mine_wrap li img:nth-of-type(2){
  width: 0.2rem;
  height: 0.3rem;
  cursor: pointer;
}












</style>
