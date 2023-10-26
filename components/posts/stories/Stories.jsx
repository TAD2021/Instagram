'use client'

import clsx from "clsx";
import Story from "./Story"
import { FcPrevious, FcNext } from "react-icons/fc";
import { useRef, useState } from "react";

function Stories() {
    const storiesRef = useRef(null)
    const [showLeft, setShowLeft] = useState(false)
    const [showRight, setShowRight] = useState(true)

    const onScroll = () => {
        if(storiesRef.current.scrollLeft > 0){
            setShowLeft(true)
        }else{
            setShowLeft(false)
        }

        if(storiesRef.current.scrollLeft == storiesRef.current.scrollWidth - storiesRef.current.clientWidth){
            setShowRight(false)
        }else{
            setShowRight(true)
        }
    }

    return (
        <div className="mb-12">
            <div className="py-2">
                <div className="relative max-w-xl">
                    <div className="">
                        <div ref={storiesRef} onScroll={onScroll} className="
                            flex space-x-2 overflow-x-scroll
                            w-full bg-white border-gray-200
                            p-4 scrollbar-hide scroll-smooth
                        ">
                            <Story />
                            <Story />
                            <Story />
                            <Story />
                            <Story />
                            <Story />
                            <Story />
                            <Story />
                            <Story />
                            <Story />
                            <Story />
                            <Story />
                            <Story />
                        </div>
                        <button 
                            onClick={() => storiesRef.current.scrollLeft = storiesRef.current.scrollLeft - 300}
                            className={clsx(`
                                absolute top-7 z-10 w-8 h-8 bg-gray-50 cursor-pointer 
                                flex items-center justify-center rounded-full`
                                ,showLeft ? 'visible' : 'invisible')}>
                                    <FcPrevious className="w-4 h-4"/>
                        </button>
                        <button 
                            onClick={() => storiesRef.current.scrollLeft = storiesRef.current.scrollLeft + 300}
                            className={clsx(`
                                absolute top-7 right-0 z-10 w-8 h-8 bg-gray-50 cursor-pointer 
                                flex items-center justify-center rounded-full`
                                ,showRight ? 'visible' : 'invisible')}>
                                    <FcNext className="w-4 h-4"/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stories