import React from 'react';
import './search.style.css'

const SearchField = (props) => {
    return ( 
        <div className="search-field">
            <input type="search" placeholder="search here..." onChange = {props.handleChange}/>
        </div>
     );
}
 
export default SearchField;