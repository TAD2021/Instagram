import SearchItem from "./SearchItem"

function RecentSearch(){

    return (
        <div className="w-full">
            <div className="mt-1 mb-2 mx-6 pt-1 flex justify-between">
                <div>
                    <span className="font-semibold">Recent</span>
                </div>
                <div>
                    <button className='
                        text-sm text-cyan-600 font-semibold hover:text-cyan-800'
                    >Clear all</button>
                </div>
            </div>
            <div className="flex h-96">
                <ul className="my-2 flex flex-col flex-1 h-full scroll-smooth overflow-y-auto">
                    <SearchItem img='/images/place-holder.jpg' name='thongle6636' description='Thong Le'/>
                    <SearchItem img='/images/post1.jpg' name='t__thien910' description='querry'/>
                    <SearchItem img='/images/place-holder.jpg' name='thongle6636' description='Thong Le'/>
                    <SearchItem img='/images/post1.jpg' name='t__thien910' description='querry'/>
                    <SearchItem img='/images/place-holder.jpg' name='thongle6636' description='Thong Le'/>
                    <SearchItem img='/images/post1.jpg' name='t__thien910' description='querry'/>
                    <SearchItem img='/images/place-holder.jpg' name='thongle6636' description='Thong Le'/>
                    <SearchItem img='/images/post1.jpg' name='t__thien910' description='querry'/>
                </ul>
            </div>
        </div>
    )
}

export default RecentSearch