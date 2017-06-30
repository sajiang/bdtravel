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
    { 
      path:'/driver_authentication/step1',
      name:'driverAuthenticationStep1',
      component: resolve => require(['@/components/driverAuthentication/step1'], resolve),
    },
    { 
      path:'/driver_authentication/step2',
      name:'driverAuthenticationStep2',
      component: resolve => require(['@/components/driverAuthentication/step2'], resolve),
    },
    { 
      path:'/driver_authentication/preview',
      name:'driverAuthenticationPreview',
      component: resolve => require(['@/components/driverAuthentication/preview'], resolve),
    },
    { path:'/order_car',
      name:'orderCar',
      component: resolve => require(['@/components/orderCar'], resolve),
    },
    { path:'/rent_car',
      name:'rentCar',
      component: resolve => require(['@/components/rentCar'], resolve),
    },
    { path:'/rent_car/sure_order',
      name:'sureOrder',
      component: resolve => require(['@/components/sureOrder'], resolve),
    },
    {
      path:'/personal_center/my_order/my_order_list',
      name:'orderList',
      component: resolve => require(['@/components/personalCenter/myOrder/myOrderList'], resolve),
    },
    { 
      path:'/personal_center/my_order/order_detail',
      name:'orderDetail',
      component: resolve => require(['@/components/personalCenter/myOrder/orderDetail'], resolve),
    },
    { 
      path:'/personal_center/my_order/driver_info',
      name:'driverInfo',
      component: resolve => require(['@/components/personalCenter/myOrder/driverInfo'], resolve),
    },
    { 
      path:'/personal_center/account/account_type',
      name:'accountType',
      component: resolve => require(['@/components/personalCenter/account/accountType'], resolve),
    },
    { 
      path:'/personal_center/account/recharge',
      name:'recharge',
      component: resolve => require(['@/components/personalCenter/account/recharge'], resolve),
    },
    { 
      path:'/personal_center/account/left_money',
      name:'leftMoney',
      component: resolve => require(['@/components/personalCenter/account/leftMoney'], resolve),
    },
    { 
      path:'/personal_center/account/voucher',
      name:'voucher',
      component: resolve => require(['@/components/personalCenter/account/voucher'], resolve),
    },
  ]
})
