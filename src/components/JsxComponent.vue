<script>
import { h, onMounted, ref } from 'vue'
export default {
  setup(props, { emit, slots, attrs }) {
    const root = ref(null)
    props = ref(props)

    onMounted(() => {
      console.log(emit, slots, attrs)
      console.log(root.value)
    })
    
    return () => h('div', {
      ref: root
    }, 'emmm')
  }
}
</script>