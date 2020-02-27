<template>
<div class="product">
  <h1>Product</h1>
  <p>{{product_id}}</p>

    <div v-for="product in listOfProducts" :key="product.id">
        
        {{product.name}}
         <img :src='product.img' alt="">
         
    </div>

  </div>
</template>


<script>
export default {
  name: 'Product',
  data () {
    return {
      product_id: this.$route.params.product_id
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
