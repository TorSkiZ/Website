<script setup lang="ts">
  useHead({
    title: 'Contact',
    meta: [
      {
        name: 'description',
        content: 'Get in touch with me through various channels.',
      },
    ],
  })

  interface IconKeys {
    email: number
    linkedin: number
    github: number
    discord: number
    buymeacoffee: number
    youtube: number
    instagram: number
    facebook: number
    spotify: number
  }

  const iconKeys = ref<IconKeys>({
    email: 0,
    linkedin: 0,
    github: 0,
    discord: 0,
    buymeacoffee: 0,
    youtube: 0,
    instagram: 0,
    facebook: 0,
    spotify: 0,
  })

  function resetIcon(iconName: keyof IconKeys) {
    iconKeys.value[iconName]++
  }
</script>

<template>
  <BodySection>
    <BodyHeader>Contact</BodyHeader>
    <BodyGrid>
      <HyperLink href="mailto:wiktor.wasinski@wiciu.pl" @mouseenter="resetIcon('email')">
        <IconifyIcon :key="iconKeys.email" icon="line-md:email" :size="56" />
        Email
      </HyperLink>
      <HyperLink
        href="https://www.linkedin.com/in/wiktor-wasi%C5%84ski-649118211/"
        @mouseenter="resetIcon('linkedin')"
      >
        <IconifyIcon :key="iconKeys.linkedin" icon="line-md:linkedin" :size="56" />
        LinkedIn
      </HyperLink>
      <HyperLink href="https://github.com/TorSkiZ" @mouseenter="resetIcon('github')">
        <IconifyIcon :key="iconKeys.github" icon="line-md:github" :size="56" />
        GitHub
      </HyperLink>
      <HyperLink
        href="https://discordapp.com/users/927660826284937276/"
        @mouseenter="resetIcon('discord')"
      >
        <IconifyIcon :key="iconKeys.discord" icon="line-md:discord" :size="56" />
        Discord
      </HyperLink>
      <HyperLink href="https://buymeacoffee.com/torskiz" @mouseenter="resetIcon('buymeacoffee')">
        <IconifyIcon :key="iconKeys.buymeacoffee" icon="line-md:buy-me-a-coffee" :size="56" />
        Buy Me a Coffee
      </HyperLink>
      <HyperLink href="https://www.youtube.com/@torskiz6115" @mouseenter="resetIcon('youtube')">
        <IconifyIcon :key="iconKeys.youtube" icon="line-md:youtube" :size="56" />
        YouTube
      </HyperLink>
      <HyperLink
        href="https://www.instagram.com/wiktor.wasinski.torskiz/"
        @mouseenter="resetIcon('instagram')"
      >
        <IconifyIcon :key="iconKeys.instagram" icon="line-md:instagram" :size="56" />
        Instagram
      </HyperLink>
      <HyperLink
        href="https://www.facebook.com/wiktor.wasinski.torskiz/"
        @mouseenter="resetIcon('facebook')"
      >
        <IconifyIcon :key="iconKeys.facebook" icon="line-md:facebook" :size="56" />
        Facebook
      </HyperLink>
      <HyperLink
        href="https://open.spotify.com/user/wiktorwasinski"
        @mouseenter="resetIcon('spotify')"
      >
        <IconifyIcon :key="iconKeys.spotify" icon="line-md:spotify" :size="56" />
        Spotify
      </HyperLink>
    </BodyGrid>
  </BodySection>
</template>
