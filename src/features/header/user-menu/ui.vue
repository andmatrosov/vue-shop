<script lang="ts" setup>
  import { RouterLink } from "vue-router";
  import { ref } from "vue";

  import {Avatar} from "@/shared/avatar";
  import {Typography} from "@/shared/typography";
  import {Button} from "@/shared/button";
  import {Icon} from "@/shared/icon";

  import { usePersonStore } from "@/entities/person";

  const personStore = usePersonStore();
  const setIsAuth = personStore.setIsAut;

  interface Props {
    data: {
      avatar: string;
      name: string;
      menu: {
        label: string;
        link?: string;
        action?: string;
      }[];
    }
  }

  const { data } = defineProps<Props>()

  const isOpen = ref(false);

  const toggleMenu = () => {
    isOpen.value = !isOpen.value
  }

  const onClickItem = (action: string) => {
    if(action === 'logout') {
      setIsAuth(false)
    }
  }
</script>

<template>
  <div :class="['user-menu', `is-open__${isOpen}`]">
    <Avatar
        class="user-menu__avatar"
        :img="data.avatar"
        @click="toggleMenu"
    />
    <Typography
        class="user-menu__name"
        tag-name="span" size="s"
        @click="toggleMenu">
      {{ data.name }}
    </Typography>
    <Button
        class="user-menu__button"
        decoration="none" size="m"
        @click="toggleMenu"
    >
      <template #leftIcon>
        <Icon type="chevron"/>
      </template>
    </Button>
    <ul class="user-menu__list">
      <li v-for="item in data.menu" :key="item.label" class="list__item">
        <RouterLink v-if="item.link" :to="item.link" class="list__link">
          <Typography tag-name="span" class="list__text">
            {{ item.label }}
          </Typography>
        </RouterLink>
        <Typography
            v-else
            tag-name="span"
            size="m"
            class="list__text"
            @click="() => onClickItem(item.action)"
        >
          {{ item.label }}
        </Typography>
      </li>
    </ul>
  </div>
</template>

<style scoped>
  .user-menu {
    position: relative;
    display: grid;
    grid-template-columns: max-content 1fr max-content;
    align-items: center;
    grid-gap: 10px;
    padding: 8px;
    background-color: var(--main-surface);
    z-index: 2;
  }

  .user-menu.is-open__true {
    box-shadow: var(--shadow-default-m);
  }

  .user-menu__avatar,
  .user-menu__name,
  .user-menu__button{
    cursor: pointer;
  }

  .list__link{
    text-decoration: none;
    color: inherit;
  }

  .list__item{
    padding: 4px 8px;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;
    &:hover{
      transform: scale(1.02);
    }
  }

  .user-menu__list{
    position: absolute;
    display: none;
    grid-column: 1 / 4;
    z-index: 0;
  }

  .user-menu__list li {
    background-color: var(--main-surface);
  }

  .user-menu.is-open__true .user-menu__list{
    position: absolute;
    display: block;
		top: 100%;
		right: 0;
		border-radius: 8px 0 8px 8px;
		overflow: hidden;
		box-shadow: var(--shadow-default-m);
  }

  .user-menu .user-menu__button:deep(svg) {
    transition: transform 0.2s ease-in-out;
  }

  .user-menu.is-open__true .user-menu__button:deep(svg) {
    transform: rotate(180deg);
  }

	@media screen and (max-width: 1207px){
		.user-menu {
			grid-template-columns: 1fr;
		}
		.user-menu__list{
			grid-column: unset;
		}
		.user-menu__name,
		.user-menu__button {
			display: none;
		}
	}
</style>