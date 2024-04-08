<script lang="ts" setup>
  import {RouterLink} from "vue-router";

  import {Typography} from "@/shared/typography";
  import {Icon} from "@/shared/icon";

  interface Props {
    data: {
      label: string;
      icon: string;
      count: number;
      link: string
    }[]
  }

  const { data } = defineProps<Props>()
</script>

<template>
  <nav class="header-navigation">
    <ul class="header-navigation__list">
      <li v-for="item in data" :key="item.label" class="list__item">
        <RouterLink :to="item.link" class="item">
          <Icon :type="item.icon"/>
          <Typography tag-name="span" size="xs">{{ item.label }}</Typography>
          <span v-if="item.count > 0" class="item__count">{{item.count}}</span>
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
  .header-navigation__list {
    display: flex;
    gap: 24px;
  }
  .item {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;
    text-decoration: none;
    color: var(--main-on-surface);
  }

  .item__count{
    position: absolute;
    top: 0;
    right: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 12px;
    height: 12px;
    border-radius: 4px;
    background: var(--main-primary);
    font-size: 8px;
    color: var(--main-surface);
  }
</style>