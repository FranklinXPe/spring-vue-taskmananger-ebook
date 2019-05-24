<template>
  <div>
    <v-content>
      <v-container fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Register form</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form @submit.prevent="submitForm">
                  <v-text-field
                    prepend-icon="person"
                    name="username"
                    id="username"
                    label="Username"
                    type="text"
                    v-model="form.username"
                  ></v-text-field>
                  <v-text-field
                    prepend-icon="email"
                    name="emailAddress"
                    id="emailAddress"
                    label="Email"
                    type="email"
                    v-model="form.emailAd"
                  ></v-text-field>
                  <v-text-field
                    prepend-icon="lock"
                    name="password"
                    label="Password"
                    id="password"
                    type="password"
                    v-model="form.password"
                  ></v-text-field>
                </v-form>
              </v-card-text>

              <v-card-actions>
                <v-btn color="primary" id="submit" @click="submitForm">Login</v-btn>
              </v-card-actions>
              <v-card-text>
                <span>By clicking "Create account", you agree to our terms of service and privacy policity.</span>
              </v-card-text>
              <v-card-actions>
                <span>Already have an account? Sign in</span>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </div>
</template>

<script>
import registrationService from '@/services/registration';

export default {
  name: 'RegisterPage',
  data: function () {
    return {
      form: {
        username: '',
        emailAddress: '',
        password: ''
      },
      errorMessage: ''
    }
  },
  methods: {
    submitForm () {
      registrationService
        .register(this.form)
        .then(() => {
          this.$router.push({ name: 'LoginPage' })
        })
        .catch(error => {
          this.errorMessage =
            'Failed to register user. Reason:' +
            (error.message ? error.message : 'Unknow') +
            '.';

          console.log(this.errorMessage)
        })
    }
  }
}
</script>
