<template>
  <div>
    <v-content>
      <v-container fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Login form</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field prepend-icon="person" name="username" label="Username" type="text"></v-text-field>
                  <v-text-field
                    prepend-icon="email"
                    name="email"
                    label="Email"
                    id="email"
                    type="email"
                  ></v-text-field>
                  <v-text-field
                    prepend-icon="lock"
                    name="password"
                    label="Password"
                    id="password"
                    type="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>

              <v-card-actions>
                <v-btn color="primary">Login</v-btn>
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
export default {
  name: 'LoginPage'
}
</script>
