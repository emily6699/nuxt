import Vuex from 'vuex'

const createStore =()=>{
    return new Vuex.Store({
        state:{
            loadedPosts:[]
        },
        mutations:{
            setPosts(state,posts){
                state.loadedPosts = posts
            }
        },
        actions:{},
        getters:{}
    })
}