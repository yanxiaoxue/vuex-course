<template>
  <div id="count">
    <div>
        <hr/>
        <h1>{{count}}</h1>
    </div>
  </div>
</template>

<script>

export default {
  name: 'count',
  components: {
    
  },
  computed:{
    // 返回的是一个属性
    count(){
        return this.$store.state.count;
    }
  }
}
</script>

<style>

</style>
