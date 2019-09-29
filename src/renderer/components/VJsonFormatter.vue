<template>
  <div class="d-flex align-items-center justify-content-start">
    <unicon
      v-if="icon"
      :name="icon"
      width="1rem"
      height="1rem"/>
    <span>{{ raw }}</span>
  </div>
</template>

<script>
export default {
  name: 'v-json-formatter',
  props: {
    json: {
      type: [Object, Array],
      required: true
    },
    root: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    raw () {
      return JSON.stringify(this.json)
    }
  }
}
</script>
