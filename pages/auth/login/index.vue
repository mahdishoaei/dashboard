<template>
    <div class="login-container">
    <div class="form-container d-flex flex-column px-6 py-8">
      <span class="app-font-size-16 app-font-weight-500 app-color-white"> Sign in</span>
      <CoreInput class="mt-6" label="Email"/>
      <CoreInput class="mt-2" label="Password"/>
      <CoreBtn class="mt-4" background="primary" name="submit" width="85px" height="30px" borderRadius="5px"/>
    </div>
    </div>
</template>


<script setup>
definePageMeta({
    layout: "auth",
});
</script>

<style scoped>
.login-container{
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url('https://img.freepik.com/free-photo/colleagues-giving-fist-bump_53876-64857.jpg?size=626&ext=jpg&ga=GA1.1.1903342389.1696077639&semt=sph');
    background-size: 100%;
    background-attachment: fixed;
}
.form-container{
    background: rgba( 0, 0, 0, 0.55 );
    backdrop-filter: blur( 7px );
    -webkit-backdrop-filter: blur( 7px );
    border-radius: 10px;
    width: 330px;
    height: 290px;
}
</style>