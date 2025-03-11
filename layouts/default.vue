<script setup lang="ts">
  import AnimatedBg from '~/components/AnimatedBg.vue'
  import FootBar from '~/components/FootBar.vue'
  import NavBar from '~/components/NavBar.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col space-y-8">
    <AnimatedBg />
    <NavBar />
    <main class="flex-1 container mx-auto p-8">
      <NuxtPage />
    </main>
    <FootBar />
  </div>
</template>
