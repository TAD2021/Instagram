import Statuses from "./statuses/Statuses"
import Stories from "./stories/Stories"

function PostsList() {
    return (
        <div className="max-w-xl w-full">
            <div className="mt-4">
                <Stories/>
                <Statuses/>
            </div>
        </div>
    )
}

export default PostsList