import Vue from 'vue';
Vue.use(Vuex);
import Vuex from 'vuex';

var cartList = JSON.parse(localStorage.getItem('cartList') || '[]');

const store = new Vuex.Store({
  state:{
    cartList:cartList,
    badge: true
  },
  mutations:{ //同步事务
    // 加入购物车
    addToCart(state, payload){
      let flag = false;
      state.cartList.some(item => {
        if(item.id == payload.id){
          item.count += payload.count;
          flag = true;
          return true
        }
      })
      if(!flag){
        state.cartList.push(payload)
      }

      localStorage.setItem('cartList', JSON.stringify(state.cartList))
    },
    // 更新购物车数据
    updateCart(state, payload){
      state.cartList.some(item => {
        if(item.id == payload.id){
          item.count = payload.num;
          return true
        }
      })
      localStorage.setItem('cartList', JSON.stringify(state.cartList))
    },
    // 删除购物车数据
    delCart(state, id){
      state.cartList.some((item, index) => {
        if(item.id == id){
          state.cartList.splice(index, 1)
          return true
        }
      })
      localStorage.setItem('cartList', JSON.stringify(state.cartList))
    },
    //购物车商品选中状态改变
    selectedChange(state, payload){
      state.cartList.some(item => {
        if(item.id === payload.id){
          item.selected = payload.value
          return true
        }
      })
      localStorage.setItem('cartList', JSON.stringify(state.cartList))
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
    // 购物车所有商品种类
    cartCount: state => state.cartList.length,
    //购物车选中的商品种类/数量/总价
    getSelectedCountAndSum: state => {
      let typeCount = 0,
          count = 0,
          sum = 0;
      state.cartList.forEach(item => {
        if(item.selected){
          typeCount++;
          count += item.count;
          sum += (item.count * item.price)
        }
      });
      return {typeCount, count, sum}
    },
    
  }
});

export default store;