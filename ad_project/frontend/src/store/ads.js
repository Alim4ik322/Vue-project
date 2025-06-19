export default {
state: {
  ads: [
      {
        title: 'First',
        desc: 'First Desc',
        promo: true,
        src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
        id: '1',
        userId: '1' // Добавлено
      },
      {
        title: 'Second',
        desc: 'Second Desc',
        promo: true,
        src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
        id: '2',
        userId: '2' // Добавлено
      },
      {
        title: 'Third',
        desc: 'Third Desc', // Исправлено Thitd -> Third
        promo: true,
        src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
        id: '3',
        userId: '1' // Добавлено
      },
      {
        title: 'Fourth', // Исправлено Fouth -> Fourth
        desc: 'Fourth Desc', // Исправлено Fouth -> Fourth
        promo: true,
        src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
        id: '4',
        userId: '2' // Добавлено
      }
    ]

},
mutations: {
    createAd(state, payload) {
    state.ads.push(payload)
  }
},
actions: {
     createAd({ commit }, payload) {
    payload.id = Math.random()
    commit('createAd', payload)
  }
},
getters: {
    ads(state) {
		return state.ads
	},
	promoAds(state) {
		return state.ads.filter(ad => ad.promo)
	},
	myAds(state) {
		return state.ads
	},
    adById(state) {
        return id => state.ads.find(ad => ad.id == id)
    }
}
}
