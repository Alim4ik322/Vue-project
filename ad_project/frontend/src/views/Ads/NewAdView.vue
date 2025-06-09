<template>
  <v-container>
    <v-row>
      <v-col cols="8" offset="2">
        <h1 class="text--secondary mb-3 mt-3">Create Ad</h1>

        <!-- Форма -->
        <v-form v-model="valid" ref="form">
          <v-text-field
            name="title"
            label="Ad Title"
            type="text"
            v-model="title"
            :rules="[(v) => !!v || 'Title is required']"
          ></v-text-field>

          <v-textarea
            name="description"
            label="Ad Description"
            type="text"
            v-model="description"
            :rules="[(v) => !!v || 'Description is required']"
            class="mb-3"
          ></v-textarea>
        </v-form>
      </v-col>
    </v-row>

    <!-- Кнопка загрузки -->
    <v-row>
      <v-col cols="8" offset="2">
        <v-btn class="mt-3" color="warning" @click="uploadImage">
          Upload
          <v-icon right dark>mdi-cloud-upload</v-icon>
        </v-btn>
      </v-col>
    </v-row>

    <!-- Превью картинки -->
    <v-row>
      <v-col cols="8" offset="2">
        <img
          :src="src"
          height="150"
          class="mt-3"
        />
      </v-col>
    </v-row>

    <!-- Переключатель promo -->
    <v-row>
      <v-col cols="8" offset="2">
        <v-switch v-model="promo" label="Ad to Promo?"></v-switch>
      </v-col>
    </v-row>

    <!-- Кнопка создания объявления -->
    <v-row>
      <v-col cols="8" offset="2">
        <v-spacer></v-spacer>
        <v-btn
          color="success"
          @click="createAd"
          :loading="loading"
          :disabled="!valid || loading"
        >
          Create Ad
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'

const valid = ref(false)
const title = ref('')
const description = ref('')
const promo = ref(false)
const src = ref('https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg') // временное превью
const loading = ref(false)

function uploadImage() {
  // Здесь должна быть логика выбора и загрузки изображения
  console.log('Upload clicked')
}

function createAd() {
  if (!valid.value) return

  loading.value = true

  // Здесь имитация создания объявления
  const newAd = {
    title: title.value,
    desc: description.value,
    promo: promo.value,
    src: src.value,
    id: Date.now().toString()
  }

  console.log('Ad created:', newAd)

  setTimeout(() => {
    loading.value = false
    // Очистить форму или перенаправить
  }, 1000)
}
</script>
