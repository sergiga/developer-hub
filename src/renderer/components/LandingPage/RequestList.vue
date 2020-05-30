<template>
  <div class="container-fluid">
    <request-list-item
      v-for="request in filteredRequests"
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
    ...mapGetters([
      'requests',
      'search'
    ]),
    filteredRequests () {
      return this.requests.filter(request => request.url.includes(this.search))
    }
  }
}
</script>
