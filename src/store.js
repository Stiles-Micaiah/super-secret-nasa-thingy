import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const _api = axios.create({
  baseURL: "https://images-api.nasa.gov/"
})
const keywordApi = axios.create({
  baseURL: "https://images-api.nasa.gov/search?q=apollo"

  // api_key=zzY3vXKo1wUfKGU7PflDVaemhJCJi9pDDkNlSL9g
})
// const _api = axios.create({
//   baseURL: "https://images-api.nasa.gov/"
// })
// const _api = axios.create({
//   baseURL: "https://images-api.nasa.gov/"
// })




Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    results: []
  },
  mutations: {
    setResults(state, data) {
      state.results = data
    }
  },
  actions: {
    searchKeywordApi({ commit, dispatch }, query) {
      keywordApi.get(query)
        .then(res => {
          let data = res.data.collection.items
          commit('setResults', data)
        })
    }


  }
})
