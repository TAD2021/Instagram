'use client'

import Image from 'next/image'
import { useState } from 'react';

function Avatar({image, size}){
    const [width, setWidth] = useState(24)

    if(size === "lg"){
        setWidth(40)
    }

    return (
        <Image
            src={image}
            width={width}
            height={width}
            className='
                rounded-full
            '
        />
    )
}

export default Avatar