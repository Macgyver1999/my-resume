import React from 'react'
import About from '../About/About'
import { data } from '../../contents/experience'
import ContentContainer from '../../components/ContentContainer/ContentContainer'

const RightSection = () => {
    return (
        <>
            <div className='grid gap-y-40 px-3'>
                <About />
                <ContentContainer title='Experience' data={data} />
                <div>experience</div>
                <div>experience</div>
                <div>experience</div>
                <div>experience</div>
                <div>experience</div>
                <div>experience</div>
            </div>
        </>
    )
}

export default RightSection
