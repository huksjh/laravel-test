import Vue from "vue";
import routes from "./routes";
import Router from "vue-router";

Vue.use(Router);

console.log(routes);
const router = new Router({
    mode: "history",
    routes
});

export default router;
