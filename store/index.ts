export const state = () => ({
    books: []
})

export const mutations = {
    setBooks(state, books) {
        state.books = books
    }
}

export const actions = {
    async nuxtServerInit({ commit }, { app }) {
        const books = await app.$axios.$get(
            "./books.json"
        )
        commit("setBooks", books)
    }
}
