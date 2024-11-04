import Header from '../Header'
import Navbar from '../Navbar'
import Contact from '../Contact'

const LeftSection = () => {
    return (
        <>
            <div>
                <div className="sticky top-14 grid grid-rows-[35%_45%_20%] h-[90vh]">
                    <Header />
                    <Navbar />
                    <Contact />
                </div>
            </div>
        </>
    )
}

export default LeftSection
