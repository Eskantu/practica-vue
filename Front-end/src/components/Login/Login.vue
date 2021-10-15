<template>
  <v-layout class="my-10" align-center justify-center>
    <v-flex xs12 sm8 md4>
      <v-card class="elevation-12">
        <v-toolbar dark color="primary">
          <v-toolbar-title><h3>Login</h3></v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-form>
            <v-text-field
              prepend-icon="person"
              label="username or email"
              type="text"
            ></v-text-field>
            <v-text-field
              prepend-icon="lock"
              label="password"
              type="password"
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="success">Login</v-btn>
        </v-card-actions>
      </v-card>
      <router-link :to="{ name: 'Registro' }">Registro</router-link>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "Login",
};
</script>
