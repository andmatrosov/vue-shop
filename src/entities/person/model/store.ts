import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'
import { type Person } from "./types";

export const usePersonStore = defineStore('person', () => {
    const isAuth = ref(true)
    const person = reactive<Person>({
        name: 'Алексей'
    })
    const setIsAut = (value: boolean) => isAuth.value = value;

    return { isAuth, person, setIsAut }
})
