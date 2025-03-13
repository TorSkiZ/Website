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
    class="bg-second dark:bg-first-dark hover:bg-first dark:hover:bg-fourth-dark text-first dark:text-fourth-dark hover:text-second dark:hover:text-first-dark rounded-lg transition-colors duration-200 px-4 py-2"
  >
    {{ props.label }}
  </NuxtLink>
</template>
