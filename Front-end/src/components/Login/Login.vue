<template>
  <v-layout class="jumbo" align-center justify-center fluid fill-height>
    <v-flex xs12 sm8 md4>
      <v-card class="elevation-12">
        <v-toolbar dark color="indigo">
          <v-toolbar-title><h3>LOGIN</h3></v-toolbar-title>
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
      <v-btn class="mt-5" color="error" block :to="{ name: 'Registro' }"
        >Sign in</v-btn
      >
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
<style lang="scss" scoped>
.jumbo {
  background: linear-gradient(
    to top right,
    rgba(47, 71, 41, 0.7),
    rgba(65, 94, 86, 0.7)
  );
}
</style>
