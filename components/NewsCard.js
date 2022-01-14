function NewsCard(props) {
    return (
        <div className="h-1/4 w-full hover:bg-gray-300 flex items-center cursor-pointer rounded-lg">
            <i className="fas fa-circle justify-center h-1/3 w-8 flex" style={{ fontSize: 10 }}></i>
            <div className="flex-1">
                <span className="text-lg">{props.question}</span>
                <div className="text-gray-500 font-normal flex items-center justify-between w-4/5 xl:w-3/5">
                    <span>{props.time} ago</span>
                    <i className="fas fa-circle pt-1" style={{
                        fontSize: 6
                    }}></i>
                    <span>{props.readers} readers</span>
                </div>
            </div>
        </div>
    )
}

export default NewsCard
