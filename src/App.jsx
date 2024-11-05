import './App.css'
import LeftSection from './sections/LeftSection/LeftSection'
import RightSection from './sections/RightSection/RightSection'

function App() {
    return (
        <>
            <div className='mt-14 max-w-6xl grid gap-y-5 lg:grid-cols-[35%_65%] mx-auto'>
                <LeftSection />
                <RightSection />
            </div>
        </>
    )
}

export default App
