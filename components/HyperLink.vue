<script setup lang="ts">
  const props = defineProps({
    href: {
      type: String,
      required: true,
    },
  })
</script>

<template>
  <a
    :href="props.href"
    target="_blank"
    class="inline-flex flex-col items-center gap-1 hover:text-second dark:hover:text-fourth-dark transition-colors duration-200 underline text-white"
  >
    <slot />
  </a>
</template>
