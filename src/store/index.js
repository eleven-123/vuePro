import Vue from 'vue';
Vue.use(Vuex);
import Vuex from 'vuex';


const store = new Vuex.Store({
  state:{
    cartList:[],
    badge: true
  },
  mutations:{ //同步
    setCartList(state, payload){
      let list = state.cartList;

      let flag = false;
      list.some(item => {
        if(item.id == payload.id){
          item.count += payload.count;
          flag = true;
          return true
        }
      })
      if(!flag){
        list.push(payload)
      }
      state.cartList = list;
    },
    setBadge(state, payload){
      state.badge = payload
    }
  },
  actions:{  //异步逻辑
    badge({commit }){
      setTimeout(()=>{
        commit('setBadge', true)
      },100)
    }
  },
  getters:{
    cartCount: state => state.cartList.length
  }
});

export default store;