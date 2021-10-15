<template>
  <v-layout class="my-10" align-center justify-center>
    <v-flex xs12 sm8 md4>
      <v-card class="elevation-12">
        <v-toolbar dark color="primary">
          <v-toolbar-title><h3>Login</h3></v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-form v-model="valid">
            <v-text-field
              :rules="userRules"
              v-model="credenciales.username"
              prepend-icon="person"
              label="username or email"
              type="text"
            ></v-text-field>
            <v-text-field
              :rules="passwordRules"
              v-model="credenciales.password"
              prepend-icon="lock"
              label="password"
              type="password"
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            :disabled="!valid"
            @click="ObtenerUsuario(credenciales)"
            color="success"
            >Login</v-btn
          >
        </v-card-actions>
      </v-card>
      <router-link :to="{ name: 'Registro' }">Registro</router-link>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      valid: false,
      userRules: [(v) => !!v || "el usuario es requedido"],
      passwordRules: [(v) => !!v || "la contraseña es requerida"],
    };
  },
  computed: { ...mapState("LoginStore", ["credenciales"]) },
  methods: {
    ...mapActions("LoginStore", ["ObtenerUsuario"]),
  },
};
</script>
