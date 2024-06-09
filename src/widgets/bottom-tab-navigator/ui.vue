<script lang="ts" setup>
import {Button} from "@/shared/button";
import {UserMenu} from "@/features/header/user-menu";
import {Icon} from "@/shared/icon";
import {Navigation} from "@/features/header/navigation";
import {Container} from "@/shared/container"


import {storeToRefs} from "pinia";

import { usePersonStore } from "@/entities/person";
import {reactive, ref} from "vue";

const personStore = usePersonStore();
const { person, isAuth } = storeToRefs(personStore);
const setIsAuth = personStore.setIsAut;

const userMenu = reactive({
	avatar: person.value.avatar,
	name: person.value.name,
	menu: [
		{ label: 'Профайл', link: '/profile'},
		{ label: 'Выйти', action: 'logout'},
	]
})

const navItems = reactive([
	{label: 'Каталог', icon: 'menu', count: '', link: '' },
	{label: 'Избранное', icon: 'favorites', count: '', link: '/favorites' },
	{label: 'Заказы', icon: 'orders', count: '', link: '/orders' },
	{label: 'Корзина', icon: 'cart', count: 1, link: '/cart' }
]);


const dropDownIsHidden = ref(true);
const onClickLogin = (action: string) => setIsAuth(true);
const toggleDropdownVisibility = () =>  dropDownIsHidden.value = !dropDownIsHidden.value;


</script>


<template>
	<div class="bottom-tab-navigator">
		<Container>
			<div class="bottom-tag-navigator__content">
				<Navigation :data="navItems" />
				<div class="bottom-tag-navigator__user-menu">
					<UserMenu v-if="isAuth" :data="userMenu" />
					<Button
							v-else
							class="bottom-tab-navigator__login-btn"
							@click="onClickLogin"
					>
						Войти
						<template #rightIcon>
							<Icon type="login"/>
						</template>
					</Button>
				</div>
			</div>
		</Container>
	</div>
</template>

<style scoped>
	.bottom-tab-navigator {
		position: fixed;
		bottom: 0;
		left: 0;
		display: none;
		width: 100%;
		height: 56px;
		padding: 0 16px;
		background-color: var(--main-surface);
		box-shadow: var(--shadow-default-s);
		z-index: 1;
	}

	.bottom-tab-navigator .bottom-tag-navigator__content {
		position: relative;
		display: grid;
		grid-template-columns: 1fr max-content;
		align-items: center;
		gap: 5%;
		padding-top: 3px;
	}

	.bottom-tab-navigator:deep(.header-navigation__list) {
		justify-content: space-between;
	}

	.bottom-tab-navigator:deep(.header-navigation__list path) {
		fill: var(--main-on-surface);
	}

	.bottom-tab-navigator:deep(.item) {
		gap: 4px;
	}

	.bottom-tab-navigator:deep(.item-count) {
		top: -3px;
		right: -2px;
	}

	.bottom-tab-navigator:deep(.user-menu) {
		padding: 5px;
	}

	.bottom-tab-navigator:deep(.user-menu){
		position: static;
		box-shadow: none;
	}

	.bottom-tab-navigator:deep(.user-menu.is-open__true .user-menu__list){
		top: unset;
		bottom: 100%;
		left: 0;
		width: 100%;
		box-shadow: none;
		border-radius: 8px 8px 0 0;
	}


	@media screen and (max-width: 767px){
		.bottom-tab-navigator {
			display: flex;
		}
	}
</style>