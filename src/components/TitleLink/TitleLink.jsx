import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const TitleLink = ({ title, link, isHighLight }) => {
    if (!link) {
        return <div className='text-primarySubtitle'>{title}</div>
    }
    return (
        <>
            <div className='text-primarySubtitle'>
                <a href={link} target='_blank'>
                    {title}
                    <FontAwesomeIcon
                        className={`text-xs -rotate-45 duration-300 ease-out px-1 ${isHighLight ? 'translate-x-1 -translate-y-1' : ''}`}
                        icon={faArrowRight}
                    />
                </a>
            </div>
        </>
    )
}

export default TitleLink
