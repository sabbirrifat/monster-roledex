import React from 'react';

import './cards.style.css';


const Card = (props) => {
    return ( 
        <div className="card-container">
            <img src={  `https://robohash.org/${props.id}?set=set2&size=500x500` } alt=""/>
            <h2>{props.cards.name}</h2>
            <h4>{props.cards.email}</h4>
        </div>
     );
}
 
export default Card;