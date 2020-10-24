<template>
  <input type="text" :value="val" @input="inp">
</template>

<script>
export default {
  props: ['val'],
  setup(props, ctx) {
    const inp = e => {
      ctx.emit('update:val', e.target.value)
    }

    return {
      inp
    }
  }
}
</script>
