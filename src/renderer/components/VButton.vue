<template>
  <button
    ref="button"
    type="button"
    class="btn d-flex align-items-center justify-content-center"
    :class="buttonClass"
    @click="clickHandler"
  >
    <unicon
      v-if="icon"
      :name="icon"
      :width="iconSize"
      :height="iconSize"/>
    <slot></slot>
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
    disabled: {
      type: Boolean,
      default: false
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
    },
    sm: {
      type: Boolean,
      default: false
    },
    md: {
      type: Boolean,
      default: false
    },
    lg: {
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

      if (this.sm) {
        classGroup.push('btn--sm')
      } else if (this.lg) {
        classGroup.push('btn--lg')
      } else {
        classGroup.push('btn--md')
      }

      if (this.disabled) {
        classGroup.push('disabled')
      }
      return classGroup.join(' ')
    },
    iconSize () {
      if (this.sm) {
        return '1rem'
      } else if (this.lg) {
        return '1.5rem'
      } else {
        return '1.25rem'
      }
    }
  },
  methods: {
    clickHandler () {
      if (this.disabled) { return }
      this.$emit('click')
    }
  }
}
</script>
