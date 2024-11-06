import React, { useState } from 'react'
import FormattedDate from '../FormattedDate/FormattedDate'
import Picture from '../Picture/Picture'
import TitleLink from '../TitleLink/TitleLink'
import Materail from '../Materail/Materail'
import Description from '../Description/Description'
import Skill from '../Skill/Skill'

const ContentContainer = ({ title: sectionTitle = '', data = [] }) => {
    const [isMouseEnter, setIsMouseEnter] = useState({})
    const SECTION_ID = `${sectionTitle}-section`
    return (
        <>
            <div id={SECTION_ID}>
                <div className='text-primarySubtitle font-medium px-2'>{sectionTitle}</div>
                {data.map(({ date = '', title = '', link = '', materails = [], descriptions = [], skills = [], picture = '' }, index) => {
                    return (
                        <div
                            key={`${SECTION_ID}-${index}`}
                            className={`grid grid-cols-[25%_75%] duration-200 rounded-md px-2 py-6 ${
                                isMouseEnter[`${SECTION_ID}-${index}`] ? 'bg-primaryBase' : ''
                            }`}
                            onMouseEnter={() => setIsMouseEnter({ [`${SECTION_ID}-${index}`]: true })}
                            onMouseLeave={() => setIsMouseEnter({ [`${SECTION_ID}-${index}`]: false })}
                        >
                            <div>
                                <FormattedDate isHighLight={isMouseEnter[`${SECTION_ID}-${index}`]}> {date}</FormattedDate>
                                <Picture picture={picture} title={title} />
                            </div>
                            <div className='flex flex-col gap-y-4'>
                                <TitleLink title={title} link={link} isHighLight={isMouseEnter[`${SECTION_ID}-${index}`]} />
                                {materails.length > 0 ? (
                                    <div className='flex gap-4 text-2xl items-center'>
                                        {materails.map((e, i) => {
                                            return <Materail key={`materails-${i}`} icon={e.type} link={e.link} />
                                        })}
                                    </div>
                                ) : null}

                                {descriptions.map((e, i) => {
                                    return <Description key={`descriptions-${i}`} description={e} />
                                })}
                                {skills.map((e, i) => {
                                    return <Skill key={`skills-${i}`} isHighLight={isMouseEnter[`${SECTION_ID}-${index}`]} data={e} />
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default ContentContainer
