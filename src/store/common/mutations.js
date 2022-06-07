export const REDUCE_PRICE = (state, data) => {
    state.products.forEach(product => {
        product.price -= data;
    })
}