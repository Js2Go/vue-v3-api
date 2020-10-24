<template>
  <div
    v-for="(item, i) in list"
    :ref="el => { if (el) divs[i] = el }"
    :key="i"
  >
    {{ item }}
  </div>
</template>

<script setup>
import { onBeforeUpdate, onMounted, reactive, ref } from 'vue'

export const list = reactive([1, 2, 3])
export const divs = ref([])

onBeforeUpdate(() => {
  divs.value = []
})

onMounted(() => {
  console.log(divs.value)
})
</script>

<style>

</style>