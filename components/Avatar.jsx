'use client'

import clsx from 'clsx';
import Image from 'next/image'

function Avatar({image, type}){
    return (
        <Image
            src={image}
            width={60}
            height={60}            
            className={clsx(`
                rounded-full
                min-w-[27px]
                object-cover
            `,  type === 'status' && "h-10 w-10",
                type === 'story' && "w-full h-full",
                type === "sidebar" && "w-[27px] h-[27px]"
            )}
            alt=''
        />
    )
}

export default Avatar