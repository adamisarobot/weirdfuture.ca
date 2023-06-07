<template>
  <div
    class="panel relative m-[1vmin] inline-block h-52 flex-auto basis-52 overflow-hidden border-2 border-black bg-white bg-gradient-radial shadow-panel"
    :class="panelColor"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps({
  color: { type: String, default: 'white' }
});

const panelColor = computed(() => {
  switch (props.color) {
    case 'blue':
      return 'from-sky-300 to-sky-600';
    case 'red':
      return 'from-red-300 to-red-500';
    case 'green':
      return 'from-green-300 to-green-500';
    case 'yellow':
      return 'from-yellow-300 to-orange-500';
    case 'purple':
      return 'from-purple-300 to-purple-500';
    case 'pink':
      return 'from-pink-300 to-pink-500';
    case 'gray':
      return 'from-gray-300 to-gray-500';
    default:
      return 'from-white to-gray-300';
  }
});
</script>
