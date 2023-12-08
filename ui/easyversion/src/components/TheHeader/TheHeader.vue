<template>
    <el-row>
        <el-col :span="2">
            LOGO
        </el-col>
        <el-col :span="6">
            让文档不再是理想
        </el-col>
        <el-col :span="16">
            <Login/>
        </el-col>
    </el-row>
</template>

<script setup lang="ts">
import Login from './Login.vue';

</script>

<style scoped>
</style>
