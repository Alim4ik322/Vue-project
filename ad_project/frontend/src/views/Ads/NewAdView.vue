<template>
  <v-container>
    <v-row>
      <v-col cols="8" offset="2">
        <h1 class="text--secondary mb-3 mt-3">Create Ad</h1>

        <!-- Форма -->
        <v-form v-model="valid" ref="form">
          <v-text-field
            label="Ad Title"
            v-model="title"
            :rules="[(v) => !!v || 'Title is required']"
          ></v-text-field>

          <v-textarea
            label="Ad Description"
            v-model="description"
            :rules="[(v) => !!v || 'Description is required']"
            class="mb-3"
          ></v-textarea>
        </v-form>

        <!-- Кнопка загрузки -->
        <v-btn class="mt-3" color="warning" @click="uploadImage">
          Upload
          <v-icon right dark>mdi-cloud-upload</v-icon>
        </v-btn>

        <!-- Превью картинки -->
        <img :src="src" height="150" class="mt-3" />

        <!-- Переключатель -->
        <v-switch v-model="promo" label="Ad to Promo?"></v-switch>

        <!-- Кнопка создания -->
        <v-btn
          color="success"
          class="mt-3"
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

const form = ref(null)
const valid = ref(false)
const title = ref('')
const description = ref('')
const promo = ref(false)
const src = ref('https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg') // временное изображение
const loading = ref(false)

function uploadImage() {
  // Заглушка — позже можно добавить input type="file" и FileReader
  console.log('Upload clicked')
}

function createAd() {
  if (!form.value?.validate()) return

  loading.value = true

  const ad = {
    title: title.value,
    desc: description.value,
    promo: promo.value,
    src: src.value,
    id: Date.now().toString(),
  }

  console.log('Created ad:', ad)

  setTimeout(() => {
    loading.value = false
    // Сброс полей формы
    title.value = ''
    description.value = ''
    promo.value = false
    // при необходимости — перенаправление
  }, 1000)
}
</script>
