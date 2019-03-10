import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

const _sandbox = Axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/natalie/bugs'
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    goals: [],
    activeGoal: {},
    comments: []

  },
  mutations: {
    setGoals(state, data) {
      state.goals = data
    },
    setActiveGoal(state, goal) {
      state.activeGoal = goal
    },
    setComments(state, data) {
      state.comments = data
    }
  },
  actions: {

    addGoal({ commit, dispatch }, payload) {
      _sandbox.post('', payload)
        .then(res => {
          dispatch('getAllGoals')
        })
    },
    getAllGoals({ commit, dispatch }) {
      _sandbox.get('')
        .then(res => {
          console.log(res.data)
          commit('setGoals', res.data.results)
        })
    },
    setActive({ commit, dispatch }, goal) {
      commit('setActiveGoal', goal)
    },
    getGoalbyId({ commit, dispatch }, goalId) {
      _sandbox.get(goalId)
        .then(res => {
          commit('setActiveGoal', res.data.results)
        })
    },
    addComment({ commit, dispatch }, payload) {
      let goalId = this.state.activeGoal._id
      _sandbox.post(`${goalId}/notes`, payload)
        .then(res => {
          dispatch('getAllComments')
        })
    },
    getAllComments({ commit, dispatch }) {
      let goalId = this.state.activeGoal
      _sandbox.get(`${goalId}/notes`)
        .then(res => {
          commit('setComments', res.data.results)
        })
    },
    changeIt({ commit, dispatch }, payload) {
      _sandbox.delete('' + payload)
        .then(res => {
          dispatch('getAllGoals')
        })
    }
  }
})
