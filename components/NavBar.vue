<script setup lang="ts">
  const isMenuOpen = ref(false)
  const iconKey = ref(0)

  function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value
    iconKey.value++
  }
</script>

<template>
  <div class="bg-third dark:bg-second-dark p-2 mx-auto rounded-2xl shadow-md">
    <div class="flex items-center justify-between">
      <button class="md:hidden mx-auto" @click="toggleMenu">
        <IconifyIcon
          :key="iconKey"
          :icon="
            isMenuOpen ? 'line-md:menu-to-close-transition' : 'line-md:close-to-menu-transition'
          "
          :size="32"
        />
      </button>
    </div>
    <transition name="menu">
      <nav v-if="isMenuOpen" class="mt-2 md:hidden overflow-hidden">
        <div class="flex flex-col gap-2">
          <NavButton to="/" label="Home" />
          <NavButton to="/about" label="About" />
          <NavButton to="/portfolio" label="Portfolio" />
          <NavButton to="/contact" label="Contact" />
          <ColorModePicker />
        </div>
      </nav>
    </transition>
    <nav class="hidden md:flex md:items-center md:gap-4">
      <div class="flex flex-row gap-2 items-center">
        <NavButton to="/" label="Home" />
        <NavButton to="/about" label="About" />
        <NavButton to="/portfolio" label="Portfolio" />
        <NavButton to="/contact" label="Contact" />
        <ColorModePicker />
      </div>
    </nav>
  </div>
</template>

<style scoped>
  .menu-enter-active,
  .menu-leave-active {
    transition:
      max-height 0.3s ease,
      opacity 0.3s ease;
  }
  .menu-enter-from,
  .menu-leave-to {
    max-height: 0;
    opacity: 0;
  }
  .menu-enter-to,
  .menu-leave-from {
    max-height: 500px;
    opacity: 1;
  }
</style>
