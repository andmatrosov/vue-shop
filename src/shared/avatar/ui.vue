<script lang="ts" setup>
interface Props {
  img: string
}

const { img } = defineProps<Props>()
</script>

<template>
  <div>
    <img class="avatar" :src="img" alt="avatar">
  </div>
</template>

<style scoped>
  .avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
  }
</style>