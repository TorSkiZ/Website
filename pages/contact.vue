<script setup lang="ts">
  useHead({
    title: 'Contact',
    meta: [
      {
        name: 'description',
        content: 'Contact with me.',
      },
    ],
  })

  interface IconKeys {
    email: number
    linkedin: number
    github: number
    discord: number
  }

  const iconKeys = ref<IconKeys>({
    email: 0,
    linkedin: 0,
    github: 0,
    discord: 0,
  })

  function resetIcon(iconName: keyof IconKeys) {
    iconKeys.value[iconName]++
  }
</script>

<template>
  <BodySection>
    <BodyHeader>Contact</BodyHeader>
    <div class="flex justify-between items-center">
      <HyperLink
        href="mailto:wiktor.wasinski@wiciu.pl"
        class="flex flex-col items-center gap-1"
        @mouseenter="resetIcon('email')"
      >
        <IconifyIcon :key="iconKeys.email" icon="line-md:email" :size="56" />
        Email
      </HyperLink>
      <HyperLink
        href="https://www.linkedin.com/in/wiktor-wasi%C5%84ski-649118211/"
        class="flex flex-col items-center gap-1"
        @mouseenter="resetIcon('linkedin')"
      >
        <IconifyIcon :key="iconKeys.linkedin" icon="line-md:linkedin" :size="56" />
        LinkedIn
      </HyperLink>
      <HyperLink
        href="https://github.com/TorSkiZ"
        class="flex flex-col items-center gap-1"
        @mouseenter="resetIcon('github')"
      >
        <IconifyIcon :key="iconKeys.github" icon="line-md:github" :size="56" />
        GitHub
      </HyperLink>
      <HyperLink
        href="https://discordapp.com/users/927660826284937276/"
        class="flex flex-col items-center gap-1"
        @mouseenter="resetIcon('discord')"
      >
        <IconifyIcon :key="iconKeys.discord" icon="line-md:discord" :size="56" />
        Discord
      </HyperLink>
    </div>
  </BodySection>
</template>
