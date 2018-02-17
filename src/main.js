import Vue from 'vue';
import Vuetify from 'vuetify'
import SocialSharing from 'vue-social-sharing'
import VueResource from 'vue-resource'
import colors from 'vuetify/es5/util/colors'

import App from './App.vue'
import FirstForm from './components/FirstForm.vue'
import SecondForm from './components/SecondForm.vue'

Vue.use(Vuetify);
Vue.use(SocialSharing);
Vue.use(VueResource);

Vue.component('first-form', FirstForm);
Vue.component('second-form', SecondForm);

new Vue({
    el: '#app',
    data: {
        avatarColor: 'purple lighten-1',
        bgColor: 'grey darken-3',
        tile: false,
        dark: true
    },
    mounted: function() {
        this.$vuetify.theme.primary = colors['purple']['lighten1'];
        this.$vuetify.theme.secondary = colors['blue']['lighten1'];
    },
    render: h => h(App)
});