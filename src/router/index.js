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
      redirect: '/order_passenger',
      children:[
      	{path:'/order_passenger',component: orderPassenger,},
      	{path:'/order_owner',component: orderOwner},
      	{path:'/drive_passenger',component: drivePassenger},
      	{path:'/drive_owner',component: driveOwner},
      ]
    },
    { path:'/driver_authentication',
      name:'driverAuthentication',
      component: resolve => require(['@/components/driverAuthentication'], resolve),
    },
    { path:'/rent_car',
      name:'rentCar',
      component: resolve => require(['@/components/rentCar'], resolve),
    },
    
  ]
})
