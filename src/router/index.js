import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/mainPage/Hello'
import orderPassenger from '@/components/mainPage/orderPassenger'
import orderOwner from '@/components/mainPage/orderOwner'
import drivePassenger from '@/components/mainPage/drivePassenger'
import driveOwner from '@/components/mainPage/driveOwner'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
      redirect: '/orderPassenger',
      children:[
      	{ path:'/orderPassenger',component: orderPassenger,},
      	{path:'/orderOwner',component: orderOwner},
      	{path:'/drivePassenger',component: drivePassenger},
      	{path:'/driveOwner',component: driveOwner},
      ]
    }
  ]
})
