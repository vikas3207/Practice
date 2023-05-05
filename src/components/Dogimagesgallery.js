import React, { useEffect, useState } from 'react';
import '../cssfiles/dogimages.css';
import axios from "axios";

export default function DogimagesGallery () {
    const[image,setImage] = useState(' ')
    
    useEffect(() => {
        axios.get('https://dog.ceo/api/breeds/image/random')
        .then((response)=> {
            setImage(response.data.message) 
        })
    },[])
  
    
    return (
        <div className='main-container'>
        <h6>Refresh the Page to get new Pet Image</h6>
        <img src={image} alt='Dog Images' height ="250px" width = "250px"/>
        <p>“No matter how you're feeling, a little dog gonna love you.”</p>
        </div>
    ) ;
}