import Vue from 'vue'
import Router from 'vue-router'
import Title from '@/views/01-Title.vue'
import What from '@/views/02-What.vue';
import Examples from '@/views/03-Examples.vue';
import Definition from '@/views/04-Definition.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/01',
      name: 'title',
      component: Title
    },
    {
      path: '/02',
      name: 'what',
      component: What
    },
    {
      path: '/03',
      name: 'examples',
      component: Examples
    },
    {
      path: '/04',
      name: 'definition',
      component: Definition
    }
  ]
})
