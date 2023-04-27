import React, { useState } from 'react';
import '../cssfiles/nameupdater.css'

function Nameupdater(){
    const[name,setName] = useState( );
    const[newName,setNewName] = useState()
    
    const eventCatch =(event) => {
        setName(event.target.value)
    }
    const updatedName =() =>{
    setNewName(name)
}
  
return(
    <div className='main-div'>
    <h6>Try this form</h6>
    <input type='text'  placeholder='Enter Your Name' value={name} onChange={eventCatch}/>
    <button type='submit' onClick={updatedName}>Submit</button>
    <h4>Hi ! <br/>My Name is {newName}</h4>

    </div>
);
}
export default Nameupdater;