import React, { useState } from 'react';
import { CiCircleRemove,CiCircleCheck } from "react-icons/ci";
import '../cssfiles/listitems.css'

function ListItems(props) {
    const[line,setLine] = useState(false)
    const checkMark = () => {
         setLine(true);
    }
     const removMark = () => {
        setLine(false);
    }
    return (
        <>
            <div className='List-items'>
               <li style={{textDecoration: line ? "line-through" : "none"}}> {props.text}</li>
               <CiCircleCheck className='list-btn check-btn ' onClick={checkMark}/>
                <span style={{ display: line ? '' : 'none' }}><CiEraser className='list-btn remove-btn ' onClick={removMark} /></span>
               <CiCircleRemove onClick={() => { props.onSelect(props.id) }} className='list-btn'/>
               
            </div>
        </>
    )

}

export default ListItems;
