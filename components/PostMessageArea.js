function PostMessageArea() {
    return (
        <div className="w-full h-1/2 flex flex-col bg-white">
            <div className="w-full h-2/5 border-b-2 grid grid-cols-2 md:grid-rows-2 md:grid-cols-none">
                <div className="pl-4 flex flex-col items-start font-bold md:border-b-2">
                    <span className="w-2/3 md:w-full  font-normal flex justify-between">
                        Connections
                        <span className="text-blue-500 font-semibold md:mr-4">48</span>
                    </span>
                    Grow your network
                </div>
                <div className="pl-4 flex items-center justify-center border-l-2 md:border-0">
                    <span className="w-4/5 md:w-full  font-normal flex justify-between">
                        Who viewed your profile
                        <span className="text-blue-500 font-semibold mr-4">25</span>
                    </span>
                </div>

            </div>
            <div className="w-full h-1/3 pl-4 flex flex-col justify-center border-b-2">
                <span>Access exclusive tools & insights</span>
                <div className=" flex items-center w-1/3 md:w-full font-semibold text-lg">
                    <div className="w-5 h-5  bg-yellow-400 rounded-sm mr-2" />
                    Try Premium for free
                </div>
            </div>
            <div className="w-full flex-1 md:border-0 flex items-center ">
                <div className="pl-2 w-1/5 md:w-full lg:w-1/2 flex items-center justify-evenly">
                    <i className="fa-solid fa-bookmark text-xl"></i>
                    <span className="font-semibold text-lg">My items</span>
                </div>
            </div>

        </div>
    )
}

export default PostMessageArea
