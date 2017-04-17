import Vue from 'vue';
import VueRouter from 'vue-router';
import elementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/en'
import Buefy from 'buefy'
import axios from 'axios';
import header from '../../components/shared/header.vue';
import footer from '../../components/shared/footer.vue';
import clientLogin from '../../components/Client/login.vue';
import clientLogout from '../../components/Client/logout.vue';
import router from '../../services/routes.js';
import businessEditInfo from '../../components/business/editInfo.vue';

window.axios = axios;

Vue.use(VueRouter);
Vue.use(elementUI, {
  locale
});
Vue.use(Buefy);

new Vue({
  el: '#root',
  router,
  components: {
    'gr-header': header,
    'gr-footer': footer,
    'b-edit-info': businessEditInfo,
    'client-login': clientLogin,
    'client-logout': clientLogout,
  }
});
