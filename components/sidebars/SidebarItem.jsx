import clsx from "clsx"
import Link from "next/link"
import Avatar from "../Avatar"
import { useDispatch } from 'react-redux';
import { toggleSearch } from '@/redux/searchSlice';

function SidebarItem({
    label,
    icon: Icon,
    href,
    type,
    active
}) {
    const dispatch = useDispatch();
    const handleModal = () => {
        if(label === 'Search'){
            dispatch(toggleSearch());
        }else if(label === 'Notifications'){
            console.log('Notifications')
        }else{
            console.log('Create')
        }
    }

    return (
        <>
            { href ? (
                <Link href={href} >
                    <div className={clsx(`
                        p-2
                        my-1
                        flex
                        flex-row
                        items-center
                        rounded-lg
                        hover:bg-gray-100
                        hover:text-rose-400
                    `)}>

                        <div className="flex items-center">
                            {type !== 'image' ? (
                                <Icon className={clsx(`
                                    w-6 h-6 
                                    transition ease-in-out delay-15 hover:-translate-y-1 
                                    hover:scale-11 duration-400`,
                                    active && 'fill-rose-500'
                                )}/>
                            ): (
                                <Avatar image='/images/place-holder.jpg' type="sidebar"/>
                            )}
                        </div>
                        <div className='
                            hidden
                            pl-4
                            w-fit
                            xl:flex
                            items-center
                            overflow-x-hidden
                        '>
                            <span className={clsx(`text-sm`,
                                active && 'font-bold text-rose-400'
                            )}>{label}</span>
                        </div>
                    </div>
                </Link> ): (
                    <div className={clsx(`
                        p-2
                        my-1
                        flex
                        flex-row
                        items-center
                        cursor-pointer
                        rounded-lg
                        hover:bg-gray-100
                        hover:text-rose-400
                    `)}
                        onClick={handleModal}
                    >
                        <div className="flex items-center justify-center">
                            <Icon className={clsx(`
                                w-6 h-6 
                                transition ease-in-out delay-15 hover:-translate-y-1 
                                hover:scale-11 duration-400`,
                                active && 'fill-rose-400'
                            )}/>
                        </div>
                        <div className='
                            hidden
                            pl-4
                            w-fit
                            xl:flex
                            items-center
                            overflow-x-hidden
                        '>
                            <span className={clsx(`text-sm`)}>{label}</span>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default SidebarItem