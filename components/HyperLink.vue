<script setup lang="ts">
  const props = defineProps({
    href: {
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
  <a
    :href="props.href"
    target="_blank"
    class="hover:text-second transition-colors duration-200 underline"
  >
    {{ props.label }}
  </a>
</template>
