<template>
    <el-row justify="end">
        <el-col :span="12">
            <span>ICON</span><span>EasyVersion</span>
        </el-col>
        <el-col :span="12">
            <el-row justify="end" gutter="1">
                <el-col span="6">
                    <el-input v-model="user_id" type="text" placeholder="Please input user id" />
                </el-col>
                <el-col span="6">
                    <el-input v-model="user_password" type="password" placeholder="Please input password" show-password />
                </el-col>
                <el-col span="6">
                    <el-button>Sign in</el-button>
                </el-col>
                <el-col span="6">
                    <el-button>Sign up</el-button>
                </el-col>
            </el-row>
        </el-col>
    </el-row>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { Ref } from 'vue'
import { reactive } from 'vue';

const user_id = ref('')
const user_password = ref('')

</script>

<style scoped></style>