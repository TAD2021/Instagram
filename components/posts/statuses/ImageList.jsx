'use client'

import clsx from "clsx"
import Image from "next/image"
import { useRef, useState } from "react"
import { FcNext, FcPrevious } from "react-icons/fc"

function ImageList(){
    const imagesRef = useRef(null)
    const [showLeft, setShowLeft] = useState(false)
    const [showRight, setShowRight] = useState(true)

    function onScroll(){
        if(imagesRef.current.scrollLeft > 0){
            setShowLeft(true)
        }else{
            setShowLeft(false)
        }

        if(imagesRef.current.scrollLeft == imagesRef.current.scrollWidth - imagesRef.current.clientWidth){
            setShowRight(false)
        }else{
            setShowRight(true)
        }
    }

    return (
        <div className="relative">   
            <div ref={imagesRef} onScroll={onScroll} className="
                flex overflow-x-scroll max-w-lg w-full
                bg-white border-gray-200 border
                scrollbar-hide scroll-smooth
            ">
                <Image className="rounded-sm" src='/images/post1.jpg' width={imagesRef.current?.clientWidth || '500'} height='500' style={{objectFit:"cover"}} alt=''/> 
                <Image src='/images/post2.jpg' width={imagesRef.current?.clientWidth || '500'} height='500' style={{objectFit:"cover"}} alt=''/> 
                <Image src='/images/post3.jpg' width={imagesRef.current?.clientWidth || '500'} height='500' style={{objectFit:"cover"}} alt=''/> 
                <Image src='/images/post4.jpg' width={imagesRef.current?.clientWidth || '500'} height='500' style={{objectFit:"cover"}} alt=''/> 
            </div>
            <button 
                onClick={() => imagesRef.current.scrollLeft = imagesRef.current.scrollLeft - imagesRef.current.clientWidth}
                className={clsx(`
                    absolute inset-y-1/2 left-2 z-10 w-5 h-5 bg-gray-50 cursor-pointer 
                    flex items-center justify-center rounded-full`
                    ,showLeft ? 'visible' : 'invisible',
                    imagesRef.current?.childElementCount === 1 && 'hidden')}>
                        <FcPrevious className="w-3 h-3"/>
            </button>
            <button 
                onClick={() => imagesRef.current.scrollLeft = imagesRef.current.scrollLeft + imagesRef.current.clientWidth}
                className={clsx(`
                    absolute inset-y-1/2 right-2 z-10 w-5 h-5 bg-gray-50 cursor-pointer 
                    flex items-center justify-center rounded-full`
                    ,showRight ? 'visible' : 'invisible',
                    imagesRef.current?.childElementCount === 1 && 'hidden')}>
                        <FcNext className="w-3 h-3"/>
            </button>
        </div>
    )
}

export default ImageList