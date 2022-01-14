import Image from "next/image"
import CreatePost from "./CreatePost"
import NewsCard from "./NewsCard"
import PostMessageArea from "./PostMessageArea"
import Posts from "./Posts"
import ProfileArea from "./ProfileArea"
import Img from "../assets/Jobs.png"
import LeftSticky from "./LeftSticky"
function MainPlayArea() {
    return (
        <div className="flex flex-col flex-1 md:grid md:grid-cols-12 bg-gray-200">
            <div className="w-full h-96 md:h-full md:col-span-4 lg:col-span-3 flex xl:flex-col xl:items-center md:p-2 relative">
                <div className="w-full md:h-4/5 h-full flex flex-col justify-between items-center md:shadow-lg  md:rounded-lg border lg:w-full mt-2" style={{ maxHeight: 600 }}>
                    <ProfileArea />
                    <PostMessageArea />
                </div>
                <LeftSticky/>
            </div>

            <div className="w-full flex-1 flex flex-col h-auto md:col-span-8 lg:col-span-5 " style={{ minHeight: "50%" }}>
                <CreatePost />
                <Posts className="" />
                <Posts className="" />
                <Posts className="" />


            </div>
            <div className="hidden md:col-span-4 lg:flex flex-col items-center p-9">
                <div className="w-full border-2 shadow-lg rounded-xl font-semibold bg-white" style={{ height: "50vh" }}>
                    <div className="text-xl flex items-center justify-between w-full h-1/5 p-2">
                        <span>LinkedIn News</span>
                        <span className="w-5 h-5 bg-black flex items-center justify-center text-white text-sm cursor-pointer">
                            <i className="fas fa-info"></i>
                        </span>
                    </div>
                    <div className="w-full h-4/5">
                        <NewsCard question="Hello wassup here take?" time="2hrs" readers="4,000" />
                        <NewsCard question="Hello wassup here take?" time="2hrs" readers="4,000" />
                        <NewsCard question="Hello wassup here take?" time="2hrs" readers="4,000" />
                        <NewsCard question="Hello wassup here take?" time="2hrs" readers="4,000" />

                    </div>
                </div>
                <div className="w-full h-1/3 sticky top-2 right-0 rounded-xl mt-4 bg-gray-900" style={{ height: "35vh" }}>
                    <Image src={Img} layout="fill" objectFit="contain" className="absolute rounded-xl cursor-pointer" />
                </div>
            </div>



        </div>
    )
}

export default MainPlayArea
