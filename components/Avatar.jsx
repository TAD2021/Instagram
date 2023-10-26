'use client'

import clsx from 'clsx';
import Image from 'next/image'
import { useState } from 'react';

function Avatar({image, size, type}){
    const [width, setWidth] = useState(size)

    return (
        <Image
            src={image}
            width={width}
            height={width}
            className={clsx(`
                rounded-full
                min-w-[27px]
            `, type === "story" && "min-w-[48px]")}
            alt=''
        />
    )
}

export default Avatar