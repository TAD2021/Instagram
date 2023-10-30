import Link from "next/link"
import UserItem from "../UserItem"

function RecommendList(){
    return (
        <div className="mt-6 mb-2">
            <div className="flex justify-between items-center">
                <div>
                    <span className="text-xs">Suggeted for you</span>
                </div>
                <Link href='/' className="text-xs font-medium">
                    See All
                </Link>
            </div>
            <div className="py-2 flex flex-col">
                <div className="py-2">
                    <UserItem img='/images/user1.jpg' name='t__thien910' description='Follows you'/>
                </div>
                <div className="py-2">
                    <UserItem img='/images/user2.jpg' name='akimanyura1' description='Suggested for you'/>
                </div>
                <div className="py-2">
                    <UserItem img='/images/user3.jpg' name='khanhlinh6980' description='Suggested for you'/>
                </div>
                <div className="py-2">
                    <UserItem img='/images/user4.jpg' name='nerccranel' description='Suggested for you'/>
                </div>
                <div className="py-2">
                    <UserItem img='/images/user5.jpg' name='ngquynh_296' description='New to Instagram'/>
                </div>
            </div>
        </div>
    )
}

export default RecommendList