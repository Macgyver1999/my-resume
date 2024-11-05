import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Materail = ({ icon, link }) => {
    return (
        <>
            <a href={link} target='_blank' className='hover:scale-150 duration-200'>
                <FontAwesomeIcon icon={icon} />
            </a>
        </>
    )
}

export default Materail
