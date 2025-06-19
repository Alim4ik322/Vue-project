<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app>
      <v-list-item
        v-for="link in links"
        :key="link.title"
        :to="link.url"
        link
      >
        <template v-slot:prepend>
          <v-icon :icon="link.icon"></v-icon>
        </template>
        <v-list-item-title>{{ link.title }}</v-list-item-title>
      </v-list-item>
      <v-list-item
        @click="onLogout"
        v-if="isUserLoggedIn"
      >
        <template v-slot:prepend>
          <v-icon icon="mdi-exit-to-app"></v-icon>
        </template>
        <v-list-item-title>Logout</v-list-item-title>
      </v-list-item>
    </v-navigation-drawer>

    <v-app-bar app dark color="primary">
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      
      <v-toolbar-title>
        <v-btn to="/" variant="text">Home</v-btn>
      </v-toolbar-title>
      
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          v-for="link in links"
          :key="link.title"
          :to="link.url"
          variant="text"
        >
          <v-icon start :icon="link.icon"></v-icon>
          {{ link.title }}
        </v-btn>
        <v-btn
          @click="onLogout"
          v-if="isUserLoggedIn"
          variant="text"
        >
          <v-icon start icon="mdi-exit-to-app"></v-icon>
          Logout
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
    <v-snackbar
      v-model="error"
      multi-line
      :timeout="2000"
      color="primary"
    >
      {{ error }}
      <template v-slot:actions>
        <v-btn
          variant="text"
          @click="closeError"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      drawer: true,
      links: [
        { title: 'Home', url: '/', icon: 'mdi-home' },
        { title: 'Ads', url: '/list', icon: 'mdi-format-list-bulleted' },
        { title: 'New Ad', url: '/new', icon: 'mdi-plus-box' },
        { title: 'Orders', url: '/orders', icon: 'mdi-cart' },
        { title: 'Login', url: '/login', icon: 'mdi-login' },
        { title: 'Register', url: '/registration', icon: 'mdi-account-plus' }
      ]
    }
  },
  computed: {
    error() {
      return this.$store.getters.error
    },
    isUserLoggedIn () {
      return this.$store.getters.isUserLoggedIn
    }
  },
  methods: {
    closeError() {
      this.$store.dispatch('clearError')
    },
    onLogout() {
      this.$store.dispatch('logoutUser')
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
</style>
