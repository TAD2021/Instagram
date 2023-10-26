'use client'

import Image from 'next/image'
import { useState } from 'react';

function Avatar({image, size}){
    const [width, setWidth] = useState(size)

    return (
        <Image
            src={image}
            width={width}
            height={width}
            className='
                rounded-full
                min-w-[27px]
            '
        />
    )
}

export default Avatar