
const Routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      title: '会员卡'
    },
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home'),
  },
  {
    path: '/apply',
    name: 'apply',
    meta: {
      title: '申请会员卡'
    },
    component: () => import(/* webpackChunkName: "apply" */ '@/views/Apply'),
  },
  {
    path: '/bind',
    name: 'bind',
    meta: {
      title: '绑定会员卡'
    },
    component: () => import(/* webpackChunkName: "Bind" */ '@/views/Bind'),
  },
  {
    path: '/coupon',
    name: 'coupon',
    meta: {
      title: '优惠券'
    },
    component: () => import(/* webpackChunkName: "coupon" */ '@/views/Coupon'),
  },
  {
    path: '/activity',
    name: 'activity',
    meta: {
      title: '最新活动'
    },
    component: () => import(/* webpackChunkName: "activity" */ '@/views/Activity'),
  },
  {
    path: '/equity',
    name: 'equity',
    meta: {
      title: '我的权益'
    },
    component: () => import(/* webpackChunkName: "equity" */ '@/views/Equity'),
  },
  {
    path: '/user',
    name: 'user',
    meta: {
      title: '个人信息'
    },
    component: () => import(/* webpackChunkName: "user" */ '@/views/User'),
  },
  {
    path: '/consumer',
    name: 'consumer',
    meta: {
      title: '消费明细'
    },
    component: () => import(/* webpackChunkName: "consumer" */ '@/views/Consumer'),
  },
  {
    path: '/share',
    name: 'share',
    meta: {
      title: '分享有礼'
    },
    component: () => import(/* webpackChunkName: "share" */ '@/views/Share.vue'),
  },
  {
    path: '/qrcode',
    name: 'qrcode',
    meta: {
      title: '二维码'
    },
    component: () => import(/* webpackChunkName: "qrcode" */ '@/views/QRcode'),
  },
]

export default Routes;