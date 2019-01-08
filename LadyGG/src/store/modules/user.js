import { setSessionStorage, getSessionStorage } from '@/tools/mixin'
export default {
    state: {
        userInfo: null, //用户信息数据
    },
    getters: {
        userInfo: state => {
            if (!state.userInfo){
                let tmp = JSON.parse(getSessionStorage('user'))
                return tmp
            }
            return state.userInfo
        }
    },
    mutations: {
        set_userinfo(state, userInfo) {
            state.userInfo = userInfo
            setSessionStorage('user', userInfo)
        },
    },
    
}