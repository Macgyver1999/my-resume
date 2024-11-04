import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faArrowRight,
    faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'
import './App.css'
import fileResume from './assets/Nattawat_Suwanduang.pdf'
import {
    faFacebookF,
    faGithub,
    faInstagram,
} from '@fortawesome/free-brands-svg-icons'
function App() {
    return (
        <>
            <div className="mt-14 max-w-6xl grid grid-cols-[40%_60%] mx-auto">
                <div>
                    <div className="sticky top-14 grid grid-rows-[35%_45%_20%] h-[90vh]">
                        <div className="flex flex-col gap-3">
                            <div className="text-3xl text-primaryTitle font-semibold">
                                Nattawat Suwanduang
                            </div>
                            <div className=" text-primaryAccent font-semibold">
                                Programmer / IT Emgineer
                            </div>
                            <div className="text-sm w-5/6">
                                I always find it exciting to listen to others
                                more than talking. This way I receive new
                                information that is useful for my own
                                development.
                            </div>
                            <div className="mt-2">
                                <a href={fileResume} target="_blank">
                                    <span className="rounded-md bg-primaryTitle text-gray-500 py-2 px-3">
                                        View Resume
                                        <FontAwesomeIcon
                                            className="animate-bounce inline-block ml-2 text-sm"
                                            icon={faArrowUpRightFromSquare}
                                        />
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 font-semibold">
                            <div>
                                <FontAwesomeIcon
                                    className="mr-2 text-primaryTitle"
                                    icon={faArrowRight}
                                />
                                About
                            </div>
                            <div>Experience</div>
                            <div>Project</div>
                            <div>Article</div>
                        </div>
                        <div className="flex items-end gap-4 text-2xl">
                            <FontAwesomeIcon
                                className="hover:scale-150 hover:text-primaryContent transition-all"
                                icon={faGithub}
                            />
                            <FontAwesomeIcon
                                className="hover:scale-150 hover:text-primaryContent transition-all"
                                icon={faInstagram}
                            />
                            <FontAwesomeIcon
                                className="hover:scale-150 hover:text-primaryContent transition-all"
                                icon={faFacebookF}
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <div>about</div>
                    <div className="mb-96">experience</div>
                    <div className="mb-96">experience</div>
                    <div className="mb-96">experience</div>
                    <div className="mb-96">experience</div>
                </div>
            </div>
        </>
    )
}

export default App
