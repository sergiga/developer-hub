<template>
  <div class="container-fluid">
    <template v-for="request in requests">
      <request-list-item
        :key="request.id"
        :id="request.id"
      />
    </template>
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
