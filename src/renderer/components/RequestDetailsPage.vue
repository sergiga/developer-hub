<template>
  <div>
    <main>
      <section>
        <div class="px-5">
          <h1 class="border-bottom py-3">{{ title }}</h1>
          <v-tab-bar v-model="tab" :elements="tabs" />
        </div>
      </section>
      <section>
        <div class="px-5 py-3">
          <v-json-formatter v-if="json" :json="json"/>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import VButton from '@/components/VButton'
import VJsonFormatter from '@/components/VJsonFormatter'
import VTabBar from '@/components/VTabBar'
import { mapGetters } from 'vuex'
import { REQUEST_LIST_PAGE } from '@/router'

export default {
  name: 'request-details-page',
  components: {
    VButton,
    VJsonFormatter,
    VTabBar
  },
  created () {
    if (!this.payload) {
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
          return this.request
        case 1:
          return this.response
      }
    },
    title () {
      if (!this.payload) { return }
      return this.payload.endpoint
    },
    payload () {
      return this.getRequestByID(parseInt(this.$route.params.id))
    },
    request () {
      if (!this.payload) { return }
      return this.payload.in
    },
    response () {
      if (!this.payload) { return }
      return this.payload.out
    },
    tabs () {
      return [
        { id: 0, name: 'Request', enabled: !!this.request },
        { id: 1, name: 'Response', enabled: !!this.response }
      ]
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