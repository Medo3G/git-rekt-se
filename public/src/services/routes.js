import VueRouter from 'vue-router';
import Reset from '../components/Client/Reset.vue';
import Home from '../components/pages/Index/home.vue';
import Checkout from '../components/pages/checkout/checkout.vue';
import clientLogin from '../components/Client/login.vue';
import confirmEmail from '../components/Client/confirmEmail.vue';
import clientSignUp from '../components/Client/signup.vue';
import loginSelect from '../components/pages/SharedLogin/loginSelect.vue';
import businessLogin from '../components/Business/login.vue';

const routes = [{
  path: '/',
  component: Home,
}, {
  path: '/service/:ser_id/book',
  component: Checkout,
}, {
  path: '/client/login',
  component: clientLogin,
}, {
  path: '/client/signup',
  component: clientSignUp,
}, {
  path: '/client/confirm/:token',
  component: confirmEmail,
}, {
  path: '/client/signup',
  component: clientSignUp,
}, {
  path: '/login',
  component: loginSelect,
}, {
  path: '/business/login',
  component: businessLogin,
},
{
  path: '/client/reset/:token',
  component: Reset,
}];

const router = new VueRouter({
  routes,
  linkActiveClass: 'is-active',
});

export default router;
