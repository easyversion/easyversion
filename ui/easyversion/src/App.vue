<template>
      <el-container>
      <el-header height="30px"><TheHeader/></el-header>
      <el-main>
        <TheMain/>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
</template>

<script setup lang="ts">
import TheHeader from './components/TheHeader/TheHeader.vue'
import TheMain from './components/TheMain/TheMain.vue'



</script>

<style scoped>
</style>
