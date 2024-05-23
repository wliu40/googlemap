import { createRouter, createMemoryHistory } from "vue-router";
import Home from "../views/Home.vue";

import Product from "../views/Product.vue";


const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/product/:id",
        name: "Product",
        component: Product
    }
];

export default createRouter({routes, history: createMemoryHistory()});