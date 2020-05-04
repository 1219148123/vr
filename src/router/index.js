import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Login.vue')
    },
    {
        path: '/index',
        name: 'Index',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Index.vue')
    },
    {
        path: '/checkout',
        name: 'Checkout',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Checkout.vue')
    },
    {
        path: '/order',
        name: 'Order',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Order.vue')
    },
    {
        path: '/myStore',
        name: 'MyStore',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/MyStore.vue')
    },
    {
        path: '/publish',
        name: 'Publish',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Publish.vue')
    },
    {
        path: '/discuss',
        name: 'Discuss',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Discuss.vue')
    },
    {
        path: '/discussDetail',
        name: 'DiscussDetail',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/DiscussDetail.vue')
    },
    {
        path: '/test',
        name: 'Test',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Test.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router