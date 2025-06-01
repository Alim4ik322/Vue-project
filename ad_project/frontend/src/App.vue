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
  }
}
</script>

<style scoped>
</style>
