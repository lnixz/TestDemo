import userApi from '../../api/user'

const state = () => ({
    userInfo:[]
})

const getters = {
    getUserInfo:(state) => {
        return state.userInfo
    }
}

const mutations = {
    SET_USERINFO(state, value) {
        state.userInfo = value
    }
}

const actions = {
    getUserInfo: ({commit}) => {
        userApi.getUserInfo((userInfo) => {
            console.log(userInfo);
            commit('SET_USERINFO', userInfo)
        })
    },
    change: ({commit}, userInfo) => {
        commit('SET_USERINFO', userInfo)
    }
}

export default {
    // namespace: true,
    state,
    getters,
    actions,
    mutations
}