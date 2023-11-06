import Link from "next/link"
import UserItem from "../UserItem"

function SearchItem({img, name, description}){

    return (
        <li className="hover:bg-gray-200">
            <Link href='/'>
                <div className="py-2 px-6">
                    <UserItem img={img} name={name} description={description} search/>
                </div>
            </Link>
        </li>
    )
}

export default SearchItem