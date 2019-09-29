<template>
  <div>
    <div
      class="d-flex align-items-center justify-content-start"
      @click="toggleHandler">
      <div v-if="isLeaf" class="icon" />
      <unicon
        v-else
        :style="{ 'transform': caretRotation}"
        class="icon icon-info"
        name="angle-right"
        width="1rem"
        height="1rem"/>
      <div v-if="name" class="flex-shrink-0 text-nowrap text-truncate text-info ml-2">{{ name }}:</div>
      <div v-if="isLeaf" class="text-nowrap text-truncate text-danger ml-1">{{ raw }}</div>
      <div v-else class="text-nowrap text-truncate text-muted ml-1">{{ raw }}</div>
    </div>
    <div v-if="!collapsed">
      <v-json-formatter
        v-for="(value, key) in nodes"
        class="px-3"
        :key="key"
        :json="value"
        :name="key"
        :root="false" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'v-json-formatter',
  data () {
    return {
      collapsed: true
    }
  },
  props: {
    json: {
      required: true
    },
    name: {
      type: String,
      required: false
    }
  },
  computed: {
    caretRotation () {
      return this.collapsed ? 'rotate(0deg)' : 'rotate(90deg)'
    },
    isLeaf () {
      return (
        !Array.isArray(this.json) &&
        !(typeof this.json === 'object' && this.json !== null)
      )
    },
    nodes () {
      if (Array.isArray(this.json)) {
        const json = {}
        this.json.forEach((item, index) => {
          json[index] = item
        })
        return json
      }
      return this.json
    },
    raw () {
      if (Array.isArray(this.json)) {
        return `Array [${this.json.length}]`
      }
      if (typeof this.json === 'object' && this.json !== null) {
        return 'Object'
      }
      return JSON.stringify(this.json)
    }
  },
  methods: {
    toggleHandler () {
      if (this.isLeaf) { return }
      this.collapsed = !this.collapsed
    }
  }
}
</script>

<style lang="scss" scoped>
.icon {
  flex: 0 0 1rem;
  height: 1rem;
}
</style>