// in store.js we add complete state of our application basically we add rootreducer in store.js 

//here we create store and then we store rootReducer inside the store
import { createStore } from "redux";

import rootReducer from "./reducers/index";

const store=createStore(rootReducer,
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() )

//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() is copied from 
//github redux devtools>Documentation>Browser Extension Installation and Configuration>1.1 Basic store and then it is used
//inside store with rootReducer.
//now the redux devtool will check our application like about store,state etc 

export default store //export to app.js
