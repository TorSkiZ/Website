<script setup lang="ts">
  const isMenuOpen = ref(false)
  const iconKey = ref(0)

  function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value
    iconKey.value++
  }
</script>

<template>
  <div class="container mx-auto px-8">
    <div class="bg-third dark:bg-second-dark p-2 rounded-2xl shadow-md">
      <div class="flex items-center justify-center">
        <button :alt="isMenuOpen ? 'Close menu' : 'Open menu'" @click="toggleMenu">
          <IconifyIcon
            :key="iconKey"
            :icon="
              isMenuOpen ? 'line-md:menu-to-close-transition' : 'line-md:close-to-menu-transition'
            "
          />
        </button>
      </div>
      <transition name="mobile-navbar" mode="out-in">
        <nav v-if="isMenuOpen" class="mt-2">
          <NavItems class="flex-col" />
        </nav>
      </transition>
    </div>
  </div>
</template>

<style scoped>
  .mobile-navbar-enter-active,
  .mobile-navbar-leave-active {
    transition:
      max-height 0.3s ease,
      opacity 0.3s ease;
  }
  .mobile-navbar-enter-from,
  .mobile-navbar-leave-to {
    max-height: 0;
    opacity: 0;
  }
  .mobile-navbar-enter-to,
  .mobile-navbar-leave-from {
    max-height: 500px;
    opacity: 1;
  }
</style>
