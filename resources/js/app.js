import Vue from "vue";
import Vuetify from "../plugins/vuetify";
import router from "~/router";
import App from "~/components/App";

//import "~/components";

new Vue({
    vuetify: Vuetify,
    router,
    render: h => h(App) // ...App
});
