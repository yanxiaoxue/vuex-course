import Vue from 'vue'
import Vuex from 'vuex'
import { isContext } from 'vm';
import { stat } from 'fs';


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
     //属性
     count:0,
     todos:[
       {id:1,title:"todo item 1",completed:false},
       {id:2,title:"todo item 2",completed:true},
       {id:3,title:"todo item 3",completed:true},
     ]
  },
  getters:{
      //获取状态
      // count:state=> ++state.count
      count(state){
          return state.count;
      },
      // completedTodos:state => state.todos.filter(todo => todo.completed)
      completedTodos:function(state){
         return state.todos.filter(function(todo){
            return todo.completed;
         })
      },
      // completedTodosCount:(state,getters) => getters.completedTodos.length
      completedTodosCount:function(state,getters){
           return getters.completedTodos.length;
      },
      getTodosById:state => id => state.todos.find(todo => todo.id == id)
      
  },
  mutations: {
     //同步 改变状态
     incrementCount:state => state.count++,
     decrementCount:(state,m) => state.count -= m.amount,
     setTodos:(state,todos) => state.todos = todos
  },
  actions: {
     //异步 请求数据  间接调用mutations
     incrementCountAsync: ({commit}) => {
       setTimeout(()=> {
        //  context == this.$store
        //解构  
        const object = {
          name:"xi",
          age:32
        }
        const  {属性名1,属性名2} = object
        
         commit("incrementCount")
       },2000)
     },
     decrementCountAsync:(context,m) => {
       setTimeout(()=> {
        //  context == this.$store
         context.commit("decrementCount",m)
       },1000) 
     },
     async fetchDataAsync(context){
      //  await在异步函数使用 修饰请求的东西 数据请求完了返回给response ，才会打印出来
       const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
      //  console.log(response);
      context.commit("setTodos",response.data)
     }
  }
})
