<template>
    <el-row justify="end">
        <el-col :span="12">
            <span>ICON</span><span>EasyVersion</span>
        </el-col>
        <el-col :span="12">
            <el-row justify="end" gutter="1">
                <el-col span="6">
                    <el-input v-model="log_info.user_id" type="text" placeholder="Please input user id" />
                </el-col>
                <el-col span="6">
                    <el-input v-model="log_info.user_password" type="password" placeholder="Please input password" show-password />
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
import { reactive } from 'vue';

interface LogInfo {
    user_id : string,
    user_password : string
}

const log_info : LogInfo = reactive({
    user_id : '',
    user_password : ''
}
)

</script>

<style scoped></style>