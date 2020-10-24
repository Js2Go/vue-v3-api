<template>
  <h2>This is a parent component</h2>
  <teleport to="#endofbody">
    <Child name="mazi" />
  </teleport>
  <teleport to="#endofbody2">
    <Child name="kk" />
  </teleport>
</template>

<script>
import Child from './Child.vue'

export default {
  components: {
    Child
  }
}
</script>

<script setup>
import { provide, readonly, ref } from 'vue'

const geo = ref('aabb')

const updateGeo = e => {
  geo.value = e
}

provide('geo', readonly(geo))
provide('updateGeo', updateGeo)
</script>
