import React from 'react'
// import './App.css'
import './upDown.css'
import { useSelector, useDispatch } from 'react-redux'
import { incNumber,decNumber } from './actions/index'

const App = () => {
  
  //in this way we can get data from store
  const myState = useSelector((state)=>state.changeTheNumber)
  
  // dispatch will trigger/call action function
  const dispatch=useDispatch()

  return (
<>

<div className='container'>
<h1>Increment/Decrement counter</h1>
<h4>using React and Redux</h4>
  <div className='quantity'>

    {/* decrement by 1 */}
    {/* <a className='quantity__minus' title='Decrement'
    onClick={()=>dispatch(decNumber())}  
    ><span> - </span></a> */}

    {/* decrement by 5 or any number*/}
    <a className='quantity__minus' title='Decrement'
    onClick={()=>dispatch(decNumber(5))}  
    ><span> - </span></a>



    <input type="text" name='quantity' className='quantity__input' value={myState} /> 
    
    {/* increment by 1 */}
    {/* <a className='quantity__plus' title='Increment'
    onClick={()=>dispatch(incNumber())}
    ><span> + </span> </a> */}

    {/* increment by 5 or any number*/}
    {/* if we want to increment by 5 then we have to add new key named as payload and have to pass new parameter in action>index.js and have to assign that paramter to the key named payload and inside reducer we must return state + action.payload and thus similarly for decrement  */}
    <a className='quantity__plus' title='Increment' onClick={()=>dispatch(incNumber(5))} > <span>+</span></a>
  </div>
</div>
</>
  )
}

export default App

//(args)=>{args + 1}

