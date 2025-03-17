<script setup lang="ts">
  const tabs = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Portfolio', to: '/portfolio' },
    { label: 'Contact', to: '/contact' },
  ]
</script>

<template>
  <div class="flex gap-2">
    <NavButton v-for="(tab, index) in tabs" :key="index" :to="tab.to" :label="tab.label" />
    <ColorModePicker />
  </div>
</template>
