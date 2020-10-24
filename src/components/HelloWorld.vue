<template>
  <h1>{{ msg }}</h1>
  <button @click="cre(), hhh()">count is: {{ count }}</button>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  emits: ['hhh'],
  data() {
    return {
      count: 0
    }
  },
  methods: {
    hhh() {
      this.$emit('hhh')
    },
    cre() {
      this.count++
    }
  }
}
</script>
