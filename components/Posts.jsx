import Image from "next/image"
import Img from "../assets/post.jpg"
import PostImg from "../assets/Profile.jpg"
function Posts(props) {
    return (
        <div className={`w-full md:rounded-xl md:shadow-lg bg-slate-50 ${props.className} my-3 flex flex-col`} style={{ minHeight: "90vh" }}>
            <div className="w-full h-32 flex items-center p-2 ">
                <div className="w-4/5 h-full flex items-center">
                    <div className="h-2/3">
                        <div className="w-16 h-16 relative ">
                            <Image src={PostImg} className="absolute rounded-full cursor-pointer" layout="fill" objectFit="cover" />
                        </div>
                    </div>

                    <div className="h-full flex flex-col  justify-center ml-2">
                        <span className="font-semibold text-xl hover:underline cursor-pointer">First Post</span>
                        <div>
                            <span>4,000 followers</span>
                            <div className="w-full flex items-center">
                                <span>45min ago</span>
                                <i className="fas fa-globe-americas ml-2 pt-2"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hover:bg-blue-400 h-1/3 w-1/6 text-xl rounded-lg flex items-center justify-evenly cursor-pointer">
                    <span>Follow</span>
                    <i class="fas fa-plus"></i>
                </div>

            </div>
            <div className="w-full h-32 bg-green-100">

            </div>
            <div className="w-full h-1/2 bg-black relative">
                <Image src={Img} className="absolute" layout="fill" objectFit="cover" />
            </div>
            <div className="w-full h-14 bg-gray-400">

            </div>
            <div className="flex-1 ">

            </div>
        </div>
    )
}

export default Posts
