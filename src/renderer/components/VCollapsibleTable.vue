<template>
  <table class="table table-bordered small mh-100">
    <thead @click="toggleHandler">
      <tr>
        <th class="border" :colspan="colCount" scope="col">
          <div class="d-flex align-items-center justify-content-between">
            <span>{{ title }}</span>
            <unicon
              :style="{ 'transform': caretRotation }"
              name="angle-right"
              width="1rem"
              height="1rem"
            />
          </div>
        </th>
      </tr>
    </thead>
    <tbody v-if="!collapsed">
      <tr v-for="(row, rowIndex) in rows" :key="rowIndex">
        <td v-for="(col, colIndex) in row" :key="colIndex">{{ col }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'v-collapsible-table',
  data () {
    return {
      collapsed: true
    }
  },
  props: {
    rows: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
  watch: {
    rows () {
      this.collapsed = true
    }
  },
  computed: {
    caretRotation () {
      return this.collapsed ? 'rotate(0deg)' : 'rotate(90deg)'
    },
    colCount () {
      return this.rows[0].length
    }
  },
  methods: {
    toggleHandler () {
      this.collapsed = !this.collapsed
    }
  }
}
</script>

<style lang="scss" scoped>
.table {
  table-layout: fixed;

  td, th {
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>