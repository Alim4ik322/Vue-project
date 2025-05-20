<template>
  <v-app>
    <!-- Боковое меню -->
    <v-navigation-drawer app v-model="drawer">
      <!-- Заголовок -->
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            КИПУ
          </v-list-item-title>
          <v-list-item-subtitle>
            Учебный проект
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <!-- Разделитель -->
      <v-divider></v-divider>

      <!-- Список навигации -->
      <v-list dense>
        <v-list-item v-for="link in links" :key="link.title" link>
          <template v-slot:prepend>
            <v-icon :icon="link.icon"></v-icon>
          </template>
          <v-list-item-title>{{ link.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Верхняя панель -->
    <v-app-bar app dark color="primary">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn>
          <v-icon start icon="mdi-cake-variant"></v-icon>
          Link One
        </v-btn>
        <v-btn>Link Two</v-btn>
        <v-btn>Link Three</v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <!-- Основная часть -->
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      links: [
        { title: 'Link One', icon: 'mdi-cake-variant' },
        { title: 'Link Two', icon: 'mdi-home' },
        { title: 'Link Three', icon: 'mdi-information' },
      ],
    }
  }
}
</script>
