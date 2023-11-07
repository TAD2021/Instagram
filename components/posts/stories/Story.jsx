import Avatar from "@/components/Avatar"

function Story() {
    return (
        <div>
            <div className="bg-gradient-to-tr from-yellow-500 to-red-600 h-16 w-16 p-[2px] rounded-full">
                <div className="bg-white rounded-full p-[2px] w-full h-full">
                    <Avatar image='/images/story.jpg' type="story"/>
                </div>
            </div>
            <div className="w-16">
                <p className="text-xs truncate text-center">destiny_s_y</p>
            </div>
        </div>
    )
}

export default Story