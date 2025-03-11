<script setup lang="ts">
  const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="bg-third p-1 text-center">
    <p class="text-first">
      © {{ currentYear }} wiciu.pl. This project is licensed under the
      <a
        href="https://raw.githubusercontent.com/TorSkiZ/Website/refs/heads/main/LICENSE"
        target="_blank"
        class="hover:text-second transition-colors duration-200 underline"
      >
        MIT License
      </a>
    </p>
  </footer>
</template>
