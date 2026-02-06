import { createMemoryHistory, createRouter } from "vue-router";

import Home from "../components/home.vue";
import About from "../components/About.vue";

const routes = [
    {
        path: "/",
        component: Home
    },
    {
        path: "/",
        component: About
    }
];

const router = createRouter({
    history: createMemoryHistory(),
    routes,
});

export default router;