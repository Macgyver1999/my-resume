const TitleLink = ({ title, link, isHighLight }) => {
    if (!link) {
        return <div className='text-primarySubtitle'>{title}</div>
    }
    return (
        <>
            <div className='text-primarySubtitle'>
                {title}
                <a href={link} target='_blank'>
                    <FontAwesomeIcon
                        className={`text-xs -rotate-45 duration-300 ease-out ${isHighLight['exp1'] ? 'translate-x-1 -translate-y-1' : ''}`}
                        icon={faArrowRight}
                    />
                </a>
            </div>
        </>
    )
}

export default TitleLink
