import React from 'react';
import '../ccsfiles/Card.css';

function Card({details,btnFunction}){
    
    const {
    productId,
   productPic,
   productName,
   Brand,
   productDescription,
   Price,
   Rating
    } = details
    
    // const cartAlert = () => {
    //     alert(productName)
    // }

    return(
        <div className='main-container'>
            <div className='card'>
                <img src={productPic} alt="productimage"/>
                <p>ID {productId} </p>
                <h3>{productName}</h3>
                <h4>{Brand}</h4>
                <p>{productDescription}</p>
                <p className='price-rate'>price: {Price}</p>
                <p className='price-rate'>Rating: {Rating}</p>
                <button className='Card-btn' onClick={btnFunction}>ADD TO CART</button>
            </div>
        </div>
    );
}
export default Card;