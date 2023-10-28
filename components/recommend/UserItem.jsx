import Link from "next/link"
import Avatar from "../Avatar"

function UserItem(){
    return (
        <div className="
            flex w-full
            items-center
            max-h-11
        ">
            <div className="mr-3">
                <Avatar image='/images/place-holder.jpg' size='44'/> 
            </div>
            <div className="flex flex-1 flex-col justify-around h-9">
                <div className="h-4 flex items-center">
                    <Link href='/' className="text-sm font-bold">
                        thongle6636
                    </Link>
                </div>
                <div className="h-4 flex items-center">
                    <span className="text-sm text-gray-400">Thông Lê</span>
                </div>
            </div>
            <div className="flex items-center ml-3">
                <span className="text-cyan-600 text-xs font-bold">Chuyển</span>
            </div>
        </div>
    )
}

export default UserItem