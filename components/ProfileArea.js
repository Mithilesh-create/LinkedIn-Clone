import Image from "next/image"
import Img from "../assets/Profile.jpg"
function ProfileArea() {
    return (
        <div className="bg-white w-full h-2/3 md:h-1/2 flex flex-col items-center border-b-2 md:border-b-0 justify-between">
            <div className="bg-host w-full h-2/5 relative bg-center bg-cover bg-no-repeat md:rounded-lg">
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 border-white border-2 rounded-full">
                    <Image src={Img} layout="fill" className="absolute rounded-full" objectFit="cover" />
                </div>
            </div>
            <div className="w-full h-1/3 flex flex-col text-center md:h-2/5">
                <span className="text-xl font-semibold hover:underline cursor-pointer">Mithilesh Sharma</span>
                <span className="text-gray-500">
                    MERN stack | React Native | Blockchain developer | EXTC engineering student
                </span>
            </div>
        </div>
    )
}

export default ProfileArea
