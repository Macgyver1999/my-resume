import { faGithub, faStackOverflow, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import picExp from '../../assets/BlackCat.png'
import hayate from '../../assets/hayate.jpeg'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Experience = () => {
    const [isMouseEnter, setIsMouseEnter] = useState({})
    return (
        <>
            <div className=''>
                <div className='text-primarySubtitle font-medium'>Experience</div>
                <div
                    className={`grid grid-cols-[25%_75%] duration-200 ${isMouseEnter['exp1'] ? 'bg-primaryBase' : ''}  rounded-md px-2 py-6`}
                    onMouseEnter={() => setIsMouseEnter({ exp1: true })}
                    onMouseLeave={() => setIsMouseEnter({ exp1: false })}
                >
                    <div>
                        <div>
                            <span className='text-sm'>2022-2023</span>
                        </div>
                        <div className='w-5/6 rounded-md border-2 border-primarySubtitle'>
                            <img src={picExp} />
                        </div>
                    </div>
                    <div className='flex flex-col gap-y-4'>
                        <div className='text-primarySubtitle'>
                            Resume
                            <FontAwesomeIcon
                                className={`text-xs -rotate-45 duration-300 ease-out ${isMouseEnter['exp1'] ? 'translate-x-1 -translate-y-1' : ''}`}
                                icon={faArrowRight}
                            />
                        </div>
                        <div className='flex gap-4 text-2xl'>
                            <a href='https://github.com/Macgyver1999' target='_blank' className='hover:scale-150 duration-200'>
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                            <a href='https://www.youtube.com/@Macgyver1999' target='_blank' className='hover:scale-150 duration-200'>
                                <FontAwesomeIcon icon={faYoutube} />
                            </a>
                            <a href='https://stackoverflow.com/users/27882158/macgyver' target='_blank' className='hover:scale-150 duration-200'>
                                <FontAwesomeIcon icon={faStackOverflow} />
                            </a>
                        </div>
                        <div className='text-sm'>My resume create for keep my project built with react & tailwind</div>
                        <div>
                            <div className='flex gap-4 text-sm'>
                                <div className={`bg-primaryContent px-2 py-1 rounded-md ${isMouseEnter['exp1'] ? 'text-white' : ''} text-gray-500`}>
                                    React
                                </div>
                                <div className={`bg-primaryContent px-2 py-1 rounded-md ${isMouseEnter['exp1'] ? 'text-white' : ''} text-gray-500`}>
                                    Tailwind
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className={`grid grid-cols-[25%_75%] duration-200 ${isMouseEnter['exp2'] ? 'bg-primaryBase' : ''}  rounded-md px-2 py-6`}
                    onMouseEnter={() => setIsMouseEnter({ exp2: true })}
                    onMouseLeave={() => setIsMouseEnter({ exp2: false })}
                >
                    <div>
                        <div>
                            <span className='text-sm'>2022-2023</span>
                        </div>
                        <div className='w-5/6 rounded-md border-2 border-primarySubtitle'>
                            <img src={hayate} />
                        </div>
                    </div>
                    <div className='flex flex-col gap-y-4'>
                        <div className='text-primarySubtitle'>
                            Resume
                            <FontAwesomeIcon
                                className={`text-xs -rotate-45 duration-300 ease-out ${isMouseEnter['exp2'] ? 'translate-x-1 -translate-y-1' : ''}`}
                                icon={faArrowRight}
                            />
                        </div>
                        <div className='flex gap-4 text-2xl'>
                            <a href='https://github.com/Macgyver1999' target='_blank' className='hover:scale-150 duration-200'>
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                            <a href='https://www.youtube.com/@Macgyver1999' target='_blank' className='hover:scale-150 duration-200'>
                                <FontAwesomeIcon icon={faYoutube} />
                            </a>
                            <a href='https://stackoverflow.com/users/27882158/macgyver' target='_blank' className='hover:scale-150 duration-200'>
                                <FontAwesomeIcon icon={faStackOverflow} />
                            </a>
                        </div>
                        <div className='text-sm'>My resume create for keep my project built with react & tailwind</div>
                        <div>
                            <div className='flex gap-4 text-sm'>
                                <div className={`bg-primaryContent px-2 py-1 rounded-md ${isMouseEnter['exp2'] ? 'text-white' : ''} text-gray-500`}>
                                    React
                                </div>
                                <div className={`bg-primaryContent px-2 py-1 rounded-md ${isMouseEnter['exp2'] ? 'text-white' : ''} text-gray-500`}>
                                    Tailwind
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Experience
