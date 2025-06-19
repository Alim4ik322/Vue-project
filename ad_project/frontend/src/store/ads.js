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
    },
    loadAds(state, payload) {
      state.ads = payload
    },
    updateAd(state, { title, desc, id }) {
      const ad = state.ads.find(a => a.id === id)
      if (ad) {
        ad.title = title
        ad.desc = desc
      }
    }
},
actions: {
	async createAd({ commit, rootGetters }, payload) {
      const user = rootGetters['user/user']
      payload.id = String(Math.random().toString(36).slice(2)) // Улучшенная генерация ID
      payload.userId = user ? user.id : '1' // Устанавливаем userId
      commit('shared/clearError') // Мутация в модуле shared
      commit('shared/setLoading', true) // Мутация в модуле shared
      // Имитация запроса
      let isRequestOk = true
      let promise = new Promise(function(resolve) {
        setTimeout(() => resolve('Done'), 3000)
      })
      if (isRequestOk) {
        await promise.then(() => {
          commit('createAd', payload)
          commit('shared/setLoading', false)
        })
      } else {
        await promise.then(() => {
          commit('shared/setLoading', false)
          commit('shared/setError', 'Ошибка создания объявления')
          throw new Error('Упс... Ошибка создания объявления')
        })
      }
    },
	async updateAd({ commit }, payload) {
      commit('shared/clearError')
      commit('shared/setLoading', true)
      let isRequestOk = true
      let promise = new Promise(function(resolve) {
        setTimeout(() => resolve('Done'), 3000)
      })
      if (isRequestOk) {
        await promise.then(() => {
          commit('updateAd', payload)
          commit('shared/setLoading', false)
        })
      } else {
        await promise.then(() => {
          commit('shared/setLoading', false)
          commit('shared/setError', 'Ошибка редактирования объявления')
          throw new Error('Упс... Ошибка редактирования объявления')
        })
      }
    }
},
getters: {
    ads(state) {
		return state.ads
	},
	promoAds(state) {
		return state.ads.filter(ad => ad.promo)
	},
	myAds(state, getters) {
		return state.ads.filter(ad => {
			return ad.userId == getters.user.id
		})
	},
    adById(state) {
        return id => state.ads.find(ad => ad.id == id)
    }
}
}
