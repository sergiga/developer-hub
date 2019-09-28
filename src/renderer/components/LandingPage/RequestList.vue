<template>
  <div class="container-fluid">
    <request-list-item
      v-for="request in requests"
      :key="request.id"
      :id="request.id"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import RequestListItem from '@/components/LandingPage/RequestListItem'

export default {
  name: 'request-list',
  components: { RequestListItem },
  computed: {
    ...mapGetters(['requests'])
  }
}
</script>
