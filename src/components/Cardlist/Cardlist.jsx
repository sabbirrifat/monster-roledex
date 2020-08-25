import React from 'react';
import './cardlist.style.css';
import Card from './Cards/Cards'

const Cardlist = (props) => {
    return (
        <div className="card-list">
            {
            props.cards.map( (card, key) =>{
              console.log(key);
              return <Card cards={card} id={key} key={key}/>
            })
          }
        </div>
        
        
     );
}
 
export default Cardlist;