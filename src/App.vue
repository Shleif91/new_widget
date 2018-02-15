<template>
    <v-app id="stepper">
        <v-content>
            <v-container>
                <v-stepper v-model="e1" dark>
                    <v-stepper-header>
                        <v-stepper-step step="1" :complete="e1 > 1">Name of step 1</v-stepper-step>
                        <v-divider></v-divider>
                        <v-stepper-step step="2" :complete="e1 > 2">Name of step 2</v-stepper-step>
                        <v-divider></v-divider>
                        <v-stepper-step step="3">Name of step 3</v-stepper-step>
                    </v-stepper-header>
                    <v-stepper-items>
                        <v-stepper-content step="1">
                            <v-card :color="color" class="mb-5">
                                <v-container>
                                    <form>
                                        <v-text-field
                                            label="Name"
                                            v-model="name"
                                            :error-messages="nameErrors"
                                            :counter="10"
                                            @input="$v.name.$touch()"
                                            @blur="$v.name.$touch()"
                                            required
                                        ></v-text-field>
                                        <v-text-field
                                            label="E-mail"
                                            v-model="email"
                                            :error-messages="emailErrors"
                                            @input="$v.email.$touch()"
                                            @blur="$v.email.$touch()"
                                            required
                                        ></v-text-field>
                                        <v-checkbox
                                            label="Do you agree?"
                                            v-model="checkbox"
                                            :error-messages="checkboxErrors"
                                            @change="$v.checkbox.$touch()"
                                            @blur="$v.checkbox.$touch()"
                                            required
                                        ></v-checkbox>

                                        <!--<v-btn @click="submit">submit</v-btn>-->
                                    </form>
                                </v-container>
                            </v-card>
                            <v-btn color="primary" @click="submit">Continue</v-btn>
                            <v-btn flat>Cancel</v-btn>
                        </v-stepper-content>
                        <v-stepper-content step="2">
                            <v-card :color="color" class="mb-5" height="200px"></v-card>
                            <v-btn color="primary" @click.native="e1 = 3">Continue</v-btn>
                            <v-btn flat>Cancel</v-btn>
                        </v-stepper-content>
                        <v-stepper-content step="3">
                            <v-card :color="color" class="mb-5" height="200px"></v-card>
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
    import colors from 'vuetify/es5/util/colors'
    import { validationMixin } from 'vuelidate'
    import { required, maxLength, email } from 'vuelidate/lib/validators'

    export default {
        mixins: [validationMixin],

        validations: {
            name: { required, maxLength: maxLength(10) },
            email: { required, email },
            checkbox: { required }
        },

        data() {
            return {
                e1: 1,
                color: 'blue lighten-1',
                name: '',
                email: '',
                checkbox: false
            }
        },
        mounted: function () {
            this.$vuetify.theme.primary = colors.blue.lighten1;
            this.$vuetify.theme.secondary = colors.blue.lighten3;
        },
        computed: {
            checkboxErrors () {
                const errors = [];
                if (!this.$v.checkbox.$dirty) return errors;
                !this.$v.checkbox.required && errors.push('You must agree to continue!');

                return errors;
            },
            nameErrors () {
                const errors = [];
                if (!this.$v.name.$dirty) return errors;
                !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long');
                !this.$v.name.required && errors.push('Name is required.');

                return errors;
            },
            emailErrors () {
                const errors = [];
                if (!this.$v.email.$dirty) return errors;
                !this.$v.email.email && errors.push('Must be valid e-mail');
                !this.$v.email.required && errors.push('E-mail is required');

                return errors;
            }
        },
        methods: {
            submit () {
                this.$v.$touch();
                if (!this.$v.$invalid) {
                    this.e1 = 2;
                }
            },
        }
    }
</script>