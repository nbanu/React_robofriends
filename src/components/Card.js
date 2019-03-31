import React from 'react';
import './Card.css';


const Card=({name,email,id})=>{
    return (
        <div className ='tc bg-light-green dib br3 bw2 sd5 pd3 ma2 grow'>
    
        <img src={`https://robohash.org/${id}?200x200`} alt='robots'></img>
        <div>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
        </div>
        
    );
}

export default Card;    