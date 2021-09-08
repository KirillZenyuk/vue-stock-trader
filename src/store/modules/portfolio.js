const state = {
    funds: 10000,
    stocks: []
}

const getters = {
    funds: state => {
        return state.funds
    },
    portfolioStocks: (state, getters) => {
        return state.stocks.map(portfolioStock => {
            const stock = getters.stocks.find(stock => stock.id === portfolioStock.id)
            return {
                id: portfolioStock.id,
                title: stock.title,
                price: stock.price,
                quantity: portfolioStock.quantity
            }
        })
    }
}

const mutations = {
    'BUY_STOCK' (state, order) {
        const stock = state.stocks.find(el => el.id === order.id)
        if (stock) {
            stock.quantity += order.quantity
        } else {
            state.stocks.push({id: order.id, quantity: order.quantity})
        }
        state.funds -= order.price * order.quantity
    },
    'SELL_STOCK' (state, order) {
        const stock = state.stocks.find(el => el.id === order.id)
        if (stock && stock.quantity >= order.quantity) {
            stock.quantity -= order.quantity
            state.funds += order.price * order.quantity
            if (stock.quantity === 0) {
                state.stocks.splice(state.stocks.indexOf(stock), 1)
            }
        }
    }
}

const actions = {
    sellStock: (context, order) => {
        context.commit('SELL_STOCK', order)
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}
