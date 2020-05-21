export const state = () => ({
  counter: 1
})

export const mutations = {
  countUp: function(state){
    state.counter++
  },
  countDown: function(state){
    if(state.counter > 0) {
      
    }
    state.counter--
  },
  reset: function(state) {
    state.counter = 1
  }
}