<script setup>
  import { onMounted, ref } from 'vue'

  const mounted = ref(false)
  onMounted(() => {
    mounted.value = true
  })

  const colorMode = useColorMode()

  const toggleColorMode = () => {
    colorMode.value = colorMode.value === 'dark' ? 'light' : 'dark'
  }
</script>

<template>
  <div class="bg-third dark:bg-second-dark p-2 mx-auto rounded-2xl shadow-md">
    <nav class="flex gap-2 items-center">
      <NavButton to="/" label="Home" />
      <NavButton to="/about" label="About" />
      <NavButton to="/portfolio" label="Portfolio" />
      <NavButton to="/contact" label="Contact" />
      <button class="flex" @click="toggleColorMode">
        <template v-if="mounted">
          <Icon v-if="colorMode.value === 'dark'" name="line-md:moon" />
          <Icon v-else name="line-md:sunny" />
        </template>
      </button>
    </nav>
  </div>
</template>
