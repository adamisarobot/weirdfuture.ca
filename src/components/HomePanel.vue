<template>
  <div
    class="panel relative m-[1vmin] inline-block h-52 flex-auto basis-52 overflow-hidden border-2 border-black bg-white bg-gradient-radial from-yellow-300 to-orange-500 shadow-panel"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  color: { type: String, default: 'white' },
  bottom: Boolean
});
</script>
