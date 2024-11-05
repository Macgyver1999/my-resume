const Skill = ({ isHighLight, data }) => {
    return (
        <>
            <div className='flex gap-4 text-sm'>
                {data.map((e, i) => {
                    return (
                        <div
                            key={`${e}-skill-${i}`}
                            className={`bg-primaryContent px-2 py-1 rounded-md ${isHighLight ? 'text-white' : ''} text-gray-500`}
                        >
                            {e}
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Skill
