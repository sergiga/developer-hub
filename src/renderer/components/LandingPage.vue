<template>
  <div id="wrapper">
    <main>
      <request-list />
    </main>
  </div>
</template>

<script>
import RequestList from '@/components/LandingPage/RequestList'

export default {
  name: 'landing-page',
  components: { RequestList }
}
</script>
