import { createRouter, createWebHistory } from "vue-router"; // vue router
import AboutPage from "../views/AboutPage.vue"
import HomePage from "../views/HomePage.vue" // Home page import
import ServicesPage from "../views/ContactPage.vue"
import PricingPage from "@/views/PricingPage.vue";
import FaqPage from "@/views/FaqPage.vue";
import BloghomePage from "@/views/BloghomePage.vue";
import BlogpostPage from "@/views/BlogpostPage.vue";
import PortafolioPage from "@/views/PortafolioPage.vue";
import PortafolioitemPage from "@/views/PortafolioitemPage.vue";

// constantes para guardar un array de objectos
const routes = [
    {
        name : "HomePage",
        path  :"/",
        component : HomePage
    },
    {
        name : "AboutPage",
        path : "/about",
        component : AboutPage
    },
    {
        name : "ContactPage",
        path : "/contact",
        component : ServicesPage
    },
    {
        name : "PricingPage.vue",
        path : "/pricing",
        component : PricingPage
    },
    {
        name : "FaqPage.vue",
        path : "/faq",
        component : FaqPage
    },
    {
        name : "BloghomePage.vue",
        path : "/bloghome",
        component : BloghomePage
    },
    {
        name : "BlogpostPage.vue",
        path : "/blogpost",
        component : BlogpostPage
    },
    {
        name : "PortafolioPage.vue",
        path : "/portafolio",
        component : PortafolioPage
    },
    {
        name : "PortafolioitemPage.vue",
        path : "/portafolioitem",
        component : PortafolioitemPage
    },
];
// Inicializacion | rutas de la aplicación
const route = createRouter({
    history : createWebHistory(), routes
    //configurar el historial del navegador para manejar la navegación
});

export default route;