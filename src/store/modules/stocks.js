import data from "../../data/data";

const state = {
    stocks: []
}

const getters = {
    stocks: state => {
        return state.stocks
    }
}

const mutations = {
    'SET_STOCKS' (state, stocks) {
        state.stocks = stocks
    },
    'RND_STOCKS' (state) {
        state.stocks.forEach(stock => {
            stock.price = Math.round(stock.price * (0.66 + Math.random()))
        })
    }
}

const actions = {
    buyStock: (context, order) => {
        context.commit('BUY_STOCK', order)
    },
    initStocks: (context) => {
        context.commit('SET_STOCKS', data)
    },
    randomizeStocks: (context) => {
        context.commit('RND_STOCKS')
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}
