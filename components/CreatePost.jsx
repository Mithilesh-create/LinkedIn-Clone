import Image from "next/image"
import Img from "../assets/Profile.jpg"
function CreatePost() {
    return (
        <div className="w-full h-48 mt-2 flex items-center justify-center  p-2">
            <div className="w-full h-full border-2 border-gray-400 rounded-lg bg-gray-100 shadow-lg">
                <div className="w-full h-1/2 flex items-center justify-evenly">
                    <div className="w-20 h-20 relative rounded-full">
                        <Image src={Img} layout="fill" objectFit="cover" className="rounded-full" />
                    </div>
                    <input type="text" className="w-2/3 h-2/3 rounded-full pl-4 font-semibold text-lg cursor-pointer outline-none border-2 hover:bg-gray-200 border-gray-600" placeholder="Start a post" />
                </div>
                <div className="w-full h-1/2 flex items-center justify-evenly text-lg">
                    <div className="w-1/5 h-4/5 flex items-center justify-evenly rounded-lg cursor-pointer hover:bg-slate-300">
                        <i className="fas text-3xl fa-image text-blue-300"></i>
                        <span>Image</span>
                    </div>
                    <div className="w-1/5 h-4/5 flex items-center justify-evenly rounded-lg cursor-pointer hover:bg-slate-300">
                        <i className="fab fa-youtube text-green-400 text-3xl"></i>
                        <span>Video</span>
                    </div>
                    <div className="w-1/5 h-4/5 flex items-center justify-evenly rounded-lg cursor-pointer hover:bg-slate-300">
                        <i className="fas text-3xl fa-calendar-week text-yellow-500"></i>
                        <span>Event</span>
                    </div>
                    <div className="w-1/3 h-4/5 flex items-center justify-evenly rounded-lg cursor-pointer hover:bg-slate-300">
                        <i className="fas text-3xl fa-newspaper text-red-400"></i>
                        <span>Write Article</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreatePost
