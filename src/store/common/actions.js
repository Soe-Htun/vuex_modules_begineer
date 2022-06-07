export const reducePrice = ({ commit }, data) => {
    setTimeout(function() {
        commit('REDUCE_PRICE', data)
    }, 1000)
}