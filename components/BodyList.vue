<script setup lang="ts">
  const slots = useSlots()
</script>

<template>
  <ul class="list-disc pl-4 [&>li>p>span]:mr-2 [&>li>p>span]:align-middle text-white">
    <li v-for="(child, index) in slots.default?.() ?? []" :key="index">
      <component :is="child" class="flex space-x-2" />
    </li>
  </ul>
</template>
