import Vue from 'vue';
import Vuetify from 'vuetify'
import App from './App.vue'
import FirstForm from './components/FirstForm.vue'

Vue.use(Vuetify);

Vue.component('first-form', FirstForm);

new Vue({
    el: '#app',
    render: h => h(App)
});