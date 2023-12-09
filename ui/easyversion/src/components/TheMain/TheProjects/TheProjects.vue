<template>
    <table border="1">
        <thead>
            <tr>
                <th>名称</th>
                <th>版本</th>
                <th>详情</th>
                <th>进入</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="project in projects" :key="project.id">
                <td>
                    {{ project.name }}
                </td>
                <td>
                    {{ project.version }}
                </td>
                <td>
                    <button>详情</button>
                </td>
                <td>
                    <button @click="onEntrance(project)">进入</button>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script setup lang="ts">
import { projects } from './projects.json'
import { useRouter } from 'vue-router';

const router = useRouter();

interface RootObject {
  projects: Project[];
}

interface Article {
  id: string;
  title: string;
  version: string;
  chilren?: Article[];
}

interface Project {
  name: string;
  version: string;
  id: string;
  articles: Article[];
}

const onEntrance  = (project : Project) => {
    router.push({
        name : 'project',
        params : {
            id : project.id
        }
    })
}


</script>

<style scoped>
</style>
