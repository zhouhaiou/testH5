import Vue from 'vue';
import Router from 'vue-router';
import routes from './routers';
import { getToken } from '@/utils/token'

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes,
});

const APPLY_PATH = '/apply'
// no redirect whitelist
const whiteList = [
  APPLY_PATH
]

/**
 * 路由拦截
 * 权限验证
 */
router.beforeEach((to, from, next) => {

  if (!getToken()) {
    if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
      next()
    } else {
      next(`${APPLY_PATH}?redirect=${to.path}`) // 否则全部重定向到登录页
      // next(...)重定向不会触发router.afterEach钩子，需要手动hack一下
    }
    return
  }

  // 已经申请了，再访问申请页，跳转到首页
  if (to.path === APPLY_PATH) {
    next({ path: '/' })
    return
  }

  /*路由发生改变修改页面title */
  document.title = to.meta.title

  next()

})

export default router;