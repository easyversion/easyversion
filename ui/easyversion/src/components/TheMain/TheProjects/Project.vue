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
                  <el-select v-model="select_version" class="m-2" placeholder="Select">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    />
                  </el-select>
                </div>
              </div>
            </el-header>
            <el-container>
                <el-aside width="200px"><el-tree :data="project_item?.articles" :props="defaultProps" @node-click="handleNodeClick" /></el-aside>
                <el-main>
                  这里展示文章
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

const route = useRoute()

const project_item = projects.find((item) => {
    return item.id === route.params.id
})

interface Article {
  id: string;
  title: string;
  version: string;
  chilren?: Article[];
}

const handleNodeClick = (data: Article) => {
  console.log(data)
}

const defaultProps = {
  children: 'articles',
  label: 'title',
}

const select_version = ref('')

const options = [
  {
    value: '4.0.1',
    label: '4.0.1',
  },
  {
    value: '3.0.1',
    label: '3.0.1',
  },
  {
    value: '2.0.1',
    label: '2.0.1',
  },
  {
    value: '1.0.1',
    label: '1.0.1',
  },
  {
    value: '0.0.1',
    label: '0.0.1',
  },
]

</script>

<style scoped></style>