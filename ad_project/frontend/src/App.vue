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
        <v-list-item>
          <template v-slot:prepend>
            <v-icon icon="mdi-cake-variant"></v-icon>
          </template>
          <v-list-item-title>Link One</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <template v-slot:prepend>
            <v-icon icon="mdi-home"></v-icon>
          </template>
          <v-list-item-title>Link Two</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <template v-slot:prepend>
            <v-icon icon="mdi-information"></v-icon>
          </template>
          <v-list-item-title>Link Three</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Верхняя панель -->
    <v-app-bar app dark color="primary">
      <!-- Кнопка-гамбургер -->
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-spacer></v-spacer>

      <!-- Кнопки справа -->
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn>
          <v-icon start icon="mdi-cake-variant"></v-icon>
          Link One
        </v-btn>
        <v-btn>Link Two</v-btn>
        <v-btn>Link Three</v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <!-- Основное содержимое -->
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false
    }
  }
}
</script>
