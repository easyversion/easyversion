<template>
    <h3>这里已经进入了项目</h3>
    <div v-if="project_item === undefined">
        <p>没有找到对应的项目</p>
    </div>
    <div v-else>
        <p>项目ID是 {{ project_item }}</p>
        <p>项目ID是 {{ project_item?.id }}</p>
        <p>项目名称是 {{ project_item?.name }}</p>
        <p>项目版本是 {{ project_item?.version }}</p>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { projects } from './projects.json'

const route = useRoute()

const project_item = projects.find((item) => {
    return item.id === route.params.id
})



</script>

<style scoped>
</style>