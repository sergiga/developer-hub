<template>
  <div id="wrapper">
    <main>
      <v-json-formatter v-if="response" :json="response"/>
    </main>
  </div>
</template>

<script>
import VJsonFormatter from '@/components/VJsonFormatter'
import { mapGetters } from 'vuex'

export default {
  name: 'request-details-page',
  components: {
    VJsonFormatter
  },
  created () {
    if (!this.request) {
      this.navigateToList()
    }
  },
  computed: {
    ...mapGetters(['getRequestByID']),
    request () {
      return this.getRequestByID(parseInt(this.$route.params.id))
    },
    response () {
      if (!this.request) { return }
      return this.request.out
    }
  }
}
</script>
