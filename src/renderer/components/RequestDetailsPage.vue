<template>
  <div>
    <main>
      <section>
        <div class="px-5">
          <h6 class="border-bottom py-3">{{ title }}</h6>
          <v-collapsible-table v-if="parameters" title="Parameters" :rows="parameters"/>
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
import VCollapsibleTable from '@/components/VCollapsibleTable'
import VJsonFormatter from '@/components/VJsonFormatter'
import VTabBar from '@/components/VTabBar'
import { mapGetters } from 'vuex'
import { REQUEST_LIST_PAGE } from '@/router'

export default {
  name: 'request-details-page',
  components: {
    VButton,
    VCollapsibleTable,
    VJsonFormatter,
    VTabBar
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
          return this.requestBody
        case 1:
          return this.responseBody
      }
    },
    parameters () {
      if (!this.request || !this.request.parameters) { return }
      return this.request.parameters.split('&').map(parameter => parameter.split('='))
    },
    request () {
      return this.getRequestByID(parseInt(this.$route.params.id))
    },
    requestBody () {
      if (!this.request) { return }
      return this.request.body
    },
    responseBody () {
      if (!this.request || !this.request.response.body) { return }
      return this.request.response.body
    },
    tabs () {
      return [
        { id: 0, name: 'Request', enabled: !!this.requestBody },
        { id: 1, name: 'Response', enabled: !!this.responseBody }
      ]
    },
    title () {
      if (!this.request) { return }
      return this.request.url
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