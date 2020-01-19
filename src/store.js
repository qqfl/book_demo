import Vue from 'vue'
import Vuex from 'vuex'
import Axios from "axios";
Vue.use(Vuex);
export default new Vuex.Store({
    state:{
        ac:'',
        aa:'',
    },
    getters:{
        ac: state => state.ac,
        aa: state => state.aa,
    },
    actions:{
        getStarted(context){
            Axios.get('/home',).then(res=>{
                context.commit('dataReceived',res.data);
            })
        },
    },
    mutations:{
        dataReceived(state,startedData){
            // for (let key of Object.keys(startedData)) {
            //     this.state[key] = startedData[key];
            // }
            state.ac = startedData.ac;
            state.aa = startedData.aa;
        }
    }
})