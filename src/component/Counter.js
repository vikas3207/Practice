import React, { useState } from 'react';
import '../cssfiles/counter.css'

function Counter(){
    const [count,setCount] = useState(0);

    const Increament = () => {
        setCount(count+1);
    }
    const Decrement = () => {
        if(count>0){setCount(count-1)}
        else{
            alert("You are at lowest Point")
        }
    }
    return(
        <div className='main-div'>
        <p>Counter App</p>
        <h1>{count}</h1>
        <button className='countter-btn' onClick={Increament}>+</button>
        <button className='countter-btn' onClick={Decrement}>-</button>
        </div>
        
    );
}

export default Counter;