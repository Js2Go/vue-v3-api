<template>
  <van-button
    @click="modalOpen = true"
    hairline
    plain
    size="small"
    type="primary"
  >
    Open full screen modal!（With telport）
  </van-button>

  <van-field class="text" v-model="color" />
</template>

<script setup>
import { computed, ref } from 'vue'

export const modalOpen = ref(false)
export const color = ref('red')
export const compColor = computed(() => '#' + color.value)
</script>

<style scoped vars="{ compColor }">
.modal {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /* height: 100%; */
  background-color: rgba(0, 0, 0, .5);
  display: flex;
  align-items: center;
  justify-content: center;
}
.text {
  color: var(--compColor);
}
h1 {
  font-size: var(--global:fontSize);
}
</style>

<style lang="scss" scoped>
.text {
  color: red;
}
</style>
