<template>
  <div class="index">
    <h1>Products</h1>

    <div class="wrapper">
    <li v-for="product in listOfProducts" :key="product.id">
        <router-link :to="{name:'Product', params:{product_id:product.id}}">
        {{product.name}}
         <img :src='product.img' alt="">
         </router-link>
    </li>
    </div>
   

  </div>
</template>

<script>
export default {
  name: 'Products',
  data () {
    return {
        product_id: this.$route.params.product_id,
      listOfProducts: [
          {
              id: 1, 
              name: "Shoe 1",
              img: "http://betinanowak.dk/products-firebase-img/1.jpg",
              price: 123,
              available: true,
              Tags: ["Shoe", "Adidas", "Grey", "Purple"]
          },
          {
              id: 2,
              name: "Shoe 2",
              img: "http://betinanowak.dk/products-firebase-img/2.jpg",
              price: 234,
              available: true,
              Tags: ["Shoe", "Adidas", "Grey", "Green"]
          },
          {
              id: 3,
              name: "Shoe 3",
              img: "http://betinanowak.dk/products-firebase-img/3.jpg",
              price: 234,
              available: true,
              Tags: ["Shoe", "Adidas", "White"]
          },
          {
              id: 4,
              name: "Shoe 4",
              img: "http://betinanowak.dk/products-firebase-img/4.jpg",
              price: 234,
              available: true,
              Tags: ["Shoe", "Adidas", "Dark grey"]
          },
          {
              id: 5,
              name: "Shoe 5",
              img: "http://betinanowak.dk/products-firebase-img/5.jpg",
              price: 123,
              available: false,
              Tags: ["Shoe", "Adidas", "Light grey", "White"]
          },
          {
              id: 6,
              name: "Shoe 6",
              img: "http://betinanowak.dk/products-firebase-img/6.jpg",
              price: 123,
              available: true,
              Tags: ["Shoe", "Adidas", "Black", "Red", "Blue"]
          },
          {
              id: 7,
              name: "Shoe 7",
              img: "http://betinanowak.dk/products-firebase-img/7.jpg",
              price: 234,
              available: false,
              Tags: ["Shoe", "Adidas", "Dark grey", "Red"]
          },
          



      ]
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

img {
    height: 100px;
}

.wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-auto-flow: column;
}

</style>
