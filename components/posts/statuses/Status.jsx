import UserItem from "@/components/UserItem"
import ImageList from "./ImageList"
import Actions from "./Actions"
import Reel from "@/components/Reel"

function Status({type}){
    return (
        <article className="mx-1">
            <div className="
                pb-4 border-b mb-5 border-gray-300
                flex flex-col
            ">
                <div className="pl-1 pb-3">
                    <UserItem img='/images/user6.jpg' name='artof666k' description='Singapore' time='10w' status/>
                </div>
                {type === "img" && <ImageList/>}
                {type === "video" && <Reel/>}
                <Actions/>       
            </div>
        </article>
    )
}

export default Status