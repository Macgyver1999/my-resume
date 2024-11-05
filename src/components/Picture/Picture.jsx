import React from 'react'

const Picture = ({ picture, title }) => {
    return (
        <>
            <div className='w-5/6 rounded-md border-2 border-primarySubtitle'>
                <img src={picture} alt={title} />
            </div>
        </>
    )
}

export default Picture
