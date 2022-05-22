import React from 'react'
import {PhoneIcon,DocumentIcon,MailIcon} from '../../Assets/Icons/Icons'

const List = (props) => {

    return (
        <div className='list__container'>
            <ul>
               {
                   props.data.map(item =>  <li>
                    <h3>{item.clientName}</h3>
                    <div className='list__property-container' >
                        <div className='list__communicate-container'>
                            <div>
                                <PhoneIcon/>
                                <span>{item.phoneNumber}</span>
                            </div>
                            <div>
                                <MailIcon />
                                <span>{item.email}</span>
                            </div>
                        </div>
                        <div>
                            <DocumentIcon />
                            <span>{item.policyNumber}</span>
                        </div>
                    </div>
                    </li>)
               }               
            </ul>
        </div>
    )
}

export default List