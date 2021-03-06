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
      path:'/personal_center/my_order/comment_on_driver',
      name:'commentOnDriver',
      component: resolve => require(['@/components/personalCenter/myOrder/commentOnDriver'], resolve),
    },
    { 
      path:'/personal_center/my_order/comment_on_car',
      name:'commentOnCar',
      component: resolve => require(['@/components/personalCenter/myOrder/commentOnCar'], resolve),
    },
    { 
      path:'/personal_center/my_order/make_comment_on_driver',
      name:'makeCommentOnDriver',
      component: resolve => require(['@/components/personalCenter/myOrder/makeCommentOnDriver'], resolve),
    },
    { 
      path:'/personal_center/my_order/make_comment_on_car',
      name:'makeCommentOnCar',
      component: resolve => require(['@/components/personalCenter/myOrder/makeCommentOnCar'], resolve),
    },
    { 
      path:'/personal_center/my_order/pay_to_driver',
      name:'payToDriver',
      component: resolve => require(['@/components/personalCenter/myOrder/payToDriver'], resolve),
    },
    { 
      path:'/personal_center/account/account_type',
      name:'accountType',
      component: resolve => require(['@/components/personalCenter/account/accountType'], resolve),
    },
    { 
      path:'/personal_center/account/pay/:showLeftMoney',
      name:'pay',
      component: resolve => require(['@/components/personalCenter/account/pay'], resolve),
    },
    { 
      path:'/personal_center/account/left_money',
      name:'leftMoney',
      component: resolve => require(['@/components/personalCenter/account/leftMoney'], resolve),
    },
    { 
      path:'/personal_center/account/voucher/:isSelect',
      name:'voucher',
      component: resolve => require(['@/components/personalCenter/account/voucher'], resolve),
    },
    { 
      path:'/personal_center/setting/setting_index',
      name:'settingIndex',
      component: resolve => require(['@/components/personalCenter/setting/settingIndex'], resolve),
    },
    { 
      path:'/personal_center/setting/get_verify_code',
      name:'getVerifyCode',
      component: resolve => require(['@/components/personalCenter/setting/getVerifyCode'], resolve),
    },
    { 
      path:'/personal_center/setting/change_password',
      name:'changePassword',
      component: resolve => require(['@/components/personalCenter/setting/changePassword'], resolve),
    },
    { 
      path:'/personal_center/setting/common_question_list',
      name:'commonQuestionList',
      component: resolve => require(['@/components/personalCenter/setting/commonQuestionList'], resolve),
    },
    { 
      path:'/personal_center/setting/common_question_detail/:id',
      name:'commonQuestionDetail',
      component: resolve => require(['@/components/personalCenter/setting/commonQuestionDetail'], resolve),
    },
    { 
      path:'/personal_center/setting/content/:content',
      name:'content',
      component: resolve => require(['@/components/personalCenter/setting/content'], resolve),
    },
    { 
      path:'/personal_center/setting/law_list',
      name:'lawList',
      component: resolve => require(['@/components/personalCenter/setting/lawList'], resolve),
    },
    { 
      path:'/personal_center/feedback',
      name:'feedback',
      component: resolve => require(['@/components/personalCenter/feedback/feedback'], resolve),
    }
  ]
})
