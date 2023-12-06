<template>
<ul>
  <li v-for="project in projects_list.projects" :key = "project.id">
    {{ project.name }} | {{ project.last_version }} | {{ project.brif_introduction }} | <el-button type="info" @click="entry_detail(project.id)">详情</el-button> | <el-button type="primary" @click="entry_project(project.id)">进入</el-button>
  </li>
</ul>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

interface Project {
    id : string,
    name : string,
    last_version? : string,
    brif_introduction? : string
}

interface ProjectsList {
    projects? : Project[]
}

const projects_list : ProjectsList = reactive({
    projects : [
        {
            id : 'project1',
            name : 'OS',
            last_version : '1.0.0',
            brif_introduction : 'An OS'
        },
        {
            id : 'project2',
            name : 'WiKi',
            last_version : '1.0.1',
            brif_introduction : 'A WiKi'
        },
        {
            id : 'project3',
            name : 'Game',
            last_version : '1.0.1',
            brif_introduction : 'A GAME'
        }
    ]
})

const entry_detail = (project_id: string ) => {
  console.log('Entry detail of {project_id}')
}

const entry_project = (project_id: string ) => {
  console.log('Entry project of {project_id}')
}


</script>

<style scoped>
</style>