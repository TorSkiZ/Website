<script setup lang="ts">
  import HyperLink from '~/components/HyperLink.vue'

  useHead({
    title: 'Home',
  })
</script>

<template>
  <section class="bg-first p-8 rounded-2xl shadow-md">
    <h1 class="text-3xl font-bold mb-4">Welcome to my website!</h1>
    <p class="leading-relaxed">Under development...</p>
    <HyperLink href="https://github.com/TorSkiZ/Website" label="GitHub" />
  </section>
</template>
