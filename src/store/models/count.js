const state = {
    count:0
};
const getters = {
    count:state=> ++state.count
};
const mutations = {
    incrementCount:state => state.count++,
     decrementCount:(state,m) => state.count -= m.amount
};
const actions = {
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
      }
};

export default {
    state,getters,mutations,actions
}