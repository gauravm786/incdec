//actions means/says what to do 

// export const incNumber = () =>{
//     return{
//         type : "INCREMENT"
//     }
// }
// export const decNumber = () =>{
//     return{
//         type : "DECREMENT"
//     }
// }

// increment by 5 or any number
export const incNumber = (num) =>{
    return{
        type : "INCREMENT",
        payload:num

    }
}

// decrement by 5 or any number
export const decNumber = (num) =>{
    return{
        type : "DECREMENT",
        payload:num
    }
}