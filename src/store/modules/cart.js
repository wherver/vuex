export default {
    state:{
        count:0,//货物数量
        str:null,
        arr:[],
        form:{}
    },
    getters:{},
    actions:{},
    mutations:{
        increment(state){//增一
            state.count++
        },
        reduce(state){//减一
            state.count--;
        }
    }
}