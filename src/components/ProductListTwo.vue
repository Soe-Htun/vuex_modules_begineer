<template>
  <div id="product-list-two">
    <h2>Product List Two </h2>

    <ul>
      <li v-for="product in saleProducts" :key="product.name">
        <span class="name"> {{ product.name }} </span>
        <span class="price"> £ {{ product.price }} </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  // props: ['products'],
  computed: {
    products() {
      return this.$store.getters.products;
    },
    saleProducts() {
      return this.$store.getters.saleProducts;
    }
    
  },

 data() {
   return {
     
   }
 }, 
}
</script>

<style>
#product-list-two {
  background-color: #D1E4FF;
  box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
  margin-bottom: 30px;
  padding: 10px 20px;
}

#product-list-two ul {
  padding: 0px;
  list-style-type: none;
}

#product-list-two li {
  margin: 10px 10px 0px 0px;
  padding: 20px;
  background: rgba(255,255,255,0.7);
}
#product-list-two .price {
  font-weight: bold;
  color: #860CE8;
  display: block;
}

</style>