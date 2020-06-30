<template>
  <div>
    <h2>Basket</h2>
      <ul class="collection">
        <li class="collection-item avatar"
            v-for= "(item, index) in BASKET_ITEMS"
            :key= "index"
            :quantity='1'
          >
          <img src="images/yuna.jpg" alt="" class="circle">
          <span class="title">{{item.name}}</span>
          <p>Price: {{item.price}}</p>
          <div class="first-content">Qua={{item.quantity}}</div>
        </li>
      </ul>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name:'basket',
  computed: {
    ...mapGetters ([
      'BASKET_ITEMS'
    ])
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
