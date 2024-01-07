// Here we created a store 
/* configureStore from Redux Toolkit is an improved version of createStore that simplifies setup and helps avoid common bugs.
You should not be using the redux core package by itself today, except for learning purposes. The createStore method from the core redux package will not be removed, but we encourage all users to migrate to using Redux Toolkit for all Redux code.
If you want to use createStore without this visual deprecation warning, use the legacy_createStore as createStore import instead: */ 
import { applyMiddleware, legacy_createStore as createStore } from "redux"; // for redux we use thunk as middleware in applyMiddleware fuction of redux
import reducers from "./reducers";  // All reducers
import { thunk } from "redux-thunk"; // this middleware help to execute asyncronious function in redux

export const store = createStore(reducers, {}, applyMiddleware(thunk)); // createStore take three argument reducer, initial state(object), middleware

// and our redux state is completedsssss 