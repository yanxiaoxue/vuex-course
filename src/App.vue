<template>
  <div id="app">
    <!-- mutations -->
    <button @click="decrementCountAsync({amount:2})">-</button>
    <span>{{count}}</span>
    <button @click="incrementCountAsync">+</button>


    <hr>
    <!-- 假数据 -->
    <p>{{completedTodos}}</p>
    <button @click="fetchDataAsync">FetchDate</button>
    
    <Count/>
  </div>
</template>

<script>
import Count from './components/Count';
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex';
export default {
  name: 'app',
  components: {
    Count
  },
  computed:mapGetters(["count","completedTodos","completedTodosCount","getTodosById"]),
  // methods:mapMutations(["incrementCount","decrementCount"])
  // methods:{
  //   incrementCount(){
  //     //触发actions  dispatch 分发
  //     this.$store.dispatch("incrementCountAsync")
  //   },
  //   decrementCount(n){
  //     //触发actions  dispatch 分发
  //     this.$store.dispatch("decrementCountAsync",n)
  //   },
  //   fetchData(){
  //     this.$store.dispatch("fetchDataAsync")
  //   }
  // },
  methods:mapActions(["incrementCountAsync","decrementCountAsync","fetchDataAsync"])
  
  
}
</script>

<style>

</style>
