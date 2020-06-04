import Vue from "vue";
import Vuetify from "../plugins/vuetify";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const Home = { template: "<div>This is Home</div>" };
const Foo = { template: "<div>This is Foo</div>" };
const Bar = { template: "<div>This is Bar {{ $route.params.id }}</div>" };

const router = new VueRouter({
    mode: "history",
    base: __dirname,
    routes: [
        { path: "/", name: "home", component: Home },
        { path: "/foo", name: "foo", component: Foo },
        { path: "/bar/:id", name: "bar", component: Bar }
    ]
});

const app = new Vue({
    el: "#app",
    router
});
