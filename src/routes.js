import Vue from 'vue'
import VueRouter from 'vue-router'
import Landing from './views/landing.vue'

Vue.use(VueRouter)

const mainRouter = new VueRouter({
    mode : "history",
    routes : [
        {
            path : "/",
            name : "home",
            component : Landing
        }
    ]
})

export default mainRouter