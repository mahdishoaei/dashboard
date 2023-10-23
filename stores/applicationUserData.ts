import { defineStore } from 'pinia'

export const applicationUserData = defineStore('user' , {

    state: () => ({
        authenticated: false,
    }) ,  

    actions : {}
    
})