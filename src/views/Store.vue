<template>
  <div class='store-container'>
    <div class='products_list'>
      <item
        v-for= "(product, index) in PRODUCTS"
        :key= "index"
        v-bind:product_data="product"
        @pushBasket='pushProduct'
      />
    </div>
  </div>
</template>

<script>
import item from '@/components/Item.vue'
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'store',
  data() {
    return {
     
    }
  },
  components: {
    item
  },
  computed: {
    ...mapGetters([
      'PRODUCTS'
    ])
  },
  methods: {
    ...mapActions([
      'GET_PRODUCTS_FROM_API',
      'ADD_TO_BASKET'
    ]),
    pushProduct(data){
        this.ADD_TO_BASKET(data);
    }
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API()
  }
}
</script>

<style scoped>
.store-container{
  display: flex;
  justify-content: center;
}

.store-title {
  padding:20px 10px;
  margin:0;
}

.products_list{
  width: 90%;
  display:flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 20px;
}
</style>
