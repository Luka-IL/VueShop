<template>
  <div>
    <h2>Basket</h2>
      <BasketItem 
        v-for= "(basketItem, index) in BASKET_ITEMS"
        :key='index'
        v-bind:basketItem="basketItem"
        @deleteItem='deleteItem(index)'
        @minusQuantity='minusQuantity(index)'
        @plusQuantity='plusQuantity(index)'
      />
  </div>
</template>

<script>
import BasketItem from '@/components/BasketItem.vue'
import {mapGetters, mapActions} from 'vuex'

export default {
  name:'basket',
  computed: {
    ...mapGetters ([
      'BASKET_ITEMS'
    ]),
  },
  methods: {
    ...mapActions ([
        'DELETE_FROM_BASKET',
        'PLUS_QUANTITY',
        'MINUS_QUANTITY'
    ]),
    deleteItem(index){
      this.DELETE_FROM_BASKET(index)
    },
    plusQuantity(index){
      this.PLUS_QUANTITY(index)
    },
    minusQuantity(index){
      this.MINUS_QUANTITY(index)
    },
  },
  components: {
    BasketItem
  }
}
</script>


<style scoped lang="scss">
.collection{
  width: 50%;
}
.collection-item{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
