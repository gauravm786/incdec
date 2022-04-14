//reducers means/says how to do

const initialState=0

// const changeTheNumber = (state=initialState,action)=>{
//     switch(action.type){
//         case "INCREMENT" : return state + 1;
//         case "DECREMENT" : return state - 1;
//         default : return state; 
//     }
// }


// increment by 5 or any number and decrement by 5 or any nymber
const changeTheNumber = (state=initialState,action)=>{
    switch(action.type){
        case "INCREMENT" : return state + action.payload;
        case "DECREMENT" : return state - action.payload;
        default : return state; 
    }
}
export default changeTheNumber