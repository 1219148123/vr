import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
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
        path: '/',
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
        path: '/storeGood',
        name: 'StoreGood',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/StoreGood.vue')
    }, {
        path: '/admin',
        name: 'Admin',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Admin.vue'),
        children: [{
                path: 'discussMng',
                name: '/admin/discussMng',
                component: () =>
                    import ( /* webpackChunkName: "about" */ '../views/DiscussMng.vue')
            },
            {
                path: 'commentMng',
                name: '/admin/commentMng',
                component: () =>
                    import ( /* webpackChunkName: "about" */ '../views/CommentMng.vue')
            },
            {
                path: 'userMng',
                name: '/admin/userMng',
                component: () =>
                    import ( /* webpackChunkName: "about" */ '../views/UserMng.vue')
            },
            {
                path: 'storeMng',
                name: '/admin/storeMng',
                component: () =>
                    import ( /* webpackChunkName: "about" */ '../views/StoreMng.vue')
            },
            {
                path: 'goodsMng',
                name: '/admin/goodsMng',
                component: () =>
                    import ( /* webpackChunkName: "about" */ '../views/GoodsMng.vue')
            },
        ]
    },
    {
        path: '/addressMng',
        name: 'AddressMng',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/AddressMng.vue')
    },
    {
        path: '/addressEdit',
        name: 'AddressEdit',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/AddressEdit.vue')
    },
    {
        path: '/userDetail',
        name: 'UserDetail',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/UserDetail.vue')
    },
    {
        path: '/goodDetail',
        name: 'GoodDetail',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/GoodDetail.vue')
    },
    {
        path: '/orderMng',
        name: 'OrderMng',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/OrderMng.vue')
    },
    {
        path: '/contact',
        name: 'Contact',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Contact.vue')
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