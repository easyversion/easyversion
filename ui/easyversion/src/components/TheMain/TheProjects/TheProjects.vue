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
            <tr v-for="item in projects" :key="item.id">
                <td>
                    {{ item.name }}
                </td>
                <td>
                    {{ item.versions }}
                </td>
                <td>
                    <button>详情</button>
                </td>
                <td>
                    <button @click="onEntrance(item)">进入</button>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script setup lang="ts">
import { projects } from './projects.json'
import { useRouter } from 'vue-router'
import type { ArticleInterface , ProjectInterface} from './ProjectDef'

const router = useRouter();

const onEntrance  = (project : ProjectInterface) => {
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
