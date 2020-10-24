<template>
  <div>Hello, {{ name }}, {{ geoo }}</div>
</template>

<script>
export default {
  props: ['name']
}
</script>

<script setup>
import { inject, onMounted, watch } from 'vue'

onMounted(() => {
  const timer = setTimeout(() => {
    updateGeo('bbaa')
  }, 2000)
})

export const geoo = inject('geo', '11111')
export const updateGeo = inject('updateGeo')

watch(geoo, (n, old) => {
  console.log(n, old)
})
</script>
