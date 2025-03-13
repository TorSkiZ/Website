<script setup lang="ts">
  import { ref, onMounted, onUnmounted } from 'vue'

  interface Particle {
    x: number
    y: number
    vx: number
    vy: number
    radius: number
  }

  const canvasRef = ref<HTMLCanvasElement | null>(null)
  let animationFrameId: number
  const particles: Particle[] = []
  const mouse = { x: 0, y: 0 }
  const mouseRadius = 100

  const setCanvasSize = () => {
    if (canvasRef.value) {
      const width = window.innerWidth
      const height = window.innerHeight
      canvasRef.value.width = width
      canvasRef.value.height = height
      return { width, height }
    }
    return { width: 0, height: 0 }
  }

  const initParticles = (count: number) => {
    const { width, height } = setCanvasSize()
    particles.length = 0
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        radius: Math.random() * 3 + 1,
      })
    }
  }

  const updateParticles = () => {
    if (!canvasRef.value) return
    const { width, height } = canvasRef.value
    const minSpeed = 0.3
    particles.forEach(p => {
      const dx = p.x - mouse.x,
        dy = p.y - mouse.y
      const distance = Math.sqrt(dx * dx + dy * dy)
      if (distance < mouseRadius) {
        const force = (mouseRadius - distance) / mouseRadius
        const angle = Math.atan2(dy, dx)
        p.vx += Math.cos(angle) * force * 0.5
        p.vy += Math.sin(angle) * force * 0.5
      }
      p.x += p.vx
      p.y += p.vy
      p.vx *= 0.98
      p.vy *= 0.98
      if (Math.abs(p.vx) < minSpeed) p.vx = p.vx < 0 ? -minSpeed : minSpeed
      if (Math.abs(p.vy) < minSpeed) p.vy = p.vy < 0 ? -minSpeed : minSpeed
      if (p.x < 0 || p.x > width) p.vx *= -1
      if (p.y < 0 || p.y > height) p.vy *= -1
    })
  }

  const drawParticles = (ctx: CanvasRenderingContext2D) => {
    particles.forEach(p => {
      ctx.beginPath()
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
      ctx.fillStyle = 'rgba(255, 255, 255, 0.7)'
      ctx.fill()
    })
  }

  const animate = () => {
    if (!canvasRef.value) return
    const ctx = canvasRef.value.getContext('2d')
    if (!ctx) return
    const { width, height } = setCanvasSize()
    const styles = getComputedStyle(document.documentElement)
    const isDarkMode = document.documentElement.classList.contains('dark')
    const firstColorVariable = isDarkMode ? '--tw-second-dark' : '--tw-second'
    const secondColorVariable = isDarkMode ? '--tw-fourth-dark' : '--tw-fourth'
    const gradient = ctx.createLinearGradient(0, 0, width, height)
    gradient.addColorStop(0, styles.getPropertyValue(firstColorVariable).trim())
    gradient.addColorStop(1, styles.getPropertyValue(secondColorVariable).trim())
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, width, height)
    updateParticles()
    drawParticles(ctx)
    animationFrameId = requestAnimationFrame(animate)
  }

  const onResize = () => {
    setCanvasSize()
    initParticles(100)
  }

  const onMouseMove = (e: MouseEvent) => {
    mouse.x = e.clientX
    mouse.y = e.clientY
  }

  onMounted(() => {
    setCanvasSize()
    initParticles(100)
    animate()
    window.addEventListener('resize', onResize)
    window.addEventListener('mousemove', onMouseMove)
  })

  onUnmounted(() => {
    cancelAnimationFrame(animationFrameId)
    window.removeEventListener('resize', onResize)
    window.removeEventListener('mousemove', onMouseMove)
  })
</script>

<template>
  <canvas ref="canvasRef" class="fixed top-0 left-0 w-full h-full z-[-1]" />
</template>
