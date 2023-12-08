import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import TheWelcome from "./components/TheMain/TheWelcome/TheWelcome.vue"
import TheProjects from "./components/TheMain/TheProjects/TheProjects.vue"
import Project from  "./components/TheMain/TheProjects/Project.vue"

const router = createRouter({
    // history: createWebHistory(),
    history: createWebHashHistory(),
    routes: [
        {
            path : '/',
            children : [
                {
                    path : '',
                    name : 'root',
                    component : TheWelcome
                },
                {
                    path : 'projects',
                    name : 'projects',
                    component : TheProjects
                },
                {
                    path : 'projects/:id',
                    name : 'project',
                    component : Project
                }
            ]
        }
    ]
})

export default router;
