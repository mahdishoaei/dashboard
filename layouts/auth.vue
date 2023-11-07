<template>
    <slot/>
</template>

<script setup>
import { applicationUsersData } from '@/stores/applicationUsersData.ts'
const { data: response } = await useFetch('/api/users/users')
const usersDataSource = applicationUsersData()
 onMounted(()=> {
    usersDataSource.users = response.value
 })
</script>