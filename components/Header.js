import Image from "next/image"
import Img from "../assets/LinkedInLogo.png"
function Header() {
    return (
        <div className="h-32 w-full">
            <div className="w-32 h-full  flex items-center justify-center ml-8 aspect-video relative">
                <Image src={Img} className="absolute" />
            </div>
        </div>
    )
}

export default Header
