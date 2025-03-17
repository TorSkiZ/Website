<template>
  <div class="min-h-screen flex flex-col space-y-8">
    <AnimatedBg />
    <NavBar class="hidden md:block" />
    <MobileNavBar class="md:hidden" />
    <main class="flex-1 container mx-auto px-8">
      <NuxtPage />
    </main>
    <FootBar />
  </div>
</template>
