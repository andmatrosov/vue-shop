<script lang="ts" setup>
  import {Avatar} from "@/shared/avatar";
  import {Typography} from "@/shared/typography";
  import {Button} from "@/shared/button";
  import {Icon} from "@/shared/icon";

  interface Props {
    data: {
      avatar: string;
      name: string;
      menu: any[];
    }
  }

  const { data } = defineProps<Props>()
</script>

<template>
  <div class="user-menu">
    <Avatar class="user-menu__avatar" :img="data.avatar"/>
    <Typography class="user-menu__name" tag-name="span" size="s">{{ data.name }}</Typography>
    <Button class="user-menu__button" decoration="none" size="m">
      <template #leftIcon>
        <Icon type="chevron"/>
      </template>
    </Button>
  </div>
</template>

<style scoped>
  .user-menu {
    display: grid;
    grid-template-columns: max-content 1fr max-content;
    align-items: center;
    grid-gap: 10px;
    padding: 8px;
    margin-left: 24px;
  }

  .user-menu__avatar,
  .user-menu__name,
  .user-menu__button{
    cursor: pointer;
  }
  
</style>