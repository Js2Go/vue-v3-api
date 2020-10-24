<template>
  <div id="demo">
    <div :class="{ shake: noActivated }">
      <button @click="toggle">Click me</button>
      <span v-if="noActivated">Oh no!</span>
    </div>

    <transition name="animate__animated animate__jello">
      <p v-if="noActivated">hello</p>
    </transition>

    <div
      @mousemove="xCoordinate"
      :style="{ backgroundColor: `hsl(${x}, 80%, 50%)` }"
      class="movearea"
    >
      <h3>Move your mouse across the screen...</h3>
      <p>x: {{ x }}</p>
    </div>
  </div>


  <div id="demo1">
    <input v-model="view" type="radio" value="v-a" id="a"><label for="a">A</label>
    <input v-model="view" type="radio" value="v-b" id="b"><label for="b">B</label>
    <transition name="component-fade" mode="out-in">
      <component :is="view"></component>
    </transition>
  </div>

  <div id="flip-list-demo">
    <button @click="shuffle">Shuffle</button>
    <!-- <transition-group> 组件还有一个特殊之处。不仅可以进入和离开动画，还可以改变定位。要使用这个新功能只需了解新增的 v-move class，它会在元素的改变定位的过程中应用 -->
    <transition-group name="flip-list" tag="ul">
      <li v-for="item in items" :key="item">
        {{ item }}
      </li>
    </transition-group>
  </div>
</template>

<script>
import { ref } from 'vue'
import Va from './Va.vue'
import Vb from './Vb.vue'

export default {
  name: 'Animate',
  components: {
    'v-a': Va,
    'v-b': Vb
  },
  setup() {
    const noActivated = ref(false)
    const view = ref('v-a')
    const items = ref([1, 2, 3, 4, 5, 6, 7, 8, 9])

    const x = ref(0)

    const toggle = () => {
      noActivated.value = !noActivated.value
    }

    const shuffle = () => {
      items.value = _.shuffle(items.value)
    }

    const xCoordinate = e => {
      x.value = e.clientX
    }

    return {
      noActivated,
      toggle,
      x,
      xCoordinate,
      view,
      items,
      shuffle
    }
  }
}
</script>

<style lang="scss" scoped>
.shake {
  animation: shake .82s cubic-bezier(.36, .07, .19, .97) both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
}

.movearea {
  transition: .2s background-color ease;
}

@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}

.slide-fade-enter-active {
  transition: all .3s ease-out;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1, .5, .8, 1);
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.3s ease;
}

.component-fade-enter-from,
.component-fade-leave-to {
  opacity: 0;
}

// <transition-group> 组件还有一个特殊之处。不仅可以进入和离开动画，还可以改变定位。要使用这个新功能只需了解新增的 v-move class，它会在元素的改变定位的过程中应用
.flip-list-move {
  transition: transform 0.8s ease;
}
</style>
