<script lang="ts" setup>
import {reactive, ref} from "vue";
import { RouterLink } from "vue-router";
import {Navigation} from "@/features/header/navigation";
import {UserMenu} from "@/features/header/user-menu";
import {DropdownMenu} from "@/features/header/dropdown";
import { usePersonStore } from "@/entities/person";
import { useScreenStore } from "@/entities/screen";
import {Container} from '@/shared/container'
import {Logo} from '@/shared/logo'
import {Button} from '@/shared/button'
import {Icon} from '@/shared/icon'
import {Field} from "@/shared/field";
import {storeToRefs} from "pinia";

const screenStore = useScreenStore();
const { platform } = storeToRefs(screenStore);

const personStore = usePersonStore();

const { person, isAuth } = storeToRefs(personStore);
const setIsAuth = personStore.setIsAut;


const navItems = reactive([
  {label: 'Избранное', icon: 'favorites', count: '', link: '/favorites' },
  {label: 'Заказы', icon: 'orders', count: '', link: '/orders' },
  {label: 'Корзина', icon: 'cart', count: 1, link: '/cart' }
]);

const userMenu = reactive({
  avatar: person.value.avatar,
  name: person.value.name,
  menu: [
    { label: 'Профайл', link: '/profile'},
    { label: 'Выйти', action: 'logout'},
  ]
})

const dropDownIsHidden = ref(true);

const onChangeSearch = (value: string) => console.log(value);
const onSearch = () => console.log('SEND TO SERVER');
const onClickLogin = (action: string) => setIsAuth(true);
const toggleDropdownVisibility = () =>  dropDownIsHidden.value = !dropDownIsHidden.value;
</script>

<template>
  <header class="header">
    <div class="header__content">
      <Container class="header__container">
        <div class="header__logo">
					<RouterLink to="/">
						<Logo orientation="horizontal" colorfull bg-color="white" :withText="platform === 'desktop'"/>
					</RouterLink>
				</div>
        <div class="header__catalog">
          <Button color="secondary" @click="toggleDropdownVisibility">
            <template v-slot:leftIcon>
              <Icon type="menu" />
            </template>
            Каталог
          </Button>
        </div>
        <div class="header__search">
          <Field
              size="m"
              placeholder="Найти товар"
              :on-input-change="onChangeSearch"
              :on-search="onSearch">
            <template v-slot:rightIcon>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 10.5C2.5 6.08172 6.08172 2.5 10.5 2.5C14.9183 2.5 18.5 6.08172 18.5 10.5C18.5 14.9183 14.9183 18.5 10.5 18.5C6.08172 18.5 2.5 14.9183 2.5 10.5ZM10.5 3.5C6.63401 3.5 3.5 6.63401 3.5 10.5C3.5 14.366 6.63401 17.5 10.5 17.5C14.366 17.5 17.5 14.366 17.5 10.5C17.5 6.63401 14.366 3.5 10.5 3.5Z" fill="#414141"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.4463 15.4464C15.6415 15.2512 15.9581 15.2512 16.1534 15.4464L21.3534 20.6464C21.5486 20.8417 21.5486 21.1583 21.3534 21.3535C21.1581 21.5488 20.8415 21.5488 20.6463 21.3535L15.4463 16.1535C15.251 15.9583 15.251 15.6417 15.4463 15.4464Z" fill="#414141"/>
              </svg>
            </template>
          </Field>
        </div>
        <div class="header__navigation">
          <Navigation :data="navItems" />
        </div>
        <div class="header__user-menu">
          <UserMenu v-if="isAuth" :data="userMenu" />
          <Button
              v-else
							class="header__login-btn"
              @click="onClickLogin"
          >
            Войти
            <template #rightIcon>
              <Icon type="login"/>
            </template>
          </Button>
        </div>
      </Container>
    </div>
    <div v-if="!dropDownIsHidden" class="header__dropdown-menu">
      <DropdownMenu @mouseleave="toggleDropdownVisibility"></DropdownMenu>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  left: 0;
  height: 72px;
  background: var(--main-surface);
}
.header__content{
  box-shadow: var(--shadow-default-s);
  height: 100%;
  position: relative;
  z-index: 1;
  background-color: var(--main-surface);
}
.header__container {
  display: flex;
  align-items: center;
  height: 100%;
}

.header__logo:deep(svg){
	flex-shrink: 0;
}

.header__catalog {
  width: 140px;
  margin-left: 40px;
}

.header__search{
  width: max-content;
	flex-grow: 1;
  margin-left: 20px;
}

.header__navigation{
  margin: 0 24px 0 40px;
}

.header__user-menu{
  position: relative;
  width: 217px;
  height: 100%;
  padding: 8px;
}


.header__user-menu:deep(.button){
	margin-top: 8px;
}

@media screen and (max-width: 1207px){
	.header__logo:deep(svg){
		width: 49px;
	}

	.header__user-menu{
		width: max-content;
	}

	.header__catalog{
		width: unset;
		margin-left: 20px;
	}

	.header__navigation{
		margin: 0 16px 0 20px;
	}

	.header__user-menu{
		width: unset;
	}

	.header__user-menu:deep(.user-menu){
		width: max-content;
	}

	.header__user-menu:deep(.button .typography),
	.header__catalog:deep(.typography){
		display: none;
	}
}

@media screen and (max-width: 767px) {
	.header {
		height: 56px;
	}

	.header__container {
		padding: 0 16px;
	}

	.header__catalog,
	.header__navigation,
	.header__user-menu{
		display: none;
	}

	.header__logo a {
		display: flex;
		align-items: center;
	}

	.header__logo:deep(svg){
		width: 39px;
	}

}
</style>
