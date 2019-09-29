<template>
  <div id="wrapper">
    <main>
      <v-button
        color="dark"
        icon="arrow-circle-left"
        link
        @click="navigateToList" />
      <v-json-formatter v-if="response" :json="response"/>
    </main>
  </div>
</template>

<script>
import VButton from '@/components/VButton'
import VJsonFormatter from '@/components/VJsonFormatter'
import { mapGetters } from 'vuex'
import { REQUEST_LIST_PAGE } from '@/router/index'

export default {
  name: 'request-details-page',
  components: {
    VButton,
    VJsonFormatter
  },
  created () {
    if (!this.request) {
      this.navigateToList()
    }
  },
  methods: {
    navigateToList () {
      this.$router.push({ name: REQUEST_LIST_PAGE })
    }
  },
  computed: {
    ...mapGetters(['getRequestByID']),
    request () {
      return this.getRequestByID(parseInt(this.$route.params.id))
    },
    response () {
      if (!this.request) { return }
      return this.request.response
    }
  }
}
</script>
