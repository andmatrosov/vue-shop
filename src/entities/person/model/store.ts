import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'

export const usePersonStore = defineStore('person', () => {
    const isAuth = ref(true)
    const person = reactive({
        name: 'Алексей'
    })
    const setIsAut = (value: boolean) => isAuth.value = value;

    return { isAuth, person, setIsAut }
})
