import './App.css'
import LeftSection from './sections/LeftSection'
import RightSection from './sections/RightSection'

function App() {
    return (
        <>
            <div className="mt-14 max-w-6xl grid grid-cols-[40%_60%] mx-auto">
                <LeftSection />
                <RightSection />
            </div>
        </>
    )
}

export default App
