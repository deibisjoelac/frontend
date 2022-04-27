import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: JSON.parse(localStorage.getItem("users")) || [],
  },
  getters: {
    users(state) {
      return state.users;
    },
  },
  mutations: {
    addUser(state, user) {
      state.users.unshift(user);
      localStorage.setItem("users", JSON.stringify(state.users));
    },

    destroyUser(state, index) {
      state.users.splice(index,1);
      localStorage.setItem("users", JSON.stringify(state.users));
    },
  },
  actions: {
    addUser({ commit }, user) {
      commit("addUser", user);
    },
    destroyUser({ commit }, index) {
      commit("destroyUser", index);
    },
  },
});
