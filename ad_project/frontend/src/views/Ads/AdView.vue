<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="8">
        <v-card v-if="ad">
          <v-img :src="ad.src" height="300px" cover></v-img>
          <v-card-title>{{ ad.title }}</v-card-title>
          <v-card-text>{{ ad.desc }}</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <modal-dialog :ad="ad" v-if="isOwner"></modal-dialog>
            <buy-ad-modal :ad="ad"></buy-ad-modal>
          </v-card-actions>
        </v-card>
        <v-alert v-else type="error">Ad not found or getter not available</v-alert>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import EditAdModal from '../EditAdModal.vue'

export default {
  props: ['id'],
  computed: {
    ad() {
      console.log('ID:', this.id)
      console.log('All getters:', this.$store.getters)
      const adById = this.$store.getters['ads/adById']
      console.log('adById getter:', adById)
      if (!adById) {
        console.error('adById getter is not available')
        return null
      }
      const ad = adById(this.id)
      console.log('Ad result:', ad)
      return ad
    },
    isOwner() {
      const user = this.$store.getters['user/user']
      console.log('User:', user, 'Ad.userId:', this.ad ? this.ad.userId : 'No ad')
      return this.ad && user && this.ad.userId === user.id
    }
  },
  components: {
    'modal-dialog': EditAdModal
  }
}
</script>