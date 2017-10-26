import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import About from '@/components/About'
import RecipeDetails from '@/components/RecipeDetails'

Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/recipe/:id',
      component: RecipeDetails,
      props: route => ({ recipeId: route.params.id })
    }
  ],
  linkActiveClass: 'is-active'
})
