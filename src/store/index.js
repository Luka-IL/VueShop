import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      products: [],
      basket: []
  },
  mutations: {
    SET_PRODUCTS_TO_STATE: (state, products) => {
    state.products = products
    },
    ADD_ITEM: (stage, product) => {
      let flag = true;
      if (stage.basket.length){
      for (let i = 0; i < stage.basket.length; i++){
        if (stage.basket[i].article === product.article){
            flag = false
          }
        }
        if (flag === false) {
          product.quantity++
        }
        if (flag === true) {
          stage.basket.push(product);
        }
      } else {
        stage.basket.push(product)
      }
    }
  },
  actions: {
    GET_PRODUCTS_FROM_API({commit}) {
      return axios('http://localhost:3000/products', {
        method: "GET"
      })
      .then((products) => {
        commit('SET_PRODUCTS_TO_STATE', products.data);
        return products;
      })
    },
    ADD_TO_BASKET({commit}, product) {
      commit('ADD_ITEM', product);
    }
  },
  getters: {
    PRODUCTS(state){
      return state.products;
    },
    BASKET_ITEMS(stage){
      return stage.basket
    }
  }
})