//here index.js is a rootReducer and rootReducer will combine all the reducer and afterwards rootReducer will be passed in store

import changeTheNumber from "./upDown";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
    changeTheNumber
})

export default rootReducer










