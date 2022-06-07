const getters = {
    products: state => state.common.products,

    saleProducts: state => {
        var saleProducts = state.common.products.map(product => {
            return {
                name: '**' + product.name + '**',
                price: product.price / 2
            }
        })
        return saleProducts;
    },
}

export default getters