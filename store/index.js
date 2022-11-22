export const state = () => ({
  index: {text: "Home", icon: ""},
  accessories: {text: ""}
});

export const getters = {
  getCrumb: (state) => (routeName) => {
    return state[routeName];
  }
};

export const mutations = {
  addCrumb(state, crumb) {
    state[crumb.routeName] = crumb;
  },
  removeCrumb(state, routeName) {
    delete state[routeName];
  }
}

export const actions = {
  addCrumb({commit}, {routeName, text, icon}) {
    commit("addCrumb", {routeName, text, icon});
  },
  removeCrumb({commit}, routeName) {
    commit("removeCrumb", routeName);
  }
};

