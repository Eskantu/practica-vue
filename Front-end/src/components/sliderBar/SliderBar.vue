<template>
  <v-navigation-drawer class="elevation-3" permanent expand-on-hover dark app>
    <v-list>
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
        </v-list-item-avatar>
      </v-list-item>
      <v-list-item>
        <v-list-item-content class="ocular">
          <v-list-item-title class="text-h6">Mario Escalante</v-list-item-title>
          <v-list-item-subtitle>
            616868d3b7f15db2aa28a48f
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-divider></v-divider>
    <v-list dense nav>
      <v-list-item :to="item.to" v-for="item in items" :key="item.title" link>
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item> </v-list-item>
    </v-list>
    <template v-slot:append>
      <div class="pa-2">
        <v-list dense nav>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>settings</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>configuracion</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item @click="Salir" link>
            <v-list-item-icon>
              <v-icon>logout</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>salir</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </div>
    </template>
  </v-navigation-drawer>
</template>
<script>
import router from "../../router/index";
export default {
  name: "SliderBar",
  data() {
    return {
      items: [
        { title: "Dashboard", icon: "dashboard", to: "/" },
        { title: "Users", icon: "account_circle", to: "Users" },
        { title: "Projects", icon: "folder", to: "Projects" },
        { title: "About", icon: "help", to: "About" },
        { title: "Draw CSS", icon: "format_paint", to: "CSS" },
      ],
    };
  },
  methods: {
    Salir() {
      this.$store.state.user = null;
      router.push({ name: "Login" });
    },
  },
};
</script>


<style lang="scss" scoped>
.v-navigation-drawer:hover {
  .ocular {
    opacity: 1;
    // transform: rotate(0deg);
    animation-name: in;
    animation-duration: 0.5s;
    transition-timing-function: ease-in;
    transition-delay: 300ms;
  }
}
.v-navigation-drawer {
  .ocular {
    opacity: 0;
    // transform: rotate(90deg);
    // transition: opacity, transform 0.5s;
    transition-timing-function: ease-out;
    transition-delay: 300ms;
    animation-name: out;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
  }
}

@keyframes in {
  from {
    opacity: 0;
    transform: rotate(90deg);
  }
  to {
    opacity: 1;
    transform: rotate(0deg);
  }
}

@keyframes out {
  from {
    opacity: 1;
    transform: rotate(0deg);
  }
  to {
    opacity: 0;
    transform: rotate(90deg);
  }
}
</style>
