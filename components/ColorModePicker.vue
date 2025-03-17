<template>
  <ClientOnly>
    <div class="flex items-center justify-center">
      <button
        :class="[
          $colorMode.value === 'dark' ? 'text-[#94908D]' : 'text-[#F09200]',
          'flex transition-colors duration-1000',
        ]"
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
  </ClientOnly>
</template>
