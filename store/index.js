import Vuex from 'vuex'
new Vuex.Store({
  state: () => ({
    index: {text: "", icon: ""},
    accessories: {text: ""}
  }),

  getters: {
    getCrumb: (state) => (routeName) => {
      return state[routeName];
    }
  },

  mutations:{
    addCrumb(state, crumb) {
      state[crumb.routeName] = crumb;
    },
    removeCrumb(state, routeName) {
      delete state[routeName];
    }
  },

  actions: {
    addCrumb({commit}, {routeName, text, icon}) {
      commit("addCrumb", {routeName, text, icon});
    },
    removeCrumb({commit}, routeName) {
      commit("removeCrumb", routeName);
    }
  }
})

