<template>
    <nav>
        <router-link :to="{ name : 'root'}">欢迎</router-link>
        <router-link :to="{ name : 'projects'}" style="margin-left: 30px;" >项目列表</router-link>
    </nav>
    <router-view></router-view>
</template>

<script setup lang="ts">

</script>

<style scoped>
</style>
