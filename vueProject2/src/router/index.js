import Vue from 'vue'
import Router from 'vue-router'
// import shoppingMall from '@/components/shoppingMall'
import Pos from '@/components/common/page/Pos'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Pos',
      component: Pos
    }
  ]
})
