import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list:[
      {id:'0',text:'HTML',done:false},
      {id:'1',text:'CSS',done:true},
      {id:'2',text:'jQuery',done:false},
    ],
    index:3,
    selectMsg:'All',
  },
  getters:{
    queryList(state){
      switch(state.selectMsg){
        case 'All':return state.list;
        case 'Finished':return state.list.filter(v=>v.done);
        default: return state.list.filter(v=>!v.done);
      }
    }
  },
  mutations: {
    changeState(state,item){
      state.selectMsg=item;
    },
    addBtn(state,text){
      state.list.push({
        id:state.index++,
        text,
        done:false,
      })
    }
  },
  actions: {

  }
})
