<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="8">
        <v-card>
          <v-img :src="ad.src" height="300px" cover></v-img>
          <v-card-title>{{ ad.title }}</v-card-title>
          <v-card-text>{{ ad.desc }}</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <modal-dialog></modal-dialog>
            <v-btn class="success">Buy</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import EditAdModal from './EditAdModal.vue'

export default {
  props: ['id'],
  computed: {
    ad() {
      return this.$store.getters['ads/adById'](this.id)
    }
  },
  components: {
    'modal-dialog': EditAdModal
  }
}
</script>