import React, { useState } from 'react';
import '../cssfiles/LuckyNumber.css'

function LuckyNumber(){
    const[number,setNumber] = useState();
    const[count,setCount] = useState(1);
    const[message,setMessage] = useState();

        
    
    function catchNumber(event){
        setNumber(event.target.value)
                
    }
    
    function updateNumber(){
        setCount(count+1)
        if(isNaN(number)){
            alert("Please enter a valid number")
        }
        else if(number==19){
            setMessage("Congratulations! you guessed the right number in "+count+" attempts")
        }else if(number > 19){
            setMessage(
                alert("Your Number is greater"));
        }else if(number < 19){
            setMessage(
                alert("Yout number is smaller"))
        }
    

        
    }

     return(
        <div className='main-div'>
            <h6>Welcome to the game</h6>
            <label for='input'>Guess a lucky number...</label>
            <input name='input' type='number' onChange={catchNumber} value = {number} placeholder='?'/>
            <button className='btn' onClick={updateNumber}>Match Number</button>
            <p> {message}</p>
            
        </div>

     );
}

export default LuckyNumber