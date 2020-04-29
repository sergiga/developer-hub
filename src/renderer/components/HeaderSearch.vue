<template>
  <div class="search-header border-bottom px-1">
    <div class="search-header__left-items">
      <v-button
        color="dark"
        icon="arrow-left"
        link
        lg
        @click="goBack"/>
      <v-button
        color="dark"
        icon="arrow-right"
        link
        lg
        @click="goForward"/>
    </div>
    <div class="search-header__center-items d-flex align-items-center justify-content-center">
      <div class="search-bar d-flex border rounded-lg p-1">
        <unicon
          name="search"
          width="1rem"
          height="1rem"
          fill="#DEE2E6"
          class="mr-1"/>
        <input :value="search" @input="searchDidChange">
      </div>
    </div>
    <div class="search-header__right-items"></div>
  </div>  
</template>

<script>
import VButton from '@/components/VButton'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'header-search',
  components: {
    VButton
  },
  computed: {
    ...mapGetters([
      'search'
    ])
  },
  methods: {
    ...mapActions([
      'updateSearch'
    ]),
    goBack () {
      this.$router.go(-1)
    },
    goForward () {
      this.$router.go(1)
    },
    searchDidChange (e) {
      this.updateSearch(e.target.value)
    }
  }
}
</script>

<style lang="scss" scoped>
.search-header {
  height: 40px;
  justify-content: space-between;
}

.search-header,
.search-header__center-items,
.search-header__left-items,
.search-header__rigth-items {
  display: flex;
}

.search-header__center-items,
.search-header__left-items,
.search-header__right-items {
  flex: 1;
}

.search-bar {
  flex: 1;

  .search-bar__icon {
    flex: 0;
  }

  input {
    flex: 1;
  }
}
</style>