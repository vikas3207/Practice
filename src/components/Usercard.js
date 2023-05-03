import React, { useState } from 'react'
import '../cssfiles/card.css'


export default function Usercard(){

    const[cards,setCard] = useState([]);
    const getUser = () => {
    fetch('https://reqres.in/api/users/')
    .then(response => response.json())
    .then(data => setCard(data.data))
    .catch(error=> console.log(error))
    }

    return(
        <div className='main-container'>
        <h6> Here We have Some Profiles</h6>
        <button onClick={getUser}> Get User</button>

        <div className='Card-Container'>
            {cards.map(card =>(
            <div>
            <p>{card.id}</p>
            <p>{card.email}</p>
            <p>{card.first_name}</p>
            <p>{card.last_name}</p>
            <img alt ='img' src={card.avatar} />
            </div>
            ))}
            </div>
        </div>
    );
}
