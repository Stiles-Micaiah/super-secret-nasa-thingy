<template>
  <div class="home">
    <form @submit.prevent="searchKeywordApi()">
      <input type="text" placeholder="Seach Nasa Images" v-model="query">
      <button type="submit" class="btn btn-sm btn-info rounded-pill">Submit</button>
    </form>
    {{media}}
  </div>
</template>

<script>
  // @ is an alias to /src

  export default {
    name: 'home',
    data() {
      return {
        query: ""

      }
    },
    computed: {
      media() {
        return this.$store.state.results;
      }
    },
    components: {

    },
    methods: {
      searchKeywordApi() {
        this.$store.dispatch('searchKeywordApi', this.query)
      }
    }
  }
</script>