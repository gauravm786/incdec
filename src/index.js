import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store'
//Provider will help us to connect react(UI) with redux.
import {Provider} from "react-redux"

//to check if our application has redux state or not
// In Redux, subscriptions are called after the root reducer has returned the new state, 
// so you may dispatch in the subscription listeners. 
// You are only disallowed to dispatch inside the reducers because they must have no side effects. 
store.subscribe(()=>console.log(store.getState()))
// getState()​
// Returns the current state tree of your application. It is equal to the last value returned by the store's reducer.
// Returns​ #
// (any): The current state tree of your application.




ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store}> means now we can share store as a props to the componet */}
    <Provider store={store}>  
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
