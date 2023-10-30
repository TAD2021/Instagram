import { AiOutlineHeart } from 'react-icons/ai';
import { GoComment } from 'react-icons/go';
import { PiTelegramLogo} from "react-icons/pi";
import { CiSaveDown2 } from "react-icons/ci";
import Link from 'next/link';

function Actions(){
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
                    <CiSaveDown2 className='w-5 h-5 hover:opacity-60 cursor-pointer'/>
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
            </div>
        </div>
    )
}

export default Actions