import React from 'react';

import './search-box.css';

function Search (props){


    return(<input className='search'  type='search' placeholder={props.placeholder}  onChange={props.onChange} />);
}

export default Search;