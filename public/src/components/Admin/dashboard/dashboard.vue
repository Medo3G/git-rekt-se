<template>
  <div class="manage-business">

    <gr-top-hero class="admin-dashbaord-top" title="Dashboard"></gr-top-hero>
    <div class="columns container is-fluid margin-mobile">
      <!-- Side Menu -->
      <div class="column is-3">
        <aside class="menu">
          <p class="menu-label">
            General
          </p>
          <ul class="menu-list">
            <li><a @click.prevent="adminLogout">Logout</a></li>
          </ul>
          <p class="menu-label">
            Business
          </p>
          <ul class="menu-list">
            <li>
              <router-link to="/admin/dashboard/confirm">Accept/Reject</router-link>
            </li>
            <li>
              <router-link to="/admin/dashboard/business/remove">Remove</router-link>
            </li>
          </ul>
          <p class="menu-label">
            Categories
          </p>
          <ul class="menu-list">
            <li>
              <router-link to="/admin/dashboard/categories/edit">Edit Categories</router-link>
            </li>
          </ul>
          <p class="menu-label">
            Clients
          </p>
          <ul class="menu-list">
            <li>
              <router-link to="/admin/dashboard/client/remove">Remove</router-link>
            </li>
          </ul>
        </aside>
      </div>

      <!-- Content Component -->
      <div class="column is-8">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  /**
   * This component allows the admin to navigate through
   * Confirming a Business,
   * Removing a Client,
   * Editing a Category.
   */
  import tophero from '../../shared/gr-top-hero.vue';
  import adminAuth from '../../../services/auth/adminAuth';
  import EventBus from '../../../services/EventBus';

  export default {
    /**
     * Sub-components used by this component.
     */
    components: {
      'gr-top-hero': tophero,
    },
    /**
     * Ran when component is mounted on DOM.
     * if admin is not authenticated redirect him back.
     */
    mounted() {
      if (!adminAuth.isAuthenticated()) {
        this.$router.push('/404');
      }
    },

    methods: {
      adminLogout() {
        const loader = this.$loading({
          fullscreen: true,
        });

        adminAuth.logout((responseErrs, response) => {
          let message;

          EventBus.$emit('UpdateNavigation');
          loader.close();
          if (responseErrs) {
            message = responseErrs.errors[0];
          } else {
            message = response.message;
          }

          this.$toast.open({
            message,
            type: 'is-primary',
            position: 'bottom',
          });

          this.$router.push({
            path: '/',
          });
        });
      },

    },

  };
</script>

<style>
  .admin-dashbaord-top {
    background: #485563; /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #29323c, #485563); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #29323c, #485563); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    margin-bottom: 2em;
  }

  @media screen and (max-width: 999px) {
    .margin-mobile {
      margin: 1em;
    }
  }
</style>
