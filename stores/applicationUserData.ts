import { defineStore } from 'pinia'
import { applicationUsersData } from '@/stores/applicationUsersData'

export const applicationUserData = defineStore('user' , {

    state: () => ({
        authenticated: false,
    }) ,  

    actions : {
        checkUserAuthentication(param:any){
            const usersDataSource = applicationUsersData()
            const users = usersDataSource.users
            const result :any = users.filter((user:any)=> {
                return user.email == param.email
            }) 
            if (result[0].password == param.password) {
                this.authenticated = true
                navigateTo('/dashboard')
            }else {
                this.authenticated = false
            }
                     
        }
    }
                
})