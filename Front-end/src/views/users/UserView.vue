<template>
  <div class="jumbotron-eskantu" fluid fill-height>
    <v-col>
      <v-container>
        <v-card
          color="transparent"
          offset-md="2"
          md="2"
          class="text-md-center elecation-3"
        >
          <v-card-title>
            <v-btn class="mr-1" color="success">
              <!-- <v-icon class="mr-3">add_circle</v-icon> -->
              Nuevo</v-btn
            >
            <v-btn class="mr-1" color="warning">
              <!-- <v-icon class="mr-3">edit</v-icon> -->
              Editar</v-btn
            >
            <v-btn class="" color="error">
              <!-- <v-icon class="mr-3">delete</v-icon> -->
              Eliminar</v-btn
            >
            <v-spacer></v-spacer>
            <v-text-field
              v-model="_Search"
              label="buscar"
              single-line
              color="black"
              hide-details
            ></v-text-field>
          </v-card-title>
          <v-card-text>
            <v-data-table
              dark
              show-select
              item-key="_id"
              :headers="headers"
              :items="userList"
              :search="_Search"
              class="elevation-1"
              loading-text="Loading... Please wait"
            >
              <template v-slot:item.isActive="{ item }">
                <tr>
                  <td>
                    <v-icon v-if="item.isActive" color="success">done </v-icon>
                    <v-icon v-else color="error">close</v-icon>
                  </td>
                </tr>
              </template>
              <template v-slot:item.username="{ item }">
                <tr>
                  <td>
                    {{ item.username }} <br />
                    <div class="text-md-caption blue-grey--text">
                      {{ item._id }}
                    </div>
                  </td>
                </tr>
              </template>
            </v-data-table>
          </v-card-text>
        </v-card>
      </v-container>
    </v-col>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  created() {
    this.ObtenerUsuarios();
  },
  methods: {
    ...mapActions("UserStore", ["ObtenerUsuarios", "SetSearch"]),
  },
  computed: {
    ...mapState("UserStore", ["headers", "userList", "search"]),
    _Search: {
      get() {
        return this.search;
      },
      set(_Search) {
        this.SetSearch(_Search);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.jumbotron-eskantu {
  background: linear-gradient(
    to bottom right,
    rgba(81, 20, 138, 0.7),
    rgba(29, 112, 54, 0.7)
  );
  background-size: cover;
  height: 100%;
}
</style>
