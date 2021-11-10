<template>
  <v-app>
    <Snackbar></Snackbar>
    <NavigationBar v-if="user"></NavigationBar>
    <v-main>
      <router-view />
    </v-main>
    <v-footer dark padless>
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} — <strong>PIoT</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
import Snackbar from "./components/Snackbar/Snackbar.vue";
import StorePrincipal from "./store/index";
import NavigationBar from "./components/sliderBar/SliderBar.vue";
import auth from "./auth/auth";
export default {
  name: "App",
  components: { Snackbar, NavigationBar },
  data() {
    return {
      show: true,
      text: "hola",
    };
  },
  computed: {
    user: function () {
      StorePrincipal.commit("setUserProfile", auth.getUserLogged());
      return auth.getUserLogged() != null;
    },
  },
};
</script>
