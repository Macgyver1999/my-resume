import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { data } from '../../contents/header'
const Header = () => {
    return (
        <>
            <div className='flex flex-col gap-3'>
                <div className='text-3xl text-primaryTitle font-semibold'>
                    {data.name}
                </div>
                <div className='text-primarySubtitle font-semibold'>
                    {data.titlt}
                </div>
                <div className='text-sm w-5/6'>{data.caption}</div>
                <div className='mt-2'>
                    <a href={data.link} target='_blank'>
                        <span className='rounded-md bg-primaryContent text-gray-400 py-2 px-3  hover:text-white'>
                            {data.btnText}
                            <FontAwesomeIcon
                                className='animate-bounce inline-block ml-2 text-sm'
                                icon={faArrowUpRightFromSquare}
                            />
                        </span>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Header
