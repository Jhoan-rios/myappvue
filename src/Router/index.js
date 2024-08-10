import { createRouter, createWebHistory } from "vue-router"; // vue router
import AboutPage from "../views/AboutPage.vue"
import HomePage from "../views/HomePage.vue" // Home page import
import ServicesPage from "../views/ServicesPage.vue"

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
        name : "ServicesPage",
        path : "/services",
        component : ServicesPage
    },
];
// Inicializacion | rutas de la aplicación
const route = createRouter({
    history : createWebHistory(), routes
    //configurar el historial del navegador para manejar la navegación
});

export default route;