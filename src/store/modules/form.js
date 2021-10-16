export default {
  actions: {
    setInfo(ctx) {
      //   ctx.commit("updateInfo", formData);
    }
  },
  mutations: {
    updateInfo(state, formData) {
      state.formData = formData;
    }
  },
  state: {
    formData: {
      name: "1",
      phone: "2",
      email: "3",
      text: "4"
    }
  },
  getters: {
    getInfo(state) {
      const name = localStorage.getItem("name");
      const phone = localStorage.getItem("phone");
      const email = localStorage.getItem("email");
      const text = localStorage.getItem("text");
      return state.formData;
    }
  }
};
