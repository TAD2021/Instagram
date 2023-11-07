'use client'

import Avatar from "./Avatar"
import {FiMoreHorizontal} from "react-icons/fi"
import {AiOutlineClose} from "react-icons/ai"
import { useState } from "react"
import clsx from "clsx"

function UserItem({
    img, 
    name, 
    description, 
    owner, 
    status, 
    search,
    time
}){
    const [active, setActive] = useState(true)

    return (
        <div className="
            flex w-full
            items-center
            max-h-12
        ">
            <div className="mr-3">
                <div className={clsx(`bg-transparent p-[2px] rounded-full`, active && 'bg-gradient-to-tr from-yellow-500 to-red-600')}>
                    <div className="bg-white rounded-full p-[2px]">
                        <Avatar image={img} type="status"/> 
                    </div>
                </div>
            </div>
            <div className="flex flex-1 flex-col justify-around h-9">
                <div className="h-4 flex items-center">
                    <span onClick={(e) => {
                            e.stopPropagation();
                            window.location.href='/';
                        }}            
                        className="text-xs font-bold"
                    >
                        {name}
                    </span>
                    {time && <div className="text-gray-400">
                        <span className="px-1">•</span>
                            <span onClick={(e) => {
                                e.stopPropagation();
                                window.location.href='/';
                            }}            
                            className="text-xs font-bold"
                        >
                            <span className="text-xs">
                                <time dateTime="2017-03-08">
                                    10w
                                </time>
                            </span>
                        </span>    
                    </div>}
                </div>
                <div className="h-4 flex items-center">
                    <span className={clsx(`text-xs`, status ? '' : 'text-gray-400')}>{description}</span>
                </div>
            </div>
            <div className="flex items-center ml-3 cursor-pointer">
                {status ? <FiMoreHorizontal className="h-5 w-5"/> :
                    search ? (
                        <AiOutlineClose className="h-5 w-5"/> 
                    ) : (
                        <span className="text-cyan-400 text-xs font-semibold">
                            {owner ? 'Switch' : 'Follow'}
                        </span>
                    )
                }
            </div>
        </div>
    )
}

export default UserItem