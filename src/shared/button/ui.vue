<script lang="ts" setup>
import {Typography} from '@/shared/typography';
import { useSlots } from "vue";

interface Props {
  color?: 'primary' | 'secondary' | 'grayscale' | 'error'
  decoration?: 'default' | 'outline' | 'none'
  size?: 'l' | 'm' | 's'
  disabled?: boolean
}

const props = defineProps<Props>()
const slots = useSlots();

const { color = 'primary', decoration = 'default', size = 'm', disabled = false } = props
const classes = ['button', `color_${color}`, `decoration_${decoration}`, `size_${size}`]
</script>

<template>
  <button :class="classes" :disabled="disabled">
    <slot name="leftIcon" />
    <Typography v-if="slots.default" class="button__text" tag-name="p" size="s"><slot /></Typography>
    <slot name="rightIcon" />
  </button>
</template>

<style scoped>
.button {
  display: flex;
  align-items: center;
  column-gap: 8px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  user-select: none;
  width: 100%;
}
.button.size_m {
  padding: 8px;
}

.button.size_m .button__text{
  font-size: 16px;
}

.button.color_secondary {
  background-color: var(--main-secondary);
  border-color: var(--main-secondary);
  color: var(--main-on-secondary);
}

.button.color_primary{
  background-color: var(--main-primary);
  border-color: var(--main-primary);
  color: var(--main-on-secondary);
}

.button__text {
  width: 100%;
  line-height: 1.5;
  text-align: center;
}
.button.decoration_none{
  background-color: unset;
  border-color: unset;
}

.button.decoration_name:deep(path) {
  fill: var(--main-on-surface);
}
</style>
