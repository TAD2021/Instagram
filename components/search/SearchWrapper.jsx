'use client'
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { AiOutlineCloseCircle, AiOutlineLoading3Quarters } from "react-icons/ai";

function SearchWrapper(){
    const isSearch = useSelector(state => state.search.search.isSearch)

    return (
        <div className={clsx(`
            hidden
            md:block
            fixed
            left-16
            w-0
            h-full
            z-10
            overflow-hidden
            transition-all duration-500 ease-in-out
        `, isSearch && 'w-96')}>   
            <div className='
                py-2 flex flex-col 
                border-r border-r-gray-300 rounded-r-xl 
                bg-white 
                h-screen'
            >
                <div className='
                    my-2 pt-3 pl-6 pr-4 pb-9
                '>
                    <div>
                        <span className='font-semibold text-2xl'>Search</span>
                    </div>   
                </div>
                <div className='flex flex-col h-full'>
                    <div className='w-full flex h-16'>
                        <div className='mx-4 w-full'>
                            <div className='flex mb-6 h-10 relative'>
                                <input placeholder='Search...' className='rounded-md flex-1 py-1 px-4 bg-gray-100 outline-none'></input>
                                {/* <div className='absolute right-4 top-3 cursor-pointer'>
                                    <AiOutlineCloseCircle className='w-full h-full fill-gray-600'/>
                                </div> */}
                                <div className='absolute right-4 top-3 cursor-pointer'>
                                    <AiOutlineLoading3Quarters className='w-full h-full fill-gray-600'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    )
}

export default SearchWrapper