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
        ac: state => state.ac+'--22',
        aa: state => state.aa+'--33',
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
            this.state.ac = startedData.ac;
            this.state.aa = startedData.aa;
        }
    }
})