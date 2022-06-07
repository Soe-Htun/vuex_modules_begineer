<template>
  <div id="product-list-one">
    <h2>Product List One </h2>

    <ul>
      <li v-for="product in saleProducts" :key="product.name">
        <span class="name"> {{ product.name }} </span>
        <span class="price"> £ {{ product.price }} </span>
      </li>
    </ul>

    <button v-on:click="reducePrice(4)" >Reduce Price</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';
export default {
  // this is for gettind data from another component binding data
  // props: ['products'],
  computed: {
    products() {
      return this.$store.getters.products;
      // return this.$store.state.common.products
    },

    // saleProducts() {
    //   return this.$store.getters.saleProducts;
    // },
    // mapGetters is the same as saleProducts
    ...mapGetters([
      'saleProducts'
    ]),
  },
 data() {
   return {
     
   }
 },
 methods: {
   
    // reducePrice(amount) {
    //   //  commit for mutations ->
    //     // this.$store.commit('REDUCE_PRICE', amount);
    //   this.$store.dispatch('reducePrice', amount);
    // },

    //mapAction is the same as reducePrice
    ...mapActions([
      'reducePrice'
    ])
  }, 
}
</script>

<style>
#product-list-one {
  background-color: #FFF8B1;
  box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
  margin-bottom: 30px;
  padding: 10px 20px;
}

#product-list-one ul {
  padding: 0px;
  list-style-type: none;
}

#product-list-one li {
  display: inline-block;
  margin: 10px 10px 0px 0px;
  padding: 20px;
  background: rgba(255,255,255,0.7);
}
#product-list-one li .price {
  font-weight: bold;
  color: #E8800C;
}

</style>