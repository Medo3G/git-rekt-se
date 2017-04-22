import VueRouter from 'vue-router';
import UnverifiedBusinessSignup from '../components/Business/UnverifiedSignup.vue';
import Forgot from '../components/Client/Forgot.vue';
import Reset from '../components/Client/Reset.vue';
import businessPage from '../components/Business/businessPage/businessInfo.vue';
import reset from '../components/Business/reset.vue';
import ForgotPassword from '../components/Business/forgotPassword.vue';
import Home from '../components/pages/Index/home.vue';
import servicePage from '../components/Service/service-page.vue';
import clientEditInfo from '../components/Client/clientEditInfo.vue';
import SearchPage from '../components/pages/Search/search-page.vue';
import Checkout from '../components/pages/checkout/checkout.vue';
import clientLogin from '../components/Client/login.vue';
import businessEditInfo from '../components/Business/editInfo.vue';
import verifiedBusinessSignup from '../components/Business/verifiedBusinessSignup.vue';
import adminBusiness from '../components/Admin/unverifiedBusinessPage.vue';
import removeBusiness from '../components/Admin/removeBusiness.vue';
import confirmEmail from '../components/Client/confirmEmail.vue';
import clientSignUp from '../components/Client/signup.vue';
import loginSelect from '../components/pages/SharedLogin/loginSelect.vue';
import businessLogin from '../components/Business/login.vue';
import businessViewTransactions from '../components/Business/viewTransactions.vue';
import categoryCRUD from '../components/Admin/editCategory.vue';
import removeClient from '../components/Admin/removeClient.vue';
import adminLogin from '../components/Admin/login.vue';
import adminDashboard from '../components/Admin/dashboard/dashboard.vue';
import clientViewTransactions from '../components/Client/viewTransactions.vue';
import notfound from '../components/pages/404.vue';
import businessManagement from '../components/Business/manage/management.vue';
import editBranches from '../components/Business/branchesEditForm.vue';
import editFullInfo from '../components/Business/infoEditForm.vue';

/**
 * Front-End Routes.
 */
const routes = [{
  path: '/',
  component: Home,
}, {
  path: '/client/reset/:token',
  component: Reset,
}, {
  path: '/business/apply',
  component: UnverifiedBusinessSignup,
}, {
  path: '/service/:id',
  component: servicePage,
}, {
  path: '/search',
  component: SearchPage,
}, {
  path: '/service/:ser_id/book',
  component: Checkout,
}, {
  path: '/business/forgot',
  component: ForgotPassword,
}, {
  path: '/client/login',
  component: clientLogin,
}, {
  path: '/confirm/signup/:token',
  component: verifiedBusinessSignup,
}, {
  path: '/admin/removebusiness',
  component: removeBusiness,
}, {
  path: '/client/signup',
  component: clientSignUp,
}, {
  path: '/admin/business',
  component: adminBusiness,
}, {
  path: '/client/confirm/:token',
  component: confirmEmail,
}, {
  path: '/login',
  component: loginSelect,
}, {
  path: '/business/login',
  component: businessLogin,
}, {
  path: '/client/profile/edit',
  component: clientEditInfo,
}, {
  path: '/client/forgot',
  component: Forgot,
}, {
  path: '/client/reset/:token',
  component: Reset,
}, {
  path: '/admin/login',
  component: adminLogin,
}, {
  path: '/admin/dashboard',
  component: adminDashboard,
  children: [{
    path: '/',
    redirect: 'confirm',
  }, {
    path: 'confirm',
    component: adminBusiness,
  }, {
    path: 'client/remove',
    component: removeClient,
  }, {
    path: 'categories/edit',
    component: categoryCRUD,
  }, {
    path: 'business/remove',
    component: removeBusiness,
  }],
}, {
  path: '/client/profile/bookings',
  component: clientViewTransactions,
}, {
  path: '/business/reset/:token',
  component: reset,
}, {
  path: '/404',
  component: notfound,
}, {
  path: '/business/manage',
  component: businessManagement,
  children: [{
    path: '/',
    redirect: 'edit/basic',
  }, {
    path: 'edit/basic',
    component: businessEditInfo,
  }, {
    path: 'edit/branches',
    component: editBranches,
  }, {
    path: 'edit/info',
    component: editFullInfo,
  }, {
    path: 'bookings',
    component: businessViewTransactions,
  }],
}, {
  path: '/business/:id',
  component: businessPage,
}, {
  path: '/*',
  redirect: '/404',
}];

/**
 * Instantiate A Vue Router.
 */
const router = new VueRouter({
  routes,
  linkActiveClass: 'is-active',
});

/**
 * Export the router.
 */
export default router;
