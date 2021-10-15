<template>
  <v-app>
    <Snackbar></Snackbar>
    <v-main>
      <router-view />
    </v-main>
    <v-footer dark padless>
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} — <strong>Vue</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
import Snackbar from "./components/Snackbar/Snackbar.vue";
export default {
  name: "App",
  components: { Snackbar },
  data() {
    return {
      show: true,
      text: "hola",
    };
  },
};
</script>
