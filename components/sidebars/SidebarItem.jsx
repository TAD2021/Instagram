import clsx from "clsx"
import Link from "next/link"

function SidebarItem({
    label,
    icon: Icon,
    href,
    onClick,
    active
}) {
    return (
        <>
            { href ? (
                <Link href={href}>
                    <div className={clsx(`
                        p-3
                        pb-2
                        my-1
                        flex
                        flex-row
                        items-center
                        rounded-lg
                        hover:bg-gray-100
                        hover:text-cyan-300
                    `)}>
                        <Icon className={clsx(`w-5 h-5 transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-11 duration-300`,
                            active && 'fill-cyan-400'
                        )}/>
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
                        p-3
                        pb-2
                        my-1
                        flex
                        flex-row
                        items-center
                        cursor-pointer
                        rounded-lg
                        hover:bg-gray-100
                        hover:text-cyan-300
                    `)}>
                        <Icon className="w-5 h-5 transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-11 duration-300"/>
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