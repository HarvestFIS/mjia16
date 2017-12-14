const state = {
  isLoading: false,
  direction: 'forward'
}

const mutations = {
  updateLoadingStatus (state, {status}) {
    state.isLoading = status
  },
  updateDirection (state, {direction}) {
    state.direction = direction
  }
}
export default {
	state,
	mutations
}