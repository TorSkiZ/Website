<template>
  <div class="bg-third dark:bg-second-dark p-2 mx-auto rounded-2xl shadow-md">
    <nav class="flex gap-2">
      <NavButton to="/" label="Home" />
      <NavButton to="/about" label="About" />
      <NavButton to="/portfolio" label="Portfolio" />
      <NavButton to="/contact" label="Contact" />
      <ColorModePicker />
    </nav>
  </div>
</template>
