import Vue from 'vue'
import Vuex from 'vuex'
import count from './models/count'
import todos from './models/todos'


Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        count,
        todos
    }
})