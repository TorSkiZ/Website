<script setup lang="ts">
  const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="bg-third dark:bg-third-dark p-1 text-center">
    <p class="text-first dark:text-first-dark">
      © {{ currentYear }} wiciu.pl. This project is licensed under the
      <a
        href="https://raw.githubusercontent.com/TorSkiZ/Website/refs/heads/main/LICENSE"
        target="_blank"
        class="hover:text-second dark:hover:text-fourth-dark transition-colors duration-200 underline"
      >
        MIT License
      </a>
    </p>
  </footer>
</template>
