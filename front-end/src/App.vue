<template>
  <v-app>
    <router-view></router-view>

    <v-footer app>
      <v-card class="flex">
        <v-card-title>
          <strong class="title">@2018 TaskAgile.com</strong>
          <v-spacer></v-spacer>
          <v-btn flat>About</v-btn>
          <v-btn flat>Terms of Service</v-btn>
          <v-btn flat>Privacy Policy</v-btn>
          <v-btn flat>Github</v-btn>
        </v-card-title>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data () {
    return {
      //
    }
  }
}
</script>
