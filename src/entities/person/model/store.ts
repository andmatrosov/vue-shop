import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'
import { type Person } from "./types";
import avatarIMG from '/assets/avatar.png'

export const usePersonStore = defineStore('person', () => {
    const isAuth = ref(true)
    const person = reactive<Person>({
        name: 'Алексей',
        avatar: avatarIMG
    })
    const setIsAut = (value: boolean) => isAuth.value = value;

    return { isAuth, person, setIsAut }
})
