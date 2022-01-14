import Image from "next/image"
import { useState } from "react"
import GImage from "../assets/GImage.png"
function SignIn() {
    const [showPass, setShowPass] = useState(false)
    return (
        <div className="w-full h-full flex items-center justify-center">
            <div className="p-4 w-2/3 h-4/5 flex flex-col justify-between rounded-lg border-2 shadow-lg shadow-blue-400 bg-white" style={{
                maxWidth:500
            }}>
                <div className="flex flex-col mt-2">
                    <span className="text-3xl">Sign In</span>
                    <span>Stay updated on your professional world</span>
                </div>
                <div className="w-full h-1/3 flex flex-col items-center justify-evenly">
                    <input type="text" className="w-full h-1/3 rounded-lg border-2 border-black outline-none focus:border-blue-500 p-2" placeholder="Email or Phone" />
                    <div className="w-full h-1/3 relative">
                        <input type={showPass ? 'text' : 'password'} className="w-full h-full rounded-lg border-2 border-black outline-none focus:border-blue-500 p-2" placeholder="Password" />
                        <span className="text-blue-500 absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer" onClick={() => {
                            setShowPass(!showPass)
                        }}>
                            {
                                showPass ? "Hide" : "Show"
                            }
                        </span>
                    </div>
                </div>
                <div className="w-full h-8 flex items-center">
                    <a className="cursor-pointer text-blue-500 font-semibold hover:bg-blue-300 rounded-full px-2 hover:underline">Forgot Password?</a>
                </div>
                <div className="h-20 flex items-center justify-center">
                    <button className="cursor-pointer w-4/5 h-3/4 bg-blue-500 rounded-full text-white tracking-wider text-lg font-semibold hover:bg-blue-600">Sign in</button>
                </div>
                <div className="w-full h-8 flex items-center justify-center">
                    Or
                </div>
                <div className="h-20 flex items-center justify-center">
                    <button className="cursor-pointer w-4/5 h-3/4 bg-gray-200 rounded-full text-blue-400 tracking-wider text-lg font-semibold 
                    flex items-center justify-center hover:bg-gray-300">
                        <div className="relative h-2/3 w-14">
                        <Image src={GImage} className="absolute"layout="fill" objectFit="contain"/>
                        </div>
                    </button>
                </div>


            </div>
        </div>
    )
}

export default SignIn
