import Image from "next/image"
import { useState } from "react"
import Img from "../assets/LinkedIn.png"
import ProfileImage from "../assets/Profile.jpg"
function SignedHeader() {
    const [Show, setShow] = useState(false)
    const [ShowSearch, setShowSearch] = useState(false)

    return (
        <div className="w-full h-20 bg-white text-gray-500 text-2xl flex items-center justify-between flex-shrink-0 lg:sticky lg:top-0 lg:right-0 z-10">
            <div className="w-1/6 h-full flex items-center justify-center">
                <div className="w-full h-12 relative">
                    <Image src={Img} objectFit="contain" layout="fill" className="absolute cursor-pointer" />
                </div>
            </div>
            <div className="w-full h-full text-3xl lg:text-2xl flex items-center justify-between pr-10 relative lg:justify-start">
                {
                    !ShowSearch &&
                    <div className="cursor-pointer lg:w-1/6 flex flex-col items-center justify-evenly h-full">
                        <i className="hover:text-gray-800 cursor-pointer fas fa-search" onClick={() => setShowSearch(true)} />
                        <span className="text-sm text-center hidden lg:block">Search for jobs,companies...</span>
                    </div>
                }
                {
                    ShowSearch &&
                    <div className="w-full h-2/3 ml-2 relative">
                        <input type="text" className="w-full h-full rounded-lg pl-12 text-xl outline-none border-2 focus:border-blue-400" placeholder="Search" />
                        <i className="hover:text-gray-800 cursor-pointer fas fa-search absolute top-1/2 left-2 -translate-y-1/2" />
                    </div>
                }
                {
                    !ShowSearch &&
                    <div className="flex-1 h-full flex items-center ">
                        <div className="w-full lg:w-2/3  h-full flex items-center lg:justify-between justify-evenly lg:pl-10">

                            <div className="cursor-pointer flex flex-col items-center justify-evenly h-full">
                                <i className="hover:text-gray-800 cursor-pointer fas fa-home" />
                                <span className="text-sm text-center hidden lg:block">Home</span>
                            </div>

                            <div className="cursor-pointer flex flex-col items-center justify-evenly h-full">
                                <i className="hover:text-gray-800 cursor-pointer fas fa-users" />
                                <span className="text-sm text-center hidden lg:block">My Network</span>
                            </div>

                            <div className="cursor-pointer flex flex-col items-center justify-evenly h-full">
                                <i className="hover:text-gray-800 cursor-pointer fas fa-briefcase" />
                                <span className="text-sm text-center hidden lg:block">Jobs</span>
                            </div>

                            <div className="cursor-pointer flex flex-col items-center justify-evenly h-full">
                                <i className="hover:text-gray-800 cursor-pointer fas fa-comments" />
                                <span className="text-sm text-center hidden lg:block">Messenging</span>
                            </div>

                            <div className="cursor-pointer flex flex-col items-center justify-evenly h-full">
                                <i className="hover:text-gray-800 cursor-pointer far fa-bell" />
                                <span className="text-sm text-center hidden lg:block">Notifications</span>
                            </div>
                            <div className="flex flex-col items-center justify-evenly lg:w-20">
                                <div className="w-12 h-12 lg:h-10 lg:w-10 relative rounded-full">
                                    <Image src={ProfileImage} objectFit="cover" layout="fill" className="absolute cursor-pointer rounded-full" />
                                </div>
                                <i className="hover:text-gray-800 cursor-pointer fas fa-caret-down hidden lg:block text-lg" />
                            </div>
                        </div>
                        <div className="w-10 md:w-1/5 lg:w-1/4 h-full flex items-center  justify-evenly md:justify-between lg:justify-evenly ">

                            <div className="cursor-pointer flex flex-col items-center justify-evenly h-full">
                                <i className="hover:text-gray-800 fas fa-th cursor-pointer hidden md:block" />
                                <span className="text-sm text-center hidden lg:flex  items-center justify-center">
                                    Work
                                    <i className="hover:text-gray-800 cursor-pointer fas fa-caret-down hidden lg:block text-lg ml-2" />
                                </span>
                            </div>
                            <div className="cursor-pointer flex flex-col items-center justify-evenly h-full">
                                <i className="hover:text-gray-800 fab fa-youtube cursor-pointer hidden md:block" />
                                <span className="text-sm text-center hidden lg:block">Learn Skill</span>
                            </div>


                            <i className="hover:text-gray-800 cursor-pointer fas fa-caret-down md:hidden" onClick={() => {
                                console.log("Hello");
                                setShow(!Show)
                            }} />
                        </div>

                    </div>
                }
                {
                    Show &&
                    <div className="w-1/4 h-full bg-white absolute right-2 z-10 flex items-center justify-evenly rounded-xl md:hidden" style={{
                        top: "115%"
                    }}>
                        <i className="fas fa-th cursor-pointer hover:text-gray-800"></i>
                        <i className="fab fa-youtube cursor-pointer hover:text-gray-800"></i>
                    </div>
                }
            </div>

        </div>
    )
}

export default SignedHeader
