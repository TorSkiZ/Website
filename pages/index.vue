<script setup lang="ts">
  useHead({
    title: 'Homepage',
    meta: [
      {
        name: 'description',
        content: 'Homepage of my website.',
      },
    ],
  })
</script>

<template>
  <section class="bg-first p-8 rounded-2xl shadow-md">
    <h1 class="text-3xl font-bold mb-4">Homepage</h1>
    <p class="leading-relaxed">Under development...</p>
    <HyperLink href="https://github.com/TorSkiZ/Website" label="GitHub" />
  </section>
</template>
