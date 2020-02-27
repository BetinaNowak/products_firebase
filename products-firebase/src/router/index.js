import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Products from '@/components/Products'
import Product from '@/components/Product'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/products',
      name: 'Products',
      component: Products
    },
    {
      path: '/product/:product_id',
      name: 'Product',
      component: Product
    }
  ]
})
