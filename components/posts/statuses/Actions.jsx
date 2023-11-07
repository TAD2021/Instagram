'use client'

import { AiOutlineHeart, AiOutlineSmile } from 'react-icons/ai';
import { GoComment } from 'react-icons/go';
import { PiTelegramLogo} from "react-icons/pi";
import { BsBookmark } from "react-icons/bs";
import Link from 'next/link';
import { useState } from 'react';
import clsx from 'clsx';

function Actions(){
    const [text, setText] = useState('');

    function autoResize(e){
        const textarea = e.target;
        textarea.style.height = 'auto';
        textarea.style.height = textarea.scrollHeight + 'px';
        setText(textarea.value);
    }

    return (
        <div className="flex flex-col">
            <div className="flex py-1 justify-around">
                <div className="flex-1 flex -ml-2">
                    <div className='w-10 h-10 p-2 '>
                        <AiOutlineHeart className='w-full h-full hover:opacity-60 cursor-pointer'/>
                    </div>
                    <div className='w-10 h-10 p-2'>
                        <GoComment className='w-full h-full hover:opacity-60 cursor-pointer'/>
                    </div>
                    <div className='w-10 h-10 p-2'>
                        <PiTelegramLogo className='w-full h-full hover:opacity-60 cursor-pointer'/>
                    </div>
                </div>
                <div className="flex-1 flex items-center justify-end">
                    <BsBookmark className='w-5 h-5 hover:opacity-60 cursor-pointer'/>
                </div>
            </div>
            <div className='flex'>
                <span className='text-xs font-semibold'>15,774 likes</span>
            </div>
            <div className='mt-2 flex flex-col'>
                <div className='flex flex-col'>
                    <div className='flex'>
                        <div className='mr-1'>
                            <span className='text-xs font-semibold'>
                                <Link href='/'>artof666k</Link>
                            </span>
                        </div>
                        <div>
                            <span className='text-xs'>狸奴 Li Nu</span>
                            <span className='text-xs'>...</span>
                        </div>
                    </div>
                    <span className='text-gray-400 text-xs cursor-pointer'>more</span>
                </div>
                <div className='mt-2'>
                    <p className='text-gray-400 text-xs cursor-pointer'>View all 75 comments</p>
                </div>
                <div className="mt-2">
                    <div>
                        <form method='POST'>
                            <div className='flex items-center'>
                                <textarea aria-label="Add a comment…" placeholder='Add a comment…' 
                                    className='
                                        flex flex-1 text-xs border-none outline-none resize-none
                                        max-h-20 
                                    '
                                    value={text}
                                    onChange={(e)=>autoResize(e)}
                                >

                                </textarea>
                                <div className={clsx(`mx-2`, !text && 'hidden')}>
                                    <button className='text-xs font-semibold text-cyan-400'>Post</button>
                                </div>
                                <div className='cursor-pointer'>
                                    <AiOutlineSmile className='w-3 h-3'/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Actions