<template>
  <div class="row">
    <div class="col-2"></div>
    <div class="col-10">{{ request.endpoint }}</div>
    <div class="col-1"></div>
    <div class="col-1"></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

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
    request () {
      return this.getRequestByID(this.id)
    }
  }
}
</script>
