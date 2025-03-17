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

  const contacts = [
    { id: 'email', href: 'mailto:wiktor.wasinski@wiciu.pl', icon: 'line-md:email', label: 'Email' },
    {
      id: 'linkedin',
      href: 'https://www.linkedin.com/in/wiktor-wasi%C5%84ski-649118211/',
      icon: 'line-md:linkedin',
      label: 'LinkedIn',
    },
    { id: 'github', href: 'https://github.com/TorSkiZ', icon: 'line-md:github', label: 'GitHub' },
    {
      id: 'discord',
      href: 'https://discordapp.com/users/927660826284937276/',
      icon: 'line-md:discord',
      label: 'Discord',
    },
    {
      id: 'buymeacoffee',
      href: 'https://buymeacoffee.com/torskiz',
      icon: 'line-md:buy-me-a-coffee',
      label: 'Buy Me a Coffee',
    },
    {
      id: 'youtube',
      href: 'https://www.youtube.com/@torskiz6115',
      icon: 'line-md:youtube',
      label: 'YouTube',
    },
    {
      id: 'instagram',
      href: 'https://www.instagram.com/wiktor.wasinski.torskiz/',
      icon: 'line-md:instagram',
      label: 'Instagram',
    },
    {
      id: 'facebook',
      href: 'https://www.facebook.com/wiktor.wasinski.torskiz/',
      icon: 'line-md:facebook',
      label: 'Facebook',
    },
    {
      id: 'spotify',
      href: 'https://open.spotify.com/user/wiktorwasinski',
      icon: 'line-md:spotify',
      label: 'Spotify',
    },
  ]

  const iconKeys = ref(
    contacts.reduce(
      (acc, contact) => {
        acc[contact.id] = 0
        return acc
      },
      {} as Record<string, number>,
    ),
  )

  const resetIcon = (id: string) => {
    iconKeys.value[id] = (iconKeys.value[id] || 0) + 1
  }
</script>

<template>
  <BodySection>
    <BodyHeader>Contact</BodyHeader>
    <BodyGrid>
      <template v-for="contact in contacts" :key="contact.id">
        <HyperLink
          :href="contact.href"
          class="flex flex-col items-center gap-1"
          @mouseenter="resetIcon(contact.id)"
        >
          <IconifyIcon :key="iconKeys[contact.id]" :icon="contact.icon" :size="56" />
          {{ contact.label }}
        </HyperLink>
      </template>
    </BodyGrid>
  </BodySection>
</template>
