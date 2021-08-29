import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../pages/Home';
import Feeds from '../pages/Feeds';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/feeds',
    component: Feeds
  }
];

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if(to.hash){
      return {
        selector: to.hash
      };
    }
    if(savedPosition){
      return savedPosition;
    }
    return {x:0, y:0};
}
})

export default router;