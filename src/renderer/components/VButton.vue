<template>
  <button
    ref="button"
    type="button"
    class="btn d-flex align-items-center justify-content-center"
    :class="buttonClass"
    @click="$emit('click')"
  >
    <unicon
      v-if="icon"
      :name="icon"
      width="1rem"
      height="1rem"/>
    <span class="ml-1">back</span>
  </button>
</template>

<script>
export default {
  name: 'v-button',
  props: {
    color: {
      type: String,
      default: 'primary'
    },
    icon: {
      type: String,
      required: false
    },
    link: {
      type: Boolean,
      required: false
    },
    outline: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    buttonClass () {
      const classGroup = []
      if (this.outline) {
        classGroup.push(`btn-outline-${this.color}`)
      } else if (this.link) {
        classGroup.push(`btn-link-${this.color}`)
      } else {
        classGroup.push(`btn-${this.color}`)
      }
      return classGroup.join(' ')
    }
  }
}
</script>
