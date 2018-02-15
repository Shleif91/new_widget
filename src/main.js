import Vue from 'vue';
import Vuetify from 'vuetify'
import SocialSharing from 'vue-social-sharing'

import App from './App.vue'
import FirstForm from './components/FirstForm.vue'
import SecondForm from './components/SecondForm.vue'

Vue.use(Vuetify);
Vue.use(SocialSharing);

Vue.component('first-form', FirstForm);
Vue.component('second-form', SecondForm);

new Vue({
    el: '#app',
    render: h => h(App)
});