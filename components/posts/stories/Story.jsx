import Avatar from "@/components/Avatar"

function Story() {
    return (
        <div>
            <div className="bg-gradient-to-tr from-yellow-500 to-red-600 p-[1.5px] rounded-full">
                <div className="bg-white rounded-full p-1">
                   <Avatar image='/images/place-holder.jpg' size='48' type="story"/>
                </div>
            </div>
            <p className="w-12 text-xs truncate text-center">thongdada</p>
        </div>
    )
}

export default Story