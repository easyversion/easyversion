<template>
    <div>
        <el-container>
            <el-header>
                <TheHeader />
            </el-header>
            <el-main>
                <el-breadcrumb separator="|">
                    <el-breadcrumb-item :to="{ path: '/' }">Welcome</el-breadcrumb-item>
                    <el-breadcrumb-item :to="{ path: '/projects' }">Projects </el-breadcrumb-item>
                </el-breadcrumb>
                <router-view></router-view>
            </el-main>
            <el-footer>页脚</el-footer>
        </el-container>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router'
import TheHeader from './components/TheHeader/TheHeader.vue'

onMounted(() => {
    useRouter().push('/')
})

</script>

<style scoped>
</style>
