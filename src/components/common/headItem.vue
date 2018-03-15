<template lang="html">
  <div class="headItem">
    <header class="evaluate-header">
      <img @click="goback()" src="../../assets/images/common/goback.png" alt="">
      <span>{{message}}</span>
    </header>

  </div>

</template>

<script>
export default {
  props: ['message'],
  methods: {
    goback: function(){
       this.$router.go(-1);

    }
  }
}
</script>

<style lang="css">
.evaluate-header{
  width: 100%;
  height: 1rem;
  background-color: #fff;
  border-bottom: 0.01rem solid #f3f3f3;
}
.evaluate-header img{
  float: left;
  width: 0.2rem;
  height: 0.3rem;
  margin-top: 0.4rem;
  margin-left: 0.6rem;
  cursor: pointer;
}
.evaluate-header span{
  font-size: 0.4rem;
  font-weight: bold;
  line-height: 1rem;
  margin-left: -0.5rem;
}
</style>
