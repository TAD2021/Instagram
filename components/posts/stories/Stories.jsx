'use client'

import clsx from "clsx";
import Story from "./Story"
import { FcPrevious, FcNext } from "react-icons/fc";
import { useRef, useState } from "react";

function Stories() {
    const storiesRef = useRef(null)
    const [showLeft, setShowLeft] = useState(false)
    const [showRight, setShowRight] = useState(true)

    console.log(storiesRef.current)
    const onScroll = () => {
        if(storiesRef.current.scrollLeft > 0){
            setShowLeft(true)
        }else{
            setShowLeft(false)
        }
    }

    return (
        <div className="mb-12">
            <div className="py-2">
                <div className="relative">
                    <div className="absolute">
                        <div className="
                            flex space-x-2 overflow-x-scroll 
                            max-w-xl bg-white border-gray-200 
                            p-4 scrollbar-hide scroll-smooth
                        "
                            ref={storiesRef}
                            onScroll={onScroll}
                        >
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
                            <Story />
                            <Story />
                            <Story />
                            <Story />
                            <Story />
                            <Story />
                            <Story />
                            <Story />
                        </div>
                        <div className="absolute -top-1 w-full h-full flex justify-between z-10 items-center" >
                            {storiesRef && (
                                <div className="w-8 h-8 bg-gray-50 cursor-pointer flex items-center justify-center rounded-full">
                                    <FcPrevious className={clsx(`
                                        w-4 h-4`
                                    )}/>
                                </div>
                            )}
                            <div className="w-8 h-8 bg-gray-50 cursor-pointer flex items-center justify-center rounded-full">
                                <FcNext className={clsx(`
                                    w-4 h-4`
                                )}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stories