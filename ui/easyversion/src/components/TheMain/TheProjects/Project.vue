<template>
    <div v-if="project_item === undefined">
        <p>没有找到对应的项目</p>
    </div>
    <div v-else>
        <el-container>
            <el-header>
              <div style="display: flex;">
                <div style="display: flex; flex: 1;">
                  项目名称： {{ project_item?.name }}
                </div>
                <div style="display: flex; flex: 1;">
                  项目版本：{{ project_item.versions }}
                </div>
              </div>
            </el-header>
            <el-container>
                <el-aside width="200px">
                  <el-tree :data="articles" :props="defaultProps" @node-click="handleNodeClick" />
                </el-aside>
                <el-main>
                  包含的文章：{{ project_item.articles }}
                </el-main>
                <el-aside width="200px">这边是参考文档</el-aside>
            </el-container>
        </el-container>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { useRoute } from 'vue-router'
import { projects } from './projects.json'
import type {ProjectInterface, ArticleInterface} from './ProjectDef'

const route = useRoute()

const project_item : ProjectInterface | undefined = projects.find((item) => {
    return item.id === route.params.id
})

const articles : ArticleInterface[] | undefined = project_item?.articles;

const handleNodeClick = (data: ArticleInterface) => {
  console.log(data)
}

const defaultProps = {
  children: 'articles',
  label: 'title',
}

const select_version = ref('')


</script>

<style scoped></style>