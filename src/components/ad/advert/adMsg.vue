<template lang="html">
  <div class="">
    <!-- 公共头部 -->
    <headerItem message="广告"></headerItem>
    <!-- 有广告 -->
    <div class="hasAd_wrap" v-if='hasAdMsg'>
      <div class="ad_msg_wrap">
        <div class="ad_msg_top">
          <p>查看详情</p>
          <img src="../../../assets/images/ad/adMsg/checkMore.png" alt="">
        </div>
        <div class="ad_msg_center">
          <div class="ad_msg_title">
            <p>活动编号：</p>
            <span>2017888876666</span>
          </div>
          <div class="ad_msg_title">
            <p>开始时间：</p>
            <span>2017-12-01</span>
          </div>
        </div>

      </div>
      <!-- 添加广告 -->
      <div class="add_ad" @click="addAd()">添加广告</div>

    </div>

    <!-- 无广告 -->
    <div class="noAd_wrap" v-else="hasAdMsg">
      <img src="../../../assets/images/ad/adMsg/kong.png" alt="">
      <!-- 创建广告 -->
      <div class="creat_ad" @click="creatAd()">创建广告</div>
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
      hasAdMsg: false //判断是否有广告
    }
  },
  methods: {
    // 无广告时创建广告
    creatAd: function(){
      this.$router.push({
        path: 'creatad'
      })
    },
    // 有广告时添加广告
    addAd: function(){
      this.$router.push({
        path: ''
      })
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
.hasAd_wrap{
  width: 100%;
  height: 100%;
}
.ad_msg_wrap{
  width: 95%;
  height: 3.8rem;
  margin: 0.2rem auto;
  background-image: url('../../../assets/images/ad/adMsg/adMsgBj.png');
  background-size: 100% 100%;
  padding:0.01rem;
  cursor: pointer;
}
.ad_msg_top{
  width: 90%;
  height: 0.8rem;
  margin: 0 auto;
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.ad_msg_top p{
  line-height: 1rem;
  font-size: 0.3rem;
  color: #999999;
}
.ad_msg_top img{
  width: 0.28rem;
  height: 0.28rem;
  margin-left: 0.15rem;
  margin-right: 0.3rem;
}
.ad_msg_center{
  width: 90%;
  /* height: 1.9rem; */
  margin: 0 auto;
  margin-top: 0.2rem;

}
.ad_msg_title{
  width: 100%;
  height: 0.6rem;
  display: flex;
  align-items: center;
  font-size: 0.4rem;
  margin-bottom: 0.1rem;
}
.ad_msg_title p{
  color: #666666;
  padding-left: 0.2rem;
}
.ad_msg_title span{
  color: #4285f4;
  padding-left: 0.2rem;
}
.add_ad,.creat_ad{
  width: 40%;
  height: 1rem;
  margin:0 auto;
  border:  0.05rem solid #8eb6f8;
  border-radius: 0.5rem;
  text-align: center;
  line-height: 1rem;
  color: #8eb6f8;
  font-size: 0.4rem;
  cursor: pointer;
}
.creat_ad{
  background-color: #328ef2;
  color: #fff;
  cursor: pointer;
}
.noAd_wrap img{
  width: 5rem;
  height: 3rem;
  margin-top:25%;
  margin-bottom: 0.5rem;
}











</style>
