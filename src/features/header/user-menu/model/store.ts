import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'
import { type UserMenu } from "./types";

export const useUserMenuStore = defineStore('user-menu', () => {
    let menu = reactive<UserMenu>([
        { label: 'Профайл', link: '/profile'},
        { label: 'Выйти', action: 'logout'},
    ])
    const setMenu = (newMenu: UserMenu) => menu = newMenu

    return { menu, setMenu }
})
