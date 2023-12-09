<template>
    <el-row>
        <el-col :span="8">
            <el-input v-model="log_info.user_id" placeholder="Please input" />
        </el-col>
        <el-col :span="8">
            <el-input v-model="log_info.user_password" type="password" placeholder="Please input password" show-password />
        </el-col>
        <el-col :span="4">
            <div class="button-container">
                <el-button class="full-width-button">SignIn</el-button>
            </div>
        </el-col>
        <el-col :span="4">
            <div class="button-container">
                <el-button class="full-width-button">SignUp</el-button>
            </div>
        </el-col>
    </el-row>
</template>
  
<script setup lang="ts">
import { ref, reactive } from 'vue'

interface LogInfo {
    user_id?: string,
    user_password?: string,
    user_token?: string
}

let log_info: LogInfo = reactive(
    {
    }
)

</script>
  
<style scoped>
.button-container {
    display: flex;
    justify-content: center;
}

.full-width-button {
    flex: 1;
}
</style>
