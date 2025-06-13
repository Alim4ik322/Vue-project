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

<script>
export default {
  data() {
    return {
      valid: false,
      title: '',
      description: '',
      promo: false,
      src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
      loading: false
    }
  },
  methods: {
    uploadImage() {
      console.log('Upload clicked')
    },
    createAd(){
      if (this.$refs.form.validate()){
        const ad = {
          title: this.title,
          desc: this.description,
          promo: this.promo,
          src: "https://cdn.vuetifyjs.com/images/cards/cooking.png"
        }
        console.log(ad)
      }
    }
  }
}
</script>
