<script setup lang="ts">
  defineOgImage({
    url: '/og-image.png',
  })
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout />
  </div>
</template>

<style>
  .page-enter-active,
  .page-leave-active {
    transition:
      transform 0.2s ease-out,
      opacity 0.2s ease-out,
      filter 0.2s ease-out;
  }
  .page-enter-from {
    opacity: 0;
    transform: scale(0.98);
    filter: blur(2px);
  }
  .page-leave-to {
    opacity: 0;
    transform: scale(1.02);
    filter: blur(2px);
  }
</style>
