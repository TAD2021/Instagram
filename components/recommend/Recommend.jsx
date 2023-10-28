import UserItem from "./UserItem"

function Recommend(){
    return (
        <div className="
            w-96 h-screen
            pl-16
        ">
            <div className="
                mt-9 bg-transparent
                flex flex-col items-stretch
            ">
                <div className="
                    px-4 bg-transparent
                    flex flex-shrink-0
                ">
                    <UserItem />
                </div>
            </div>
        </div>
    )
}

export default Recommend