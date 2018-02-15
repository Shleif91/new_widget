<template>
    <div>
        <social-sharing url="https://vuejs.org/"
                        title="The Progressive JavaScript Framework"
                        description="Intuitive, Fast and Composable MVVM for building interactive interfaces."
                        quote="Vue is a progressive framework for building user interfaces."
                        hashtags="vuejs,javascript,framework"
                        twitter-user="vuejs"
                        inline-template>
            <div>
                <network network="facebook">
                    <v-avatar size="80" color="blue lighten-1">
                        <i class="fa fa-facebook fa-2x"></i>
                    </v-avatar>
                </network>
                <network network="googleplus">
                    <v-avatar size="80" color="blue lighten-1">
                        <i class="fa fa-google-plus fa-2x"></i>
                    </v-avatar>
                </network>
                <network network="linkedin">
                    <v-avatar size="80" color="blue lighten-1">
                        <i class="fa fa-linkedin fa-2x"></i>
                    </v-avatar>
                </network>
                <network network="odnoklassniki">
                    <v-avatar size="80" color="blue lighten-1">
                        <i class="fa fa-odnoklassniki fa-2x"></i>
                    </v-avatar>
                </network>
                <network network="pinterest">
                    <v-avatar size="80" color="blue lighten-1">
                        <i class="fa fa-pinterest fa-2x"></i>
                    </v-avatar>
                </network>
                <network network="reddit">
                    <v-avatar size="80" color="blue lighten-1">
                        <i class="fa fa-reddit fa-2x"></i>
                    </v-avatar>
                </network>
                <network network="skype">
                    <v-avatar size="80" color="blue lighten-1">
                        <i class="fa fa-skype fa-2x"></i>
                    </v-avatar>
                </network>
                <network network="telegram">
                    <v-avatar size="80" color="blue lighten-1">
                        <i class="fa fa-telegram fa-2x"></i>
                    </v-avatar>
                </network>
                <network network="twitter">
                    <v-avatar size="80" color="blue lighten-1">
                        <i class="fa fa-twitter fa-2x"></i>
                    </v-avatar>
                </network>
                <network network="vk">
                    <v-avatar size="80" color="blue lighten-1">
                        <i class="fa fa-vk fa-2x"></i>
                    </v-avatar>
                </network>
                <network network="weibo">
                    <v-avatar size="80" color="blue lighten-1">
                        <i class="fa fa-weibo fa-2x"></i>
                    </v-avatar>
                </network>
                <network network="whatsapp">
                    <v-avatar size="80" color="blue lighten-1">
                        <i class="fa fa-whatsapp fa-2x"></i>
                    </v-avatar>
                </network>
            </div>
        </social-sharing>
    </div>
</template>

<script>
    export default {
        props: ['color'],
        data() {
            return {
                tile: false
            }
        }
    }
</script>