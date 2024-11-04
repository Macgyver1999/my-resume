import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import fileResume from '../../assets/Nattawat_Suwanduang.pdf'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <>
            <div className="flex flex-col gap-3">
                <div className="text-3xl text-primaryTitle font-semibold">
                    Nattawat Suwanduang
                </div>
                <div className=" text-primaryAccent font-semibold">
                    Programmer / IT Emgineer
                </div>
                <div className="text-sm w-5/6">
                    I always find it exciting to listen to others more than
                    talking. This way I receive new information that is useful
                    for my own development.
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
        </>
    )
}

export default Header
