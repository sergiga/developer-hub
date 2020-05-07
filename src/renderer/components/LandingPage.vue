<template>
  <main>
    <section>
      <div class="px-5">
        <request-list />
      </div>
    </section>
  </main>
</template>

<script>
import RequestList from '@/components/LandingPage/RequestList'

export default {
  name: 'landing-page',
  components: { RequestList }
}
</script>
