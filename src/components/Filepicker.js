import {useRef} from 'react';
import '../cssfiles/Filepicker.css'

export default function Filepicker(){
    let fileInput = useRef();

    const buttonClick=()=>{
    fileInput.current = fileInput.current.click();


    }
        return(
        <div className='main-div'>
            <h6>React useRef Hooks Functions:</h6>
            &nbsp;
            <input type="file" ref={fileInput} hidden={true}/> 
            <button onClick={buttonClick} className='btn'>pick the file</button>

        </div>
    )
}