<template>
  <div id="app">
  <!-- this v-bind is for bind date into another component -->
    <!-- <product-list-one v-bind:products="products" ></product-list-one>
    <product-list-two v-bind:products="products" ></product-list-two> -->
    <product-list-one v-bind:products="products" ></product-list-one>
    <product-list-two v-bind:products="products" ></product-list-two>
  </div>
</template>

<script>
import ProductListOne from './components/ProductListOne.vue';
import ProductListTwo from './components/ProductListTwo.vue';

export default {
  components: {
    'product-list-one' : ProductListOne,
    'product-list-two' : ProductListTwo
  },
 data() {
   return {
     products: [
       { name: 'Banana Skin', price: 20 },
       { name: 'Shiny Star', price:40 },
       { name: 'Green Sheels', price: 60 },
       { name: 'Red Sheels', price: 80 }
     ]
   }
 }, 
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
