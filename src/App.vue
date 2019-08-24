<template>
  <div id="app">
    <p>App.vue : {{count}}</p>
    <p>返回completed=true的所有数据: {{completedTodos}}</p>
    <p>completed=true个数: {{completedTodosCount}}</p>
    <p>getTodosById(1)</p>
    <Count/>
  </div>
</template>

<script>
import Count from './components/Count';
import {mapState,mapGetters} from 'vuex';
export default {
  name: 'app',
  components: {
    Count
  },
  computed:mapGetters(["count","completedTodos","completedTodosCount","getTodosById"])
  // computed:{
  //   count(){
  //      return this.$store.getters.count;
  //   },
  //   completedTodos(){
  //     return this.$store.getters.completedTodos;
  //   },
  //   completedTodosCount(){
  //     return this.$store.getters.completedTodosCount;
  //   },
  //    getTodosById(){
  //     return this.$store.getters.getTodosById;
  //    }

  // } 
  
}
</script>

<style>

</style>
