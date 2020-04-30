<template>
  <div>
    <main>
      <div class="request-bar py-2">
        <v-button
          v-for="item in tabs"
          color="primary"
          class="mx-1"
          sm
          :key="item.id"
          :outline="item.outline"
          @click="() => { item.click(item.id) }"
        >{{ item.name }}</v-button>
      </div>
      <v-json-formatter v-if="json" :json="json"/>
    </main>
  </div>
</template>

<script>
import VButton from '@/components/VButton'
import VJsonFormatter from '@/components/VJsonFormatter'
import { mapGetters } from 'vuex'
import { REQUEST_LIST_PAGE } from '@/router'

export default {
  name: 'request-details-page',
  components: {
    VButton,
    VJsonFormatter
  },
  created () {
    if (!this.request) {
      this.$router.push({ name: REQUEST_LIST_PAGE })
    }
  },
  data () {
    return {
      tab: 0
    }
  },
  computed: {
    ...mapGetters(['getRequestByID']),
    json () {
      switch (this.tab) {
        case 0:
          return this.payload
        case 1:
          return this.response
      }
    },
    payload () {
      if (!this.request) { return }
      return this.request.in
    },
    request () {
      return this.getRequestByID(parseInt(this.$route.params.id))
    },
    response () {
      if (!this.request) { return }
      return this.request.out
    },
    tabs () {
      const tabs = []
      let tab = 0
      if (this.payload) {
        tabs.push({ id: tab, name: 'Request', outline: this.tab !== tab, click: (t) => { this.tab = t } })
        tab++
      }
      if (this.response) {
        tabs.push({ id: tab, name: 'Response', outline: this.tab !== tab, click: (t) => { this.tab = t } })
      }
      return tabs
    }
  }
}
</script>

<style lang="scss" scoped>
.request-bar {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>