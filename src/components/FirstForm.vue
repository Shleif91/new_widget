<template>
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
    </form>
</template>

<script>
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
                name: '',
                email: '',
                checkbox: false
            }
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
        mounted: function () {
            const self = this;
            this.$root.$on('submit', function (name) {
                if (name === 'firstForm') {
                    self.$v.$touch();
                    if (!self.$v.$invalid) {
                        self.$emit('nextStep', 2)
                    }
                }
            })
        }
    }
</script>