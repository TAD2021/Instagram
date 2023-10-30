'use client'

import Link from "next/link"
import Avatar from "../Avatar"
import { useState } from "react"
import clsx from "clsx"

function UserItem({img, name, description, owner}){
    const [active, setActive] = useState(false)

    return (
        <div className="
            flex w-full
            items-center
            max-h-11
        ">
            <div className="mr-3">
                <div className={clsx(`bg-transparent p-[1.5px] rounded-full`, active && 'bg-gradient-to-tr from-yellow-500 to-red-600')}>
                    <div className="bg-white rounded-full p-1">
                        <Avatar image={img} size='44'/> 
                    </div>
                </div>
            </div>
            <div className="flex flex-1 flex-col justify-around h-9">
                <div className="h-4 flex items-center">
                    <Link href='/' className="text-xs font-bold">
                        {name}
                    </Link>
                </div>
                <div className="h-4 flex items-center">
                    <span className="text-xs text-gray-400">{description}</span>
                </div>
            </div>
            <div className="flex items-center ml-3">
                <span className="text-cyan-400 text-xs font-semibold">
                    {owner ? 'Switch' : 'Follow'}
                </span>
            </div>
        </div>
    )
}

export default UserItem