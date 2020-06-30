<template>
  <div>
    <nav class='blue darken-3'>
      <div class="nav-wrapper">
        <a href="#" class="brand-logo left">Store</a>
        <ul id="nav-mobile" class='right'>
          <li><router-link to="/">Store</router-link></li>
          <li><router-link to="/basket">Basket</router-link></li>
        </ul>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import '~materialize-css/dist/css/materialize.min.css'
</style>
