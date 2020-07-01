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
            stage.basket[i].quantity++
          }
        }
        if (flag === true) {
          stage.basket.push(product);
          product.quantity = 1
        }
      } else {
        stage.basket.push(product)
        product.quantity = 1
      }
    },
    DELETE_ITEM: (stage, index) => {
      stage.basket.splice(index, 1)
    },
    PLUS_ONE_QUANTITY: (stage, index) => {
      stage.basket[index].quantity++
    },
    MINUS_ONE_QUANTITY: (stage, index) => {
      stage.basket[index].quantity--
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
    },
    DELETE_FROM_BASKET({commit}, index) {
      commit('DELETE_ITEM', index)
    },
    PLUS_QUANTITY({commit}, index) {
      commit('PLUS_ONE_QUANTITY', index)
    },
    MINUS_QUANTITY({commit}, index) {
      commit('MINUS_ONE_QUANTITY', index)
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