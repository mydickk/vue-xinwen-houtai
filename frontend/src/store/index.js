import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const state = {
  sidebar: [{ index: '' }],
  playMode: 'listRepeat',
  userList: [],
  listJson: {}
};

const getters = {
  chgSidebar: state => {
    return state.sidebar.map(function (index, elem) {
      console.log(index);
      return index;
    });
  },
  getUserList: state => {
    return state.userList;
  }
};

const mutations = {
  setSidebar (state, val) {
    state.sidebar = val;
  },
  setUserList (state, val) {
    state.userList = val;
  }
};

const actions = {
  fetchSideBar ({ state, commit }) {
    return axios.get('/api/sidebar').then((res) => {
      commit('setSidebar', res.data);
      return res.data;
    });
  }
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});
