import RecommendList from "./RecommendList"
import UserItem from "./UserItem"

function Recommend(){
    return (
        <div className="
            hidden recommend
            w-96 h-screen
            pl-16
        ">
            <div className="
                mt-9 bg-transparent
                flex flex-col items-stretch
            ">
                <div className="
                    px-4 bg-transparent
                    flex flex-shrink-0 flex-col
                ">
                    <UserItem img='/images/place-holder.jpg' name='thongle6636' description='Thong Le' owner/>
                    <RecommendList/>
                </div>
            </div>
        </div>
    )
}

export default Recommend