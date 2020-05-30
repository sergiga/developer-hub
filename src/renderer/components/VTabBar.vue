<template>
  <div class="tab-bar">
    <div
      v-for="element in elements"
      :key="element.id"
      :class="classTabItem(element)"
      @click="didSelectTab(element)"
    >{{ element.name }}</div>
  </div>
</template>

<script>
export default {
  name: 'v-tab-bar',
  props: {
    elements: {
      type: Array,
      required: true
    },
    value: {
      type: Number,
      required: true
    }
  },
  mounted () {
    const firstEnabled = this.elements.find(element => element.enabled)
    if (!firstEnabled || firstEnabled.id === this.value) { return }
    this.$emit('input', firstEnabled.id)
  },
  methods: {
    classTabItem (tab) {
      let classes = ['tab-bar__item', 'font-weight-bold', 'py-3']
      if (tab.id === this.value) {
        classes = [...classes, 'tab-bar__item--selected']
      }
      if (!tab.enabled) {
        classes = [...classes, 'tab-bar__item--disabled', 'text-muted']
      }
      return classes
    },
    didSelectTab ({id, enabled}) {
      if (!enabled) { return }
      this.$emit('input', id)
    }
  }
}
</script>

<style lang="scss" scoped>
.tab-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  transform: translateY(1px);

  .tab-bar__item {
    flex: 1 1 auto;
    border-bottom: 1px solid $gray-300;
  }

  .tab-bar__item--selected {
    border-bottom: 2px solid $primary;
  }
}
</style>