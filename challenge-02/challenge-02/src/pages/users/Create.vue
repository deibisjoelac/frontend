<template>
  <div class="container">
    <div class="card">
      <div class="card-body">
        <form @submit.prevent="addUser">
          <div class="form-group">
            <label for="">Name</label>
            <input
              v-model="form.name"
              class="form-control"
              placeholder="Name"
            />
          </div>
          <div class="form-group">
            <label for="">Last Name</label>
            <input
              v-model="form.last_name"
              class="form-control"
              placeholder="Last Name"
            />
          </div>
          <div class="form-group">
            <label for="">Age</label>
            <input
              v-model="form.age"
              class="form-control"
              placeholder="Age"
              type="number"
            />
          </div>
          <div class="form-group">
            <label for="">Created At</label>
            <input
              v-model="form.created_at"
              class="form-control"
              placeholder="Created at"
              type="date"
            />
          </div>
          <div class="form-group d-flex">
            <button type="submit" class="btn btn-success mx-auto btn-block">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {},
    };
  },
  created() {
    this.initForm();
  },
  methods: {
    initForm() {
      this.form = {
        name: "",
        last_name: "",
        id: this.randomNumber(1, 100),
        age: 0,
        created_at: "",
      };
    },
    randomNumber(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    addUser() {
      this.$store.dispatch("addUser", this.form).then(() => {
        alert("Usuario agregado");
        this.$router.push({ name: "UsersIndex" });
      });
    },
  },
};
</script>
