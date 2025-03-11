<script setup lang="ts">
  const props = defineProps({
    to: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  })
</script>

<template>
  <NuxtLink
    :to="props.to"
    class="bg-second hover:bg-first text-first hover:text-second rounded-lg transition-colors duration-200 px-4 py-2"
  >
    {{ props.label }}
  </NuxtLink>
</template>
