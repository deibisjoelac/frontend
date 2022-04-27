<template>
  <div class="card shadow-md">
    <div class="card-header bg-white">
      <h4 class="card-title">Lista de Usuarios</h4>
      <router-link :to="{ name: 'UsersCreate' }">Create</router-link>
    </div>
    <div class="card-body">
      <div class="table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>LastName</th>
              <th>Age</th>
              <th>Created at</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(user, index) in users" :key="user.id">
              <td v-text="user.id"></td>
              <td v-text="user.name"></td>
              <td v-text="user.last_name"></td>
              <td v-text="user.age"></td>
              <td v-text="user.created_at"></td>
              <td>
                <button class="btn btn-danger" @click="destroy(index)">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      users: "users",
    }),
  },
  methods: {
    addItem() {
      this.$store.dispatch("addUser", {
        name: "Hola",
        id: Math.random() * 10,
        last_name: "Mundo",
        age: 12,
        created_at: "2020-01-01",
      });
    },
    destroy(index) {
      this.$store.dispatch("destroyUser", index);
    },
  },
};
</script>
