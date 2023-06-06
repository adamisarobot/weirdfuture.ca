<template>
  <p
    :class="{ '-left-1.5 -top-0.5': top, '-right-1.5 -bottom-0.5': bottom }"
    class="absolute m-0 -skew-x-[15deg] border-2 border-black bg-white py-1 px-3"
  >
    <slot></slot>
  </p>
</template>

<script setup lang="ts">
defineProps({
  top: { type: Boolean, default: false },
  bottom: { type: Boolean, default: false }
});
</script>

<style lang="scss" scoped></style>
