<template>
    <v-app id="stepper">
        <v-content>
            <v-container>
                <v-stepper v-model="e1" :dark="$root.dark">
                    <v-stepper-header>
                        <v-stepper-step step="1" :complete="e1 > 1">Name of step 1</v-stepper-step>
                        <v-divider></v-divider>
                        <v-stepper-step step="2" :complete="e1 > 2">Name of step 2</v-stepper-step>
                        <v-divider></v-divider>
                        <v-stepper-step step="3">Name of step 3</v-stepper-step>
                    </v-stepper-header>
                    <v-stepper-items>
                        <v-stepper-content step="1">
                            <v-card :color="$root.bgColor" class="mb-5">
                                <v-container>
                                    <first-form v-on:nextStep="nextStep"></first-form>
                                </v-container>
                            </v-card>
                            <v-btn color="primary" @click="submit">Continue</v-btn>
                            <v-btn flat>Cancel</v-btn>
                        </v-stepper-content>
                        <v-stepper-content step="2">
                            <v-card :color="$root.bgColor" class="mb-5">
                                <v-container>
                                    <second-form></second-form>
                                </v-container>
                            </v-card>
                            <v-btn color="primary" @click.native="e1 = 3">Continue</v-btn>
                            <v-btn flat>Cancel</v-btn>
                        </v-stepper-content>
                        <v-stepper-content step="3">
                            <v-card :color="$root.bgColor" class="mb-5" height="200px"></v-card>
                            <v-btn color="primary" @click.native="e1 = 1">Continue</v-btn>
                            <v-btn flat>Cancel</v-btn>
                        </v-stepper-content>
                    </v-stepper-items>
                </v-stepper>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
    export default {
        data() {
            return {
                e1: 1
            }
        },
        methods: {
            submit() {
                this.$root.$emit('submit', 'firstForm');
            },
            nextStep(stepId) {
                this.e1 = stepId;
            }
        }
    }
</script>