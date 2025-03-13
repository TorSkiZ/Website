<template>
  <div class="flex items-center">
    <button
      class="flex transition-colors duration-1000"
      :class="$colorMode.value === 'dark' ? 'text-[#94908D]' : 'text-[#F09200]'"
      @click="$colorMode.preference = $colorMode.value === 'dark' ? 'light' : 'dark'"
    >
      <IconifyIcon
        :key="$colorMode.value"
        :icon="
          $colorMode.value === 'dark'
            ? 'line-md:sunny-outline-to-moon-alt-loop-transition'
            : 'line-md:moon-alt-to-sunny-outline-loop-transition'
        "
      />
    </button>
  </div>
</template>
