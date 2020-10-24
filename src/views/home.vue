<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/img/logo.png" />
    <HelloWorld msg="Hello Vue 3.0 + Vite" @hhh="hhh" />
    <Animate />
    <div>
      <input type="text" v-model="data.attr">
    </div>
    <div>
      <input type="text" v-model="data.evt" v-bind:[data.attr]="true">
      <!-- <button @[data.evt]="reg">register</button> -->
      <van-button
        plain
        hairline
        type="primary"
        size="small"
        @[data.evt]="reg"
      >
        {{ data.evt }} register
      </van-button>
      <div>{{ evtattr }}</div>
    </div>
    <button @click="c1(), c2()">mul</button>
    <CustomInput :val="data.username" @update:val="data.username = $event" />
    <table class="table">
      <tr v-is="'custom-input'" />
    </table>
    <van-button
      plain
      hairline
      type="primary"
      size="small"
    >
      点我呗
    </van-button>
    <ModalButton />
    <Parent />
    <JsxComponent />
    <ForRef />
  </div>
</template>

<script>
import { computed, reactive, watch } from 'vue'
import { register } from '../apis/user'
import HelloWorld from '../components/HelloWorld.vue'
import CustomInput from '../components/CustomInput.vue'
import Animate from '../components/Animate.vue'
import ModalButton from '../components/ModalButton.vue'
import Parent from '../components/Parent.vue'
import JsxComponent from '../components/JsxComponent.vue'
import ForRef from '../components/ForRef.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    CustomInput,
    Animate,
    ModalButton,
    Parent,
    JsxComponent,
    ForRef
  },
  setup() {
    let data = reactive({
      username: '',
      password: '',
      evt: '',
      attr: ``
    })

    let evtattr = computed(() => data.evt + data.attr)

    // let w = watch(() => {

    // })

    const reg = () => {
      register({
        username: data.username,
        password: data.password,
      })
    }

    const c1 = () => {
      console.log('c1')
    }

    const c2 = () => {
      console.log('c2')
    }

    const hhh = () => {
      console.log('hhh')
    }

    return {
      data,
      evtattr,
      reg,
      c1,
      c2,
      hhh
    }
  }
}
</script>

<style lang="scss" scoped>
.red {
  color: red;
}
.green {
  color: green;
}
.bgred {
  background-color: red;
}
.bggreen {
  background-color: green;
}
.table {
  display: flex;
  justify-content: center;
}

/* deep selectors */
::v-deep(.text) {}
/* shorthand */
:deep(.text) {
  background-color: green;
}

/* targeting slot content */
::v-slotted(.text) {}
/* shorthand */
:slotted(.text) {}

/* one-off global rule */
::v-global(.text) {}
/* shorthand */
:global(.text) {}

</style>
