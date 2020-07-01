<template>
  <div class='item'>
      <img src="" alt="">
      <h2 class='name'>{{product_data.name}}</h2>
      <p class='price'>{{product_data.price}}</p>
      <button 
      class='waves-effect waves-light btn-small blue lighten-3'
      @click='pushBasket'
      >Take</button>
  </div>
</template>

<script>
export default{
    name:'productsItem',
    props: {
        product_data: {
            type: Object
        }
    },
    methods: {
        pushBasket() {
            this.$emit('pushBasket', this.product_data)
        }
    },
}
</script>


<style scoped>
.item{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 200px;
    height: 250px;
    margin: 20px;
    padding:0;
    box-shadow: 0 0 3px 0 #000;
    background-color: rgba(17, 0, 255, 0.205);
}
</style>