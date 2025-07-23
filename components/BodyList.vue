<script setup lang="ts">
  const slots = useSlots()
</script>

<template>
  <ul class="list-disc pl-4 [&>li>p>span]:mr-2 [&>li>p>span]:align-middle text-white">
    <li v-for="(child, index) in slots.default?.() ?? []" :key="index">
      <component
        :is="child"
        class="flex flex-col space-y-1 sm:flex-row sm:space-y-0 sm:space-x-2"
      />
    </li>
  </ul>
</template>
