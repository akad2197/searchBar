import React, { useEffect, useState } from 'react'
import Search from './search'
import List from './list'
import { Users } from '../../Services/MockData'
const SearchList = (props) => {

    const [filteredData,setFilteredData] = useState([])

    const searchOnChange = (e) => {
        const val = e.target.value
        if(!e.target.value){
            setFilteredData([])
            return
        }            
        const filteredData = Users.filter(item => item.clientName.includes(val) || item.policyNumber.includes(val) )
        setFilteredData(filteredData)        
    }      

    return(
        <div className='generic-list-with-search__container'  >
             <Search placeholder="SEARCH (Client Name / Policy Number)" onChange={searchOnChange} />
             {filteredData.length > 0 && <List data={filteredData} />}
        </div>
       
    )
}

export default SearchList