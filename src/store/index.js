import Vue from "vue"; //引入vue模块
import Vuex from "vuex"; //引入vuex模块    cnpm install vuex --save
Vue.use(Vuex); //使用vuex
//导入模块
import state from "./state"
import mutations from "./mutations"
import actions from "./actions"
const store = new Vuex.Store({
    state,
    mutations,
    actions
});
// 暴露
export default store