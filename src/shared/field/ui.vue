<script lang="ts" setup>
import {useSlots} from "vue";

  interface Props {
    onInputChange?: Function
    onSearch?: () => void
    disabled?: boolean
    size?: 'm' | 'l'
    placeholder?: string
  }

  const props = defineProps<Props>()
  const {disabled = false, size = 'm', placeholder = '', onInputChange = () => {}, onSearch = () => {}} = props;
  const slots = useSlots()
</script>

<template>
  <div :class="[
      'field',
      `disabled_${disabled}`,
      `size_${size}`,
      `left-icon__${Boolean(slots.leftIcon)}`,
      `right-icon__${Boolean(slots.rightIcon)}`
      ]">
    <slot name="label"></slot>
    <div class="field__container">
      <div v-if="slots.leftIcon" class="field__left-icon" @click="onSearch">
        <slot name="leftIcon"></slot>
      </div>
      <input class="field__input"
             type="text"
             :placeholder="placeholder"
             :disabled="disabled"
             @input="(e) => onInputChange(e.target.value)"
             @keyup.enter="(e) => onSearch(e.target.value)">
      <div v-if="slots.rightIcon" class="field__right-icon" @click="onSearch">
        <slot name="rightIcon"></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .field:deep(.typography) {
    color: var(--grayscale-hard)
  }

  .field__container{
    position: relative;
  }

  .field__input {
    width: 100%;
    border-radius: 4px;
    border: 1px solid var(--grayscale-light);
    background-color: var(--main-surface);
    color: var(--main-on-surface);
    line-height: 1.5;
    transition: all 0.2s ease-in-out;
  }

  .field__input:focus{
    border: 1px solid var(--main-secondary);
    box-shadow: var(--shadow-secondary-m);
    caret-color: var(--main-secondary);
  }

  .field__input:disabled{
    background-color: var(--grayscale-lightest);
    color: var(--grayscale-light);
  }

  .field__input::placeholder{
    color: var(--grayscale-hard)
  }

  .field__left-icon,
  .field__right-icon{
    position: absolute;
    cursor: pointer;
  }

  .field.size_m .field__input{
    padding: 8px 16px;
    font-size: 16px;
  }

  .field.size_l .field__input{
    padding: 12px 16px;
    font-size: 24px;
  }

  .field.size_m.left-icon__true .field__input{
    padding-left: 40px;
  }

  .field.size_m.right-icon__true .field__input{
    padding-right: 40px;
  }

  .field.size_l.left-icon__true .field__input{
    padding-left: 52px;
  }

  .field.size_l.right-icon__true .field__input{
    padding-right: 52px;
  }
  .field.left-icon__true.size_m .field__left-icon{
    width: 24px;
    height: 24px;
    top: 8px;
    left: 8px;
  }

  .field.left-icon__true.size_l .field__left-icon{
    width: 36px;
    height: 36px;
    padding: 6px;
    top: 12px;
    left: 8px;
  }

  .field.right-icon__true.size_m .field__right-icon{
    width: 24px;
    height: 24px;
    top: 8px;
    right: 8px;
  }

  .field.right-icon__true.size_l .field__right-icon{
    width: 36px;
    height: 36px;
    padding: 6px;
    top: 12px;
    right: 8px;
  }

</style>