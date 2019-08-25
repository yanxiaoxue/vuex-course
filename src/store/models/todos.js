const state = {
    todos:[
        {id:1,title:"todo item 1",completed:false},
        {id:2,title:"todo item 2",completed:true},
        {id:3,title:"todo item 3",completed:true},
      ]
};
const getters = {
    completedTodos:state => state.todos.filter(todo => todo.completed),
      
      completedTodosCount:(state,getters) => getters.completedTodos.length,
      
      getTodosById:state => id => state.todos.find(todo => todo.id == id)
};
const mutations = {
    setTodos:(state,todos) => state.todos = todos
};
const actions = {
    async fetchDataAsync(context){
        //  await在异步函数使用 修饰请求的东西 数据请求完了返回给response ，才会打印出来
         const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
        //  console.log(response);
        context.commit("setTodos",response.data)
       }
};

export default {
    state,getters,mutations,actions
}