<script setup lang="ts">
  import { Icon } from '@iconify/vue'

  const props = defineProps({
    icon: {
      type: String,
      required: true,
    },
    size: {
      type: [Number, String],
      default: 24,
    },
    color: {
      type: String,
      default: null,
    },
  })
</script>

<template>
  <Icon :icon="props.icon" :width="props.size" :height="props.size" :color="props.color" />
</template>
