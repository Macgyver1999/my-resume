const FormattedDate = ({ isHighLight, children }) => {
    return (
        <>
            <div>
                <span className={`text-sm ${isHighLight ? 'text-primarySubcontent' : ''}`}>{children}</span>
            </div>
        </>
    )
}

export default FormattedDate
