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
    </v-navigation-drawer>

    <v-app-bar app dark color="primary">
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      
      <v-toolbar-title>
      <v-btn to="/" text>Home</v-btn>
      </v-toolbar-title>
      
      
      <v-spacer></v-spacer>
      <v-btn
        v-for="link in links"
        :key="link.title"
        :to="link.url"
        text
      >
        <v-icon start :icon="link.icon"></v-icon>
        {{ link.title }}
      </v-btn>
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
    },
    links() {
      if (this.isUserLoggedIn) {
        return [
          { title: 'Home', url: '/', icon: 'mdi-home' },
          { title: 'My ads', url: '/list', icon: 'mdi-view-list-outline' },
          { title: 'New ad', url: '/new', icon: 'mdi-note-plus-outline' },
          { title: 'Orders', url: '/orders', icon: 'mdi-bookmark-multiple-outline' }
        ]
      } else {
        return [
          { title: 'Home', url: '/', icon: 'mdi-home' },
          { title: 'Login', url: '/login', icon: 'mdi-lock' },
          { title: 'Registration', url: '/registration', icon: 'mdi-face' }
        ]
      }
    }
  },
  methods: {
    closeError() {
      this.$store.dispatch('clearError')
    }
  }
}
</script>

<style scoped>
</style>
