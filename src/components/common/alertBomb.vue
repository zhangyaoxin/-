<template lang="html">
  <div class="alertBomb">
    <span>{{ alertMsg }}</span>


  </div>

</template>

<script>
export default {
  props: ['alertMsg'],
  data() {
    return {
      alertBomb: true
    }
  }

}
</script>

<style lang="css">
.alertBomb{
  position: absolute;
  width: 68%;
  height: 1rem;
  background-color: rgba(0,0,0,.3);
  border-radius: 0.5rem;
  top: 50%;
  left: 17%;
  font-size: 0.38rem;
  line-height: 1rem;
  color: #fff;

}

</style>
