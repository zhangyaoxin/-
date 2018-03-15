<template lang="html">
  <div class="">
    <!-- 公共头部 -->
    <headerItem message="创建广告"></headerItem>

    <div class="creatad_wrap">
      <!-- banner图 -->
      <div class="creat_banner_box"></div>
      <!--  -->
      <div class="creatad_center_box">
        <ul>
          <li>
            <p>广告主姓名</p>
            <input type="text" name="" value="" placeholder="请输入广告主姓名">
          </li>
          <li @click="openPicker">
            <p>播放日期</p>
            <span>请选择开始日期</span>
          </li>
          <li>
            <p>播放点位</p>
            <span>晋州市</span>
            <img src="../../../assets/images/ad/creatad/down.png" alt="">
          </li>
        </ul>
      </div>



      <!-- 选择时间插件 -->
      <mt-datetime-picker
        v-model="pickerVisible"
        type="date"
        year-format="{value} 年"
        month-format="{value} 月"
        date-format="{value} 日">
      </mt-datetime-picker>

    </div>


  </div>

</template>

<script>
import headerItem from '../../common/headItem' //公共头部
import { DatetimePicker } from 'mint-ui';
export default {
  components: {
    headerItem,
    DatetimePicker
  },
  data(){
    return {
      pickerVisible: ''
    }
  },
  methods: {
    checkTime: function(){

    },
    openPicker() {
        this.$refs.picker.open();
      }
  }
}
</script>

<style lang="css">
.creatad_wrap{
  width: 100%;
}
.creat_banner_box{
  width: 100%;
  height: 6rem;
  background-image: url('../../../assets/images/ad/creatad/adbanner.png');
  background-size: 100% 100%;
  margin-top: -1.2rem;
}
.creatad_center_box{
  width: 100%;
  border-radius: 0.5rem 0.5rem 0 0;
  margin-top: -2rem;
  background-color: #fff;
  padding: 0.01rem;
}
.creatad_center_box ul{
  width: 90%;
  margin: 0 auto;
  margin-top: 0.7rem;
}
.creatad_center_box ul li{
  width: 100%;
  height: 1.7rem;
  margin: 0.2rem auto;
  border-bottom: 0.05rem solid #f3f3f3;
  text-align: left;
  line-height: 0.8rem;
  font-size: 0.4rem;
  cursor: pointer;
}
.creatad_center_box ul li p{
  font-weight: bold;
  color: #328ef2;
}
.creatad_center_box ul li input{
  border: none;
  width: 80%;
  height: 0.7rem;
}
.creatad_center_box ul li img{
  width: 0.4rem;
  height: 0.2rem;
  float: right;
  margin-top: 0.3rem;
  cursor: pointer;
}
.creatad_center_box ul li span{
  color: gray;
}










</style>
