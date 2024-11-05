import {
    faFacebookF,
    faGithub,
    faInstagram,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Contact = () => {
    return (
        <>
            <div className='flex items-end gap-4 text-2xl'>
                <FontAwesomeIcon
                    className='hover:scale-150 hover:text-primaryContent transition-all'
                    icon={faGithub}
                />
                <FontAwesomeIcon
                    className='hover:scale-150 hover:text-primaryContent transition-all'
                    icon={faInstagram}
                />
                <FontAwesomeIcon
                    className='hover:scale-150 hover:text-primaryContent transition-all'
                    icon={faFacebookF}
                />
            </div>
        </>
    )
}

export default Contact
