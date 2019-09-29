<template>
  <div
    class="row py-3 border-bottom"
    @click="navigateToDetail"
  >
    <div class="col-1 d-flex align-items-center">
      <span :class="statusClass">{{ request.status }}</span>
    </div>
    <div class="col-10">{{ request.endpoint }}</div>
    <div class="col-1 d-flex align-items-center justify-content-end">
      <unicon name="caret-right" width="1rem" height="1rem" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { REQUEST_DETAILS_PAGE } from '@/router/index'

export default {
  name: 'request-list-item',
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  computed: {
    ...mapGetters(['getRequestByID']),
    statusClass () {
      const { status } = this.request
      if (status >= 200 && status < 300) { return 'badge badge-success' }
      if (status >= 300 && status < 400) { return 'badge badge-warning' }
      if (status >= 400) { return 'badge badge-danger' }
    },
    request () {
      return this.getRequestByID(this.id)
    }
  },
  methods: {
    navigateToDetail () {
      const { id } = this
      this.$router.push({
        name: REQUEST_DETAILS_PAGE,
        params: { id }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.border-bottom:last-child {
  border: none !important;
}
</style>
