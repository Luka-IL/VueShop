<template>
    <div class='basket-item'>
        <img src="" alt="">
        <div class="item-information">
            <p>Название</p>
            <p>Количество</p>
            <p>Цена</p>
            <p>{{basketItem.name}}</p>
            <p>Qua={{basketItem.quantity}}</p>
            <div class="price">
                <p>Price: {{(basketItem.price*basketItem.quantity)}}</p>
                <div class='buttons'>
                    <button @click='minusQuantity'
                    >-</button>
                    <button @click='plusQuantity'>+</button>
                </div>
            </div>
        </div>
        <button 
        class='waves-effect waves-light btn'
        @click='deleteItem'
        >
        Delete</button>
    </div>
</template>

<script>

export default {
  name:'basketItem',
  props: {
      basketItem:{
          type: Object
      }
  },
  methods: {
      deleteItem(){
          this.$emit('deleteItem')
      },
      plusQuantity(){
          this.$emit('plusQuantity')
      },
      minusQuantity(){
          this.$emit('minusQuantity')
      }

  }
}
</script>


<style scoped lang="scss">
.basket-item{
    display: grid;
    grid-template-columns: 2fr 5fr 1fr;
    align-items: center;
    width:80%;
    margin:10px 0 10px 30px ;
    padding:10px 20px;
    box-shadow: 0 0 3px 0 #26a69a;
}

.item-information{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
}

.price{
    display:flex;
}
.buttons {
    margin:auto 0 auto 10px;
    }
</style>
