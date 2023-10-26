import clsx from "clsx"
import Link from "next/link"
import Avatar from "../Avatar"

function SidebarItem({
    label,
    icon: Icon,
    href,
    onClick,
    type,
    active
}) {
    return (
        <>
            { href ? (
                <Link href={href}>
                    <div className={clsx(`
                        p-2
                        my-1
                        flex
                        flex-row
                        items-center
                        rounded-lg
                        hover:bg-gray-100
                        hover:text-cyan-300
                    `, active && 'bg-gray-100')}>

                        <div className="flex items-center">
                            {type !== 'image' ? (
                                <Icon className={clsx(`
                                    w-6 h-6 
                                    transition ease-in-out delay-15 hover:-translate-y-1 
                                    hover:scale-11 duration-300`,
                                    active && 'fill-cyan-400'
                                )}/>
                            ): (
                                <Avatar image='/images/place-holder.jpg' size='27'/>
                            )}
                        </div>
                        <div className='
                            hidden
                            pl-4
                            w-fit
                            lg:flex
                            items-center
                            overflow-x-hidden
                        '>
                            <span className={clsx(`text-sm`,
                                active && 'font-bold text-cyan-400'
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
                        hover:text-cyan-300
                    `, active && 'bg-gray-100')}>
                        <div className="flex items-center justify-center">
                            <Icon className={clsx(`
                                w-6 h-6 
                                transition ease-in-out delay-15 hover:-translate-y-1 
                                hover:scale-11 duration-300`,
                                active && 'fill-cyan-400'
                            )}/>
                        </div>
                        <div className='
                            hidden
                            pl-4
                            w-fit
                            lg:flex
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