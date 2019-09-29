<template>
  <div id="wrapper">
    <main>
      <VButton
        link
        color="dark"
        icon="arrow-circle-left"
        @click="navigateToList" />
    </main>
  </div>
</template>

<script>
import VButton from '@/components/VButton'
import { REQUEST_LIST_PAGE } from '@/router/index'

export default {
  name: 'request-details-page',
  components: {
    VButton
  },
  methods: {
    navigateToList () {
      this.$router.push({ name: REQUEST_LIST_PAGE })
    }
  }
}
</script>
