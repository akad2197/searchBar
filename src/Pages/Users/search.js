import React from 'react'
import {SearchIcon} from '../../Assets/Icons/Icons'

const Search = (props) => {


    return(
       <div className='search__container'>
           <SearchIcon />
           <input onChange={props.onChange} placeholder={props.placeholder}  />
       </div>
    )
    
}

export default Search