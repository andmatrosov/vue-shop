<script lang="ts" setup>
import Typography from '@/shared/typography/ui.vue'
interface Props {
  color?: 'primary' | 'secondary' | 'grayscale' | 'error'
  decoration?: 'default' | 'outline' | 'none'
  size?: 'L' | 'M' | 'S'
  disabled?: boolean
}

const props = defineProps<Props>()

const { color = 'primary', decoration = 'default', size = 'M', disabled = false } = props
const classes = ['button', `color_${color}`, `decoration_${decoration}`, `size_${size}`]
</script>

<template>
  <button :class="classes" :disabled="disabled">
    <slot name="leftIcon" />
    <Typography class="button__text" tag-name="p" size="s"><slot /></Typography>
    <slot name="rightIcon" />
  </button>
</template>

<style scoped>
.button {
  display: flex;
  align-items: center;
  column-gap: 8px;
  border-radius: 4px;
  border: 1px solid transparent;
  cursor: pointer;
  user-select: none;
  width: 100%;
}
.button.size_M {
  padding: 8px;
}

.button.color_secondary {
  background-color: var(--main-secondary);
  border-color: var(--main-secondary);
  color: var(--main-on-secondary);
}

.button__text {
  width: 100%;
  text-align: center;
}
</style>
