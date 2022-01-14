function LeftSticky() {
    return (
        <div className="border-2 rounded-xl shadow-lg w-full  mt-4 hidden xl:flex sticky top-2 right-0 flex-col text-xl bg-white" style={{ minHeight: 350 }}>

                    <div className="group hover:bg-gray-200 border-b-2 cursor-pointer p-2 w-full flex flex-col" style={{ minHeight: "25%" }}>
                        <div className="flex items-center justify-between h-full">
                            <span>Recent</span>
                            <i className="group-hover:flex hidden cursor-pointer bg-gray-300 fa fa-chevron-down mr-4  p-4 rounded-full  "></i>
                        </div>
                    </div>
                    <div className="group hover:bg-gray-200 border-b-2 cursor-pointer p-2 w-full flex flex-col" style={{ minHeight: "25%" }}>
                        <div className="flex items-center justify-between h-full">

                            <span className="text-blue-500 underline">Groups</span>
                            <i className="group-hover:flex hidden cursor-pointer bg-gray-300 fa fa-chevron-down mr-4  p-4 rounded-full  "></i>
                        </div>
                    </div>
                    <div className="group hover:bg-gray-200 border-b-2 cursor-pointer p-2 w-full flex flex-col" style={{ minHeight: "25%" }}>
                        <div className="flex items-center justify-between h-full">

                            <span className="text-blue-500 underline">Events</span>
                            <i className="group-hover:flex hidden cursor-pointer bg-gray-300 fa fa-chevron-down mr-4  p-4 rounded-full  "></i>
                        </div>
                    </div>
                    <div className="group hover:bg-gray-200 cursor-pointer p-2 w-full flex flex-col" style={{ minHeight: "25%" }}>
                        <div className="flex items-center justify-between h-full">
                            <span className="text-blue-500 underline">Followed hashtags</span>
                            <i className="group-hover:flex hidden cursor-pointer bg-gray-300 fa fa-chevron-down mr-4  p-4 rounded-full  "></i>
                        </div>
                    </div>
                </div>
    )
}

export default LeftSticky
