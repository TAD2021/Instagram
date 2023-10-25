'use client'

import Link from "next/link"
import useRoutes from "@/hooks/useRoutes";
import Avatar from "../avatars/Avatar";
import SidebarItem from "./SidebarItem";

function SidebarContent() {
    const routes = useRoutes()

    return (
        <div
            className="
                lg:w-full
                lg:z-40
                lg:flex
                lg:flex-col
                justify-between
            "
        >
            {routes.map((item) => (
                <SidebarItem 
                    key={item.label}
                    href={item.href}
                    label={item.label}
                    icon={item.icon}
                    active={item.active}
                    onClick={item.onClick}
                />
            ))}
            <Link href="/">
                <div className="
                    p-3
                    my-1
                    flex
                    flex-row
                    items-center
                    rounded-lg
                    hover:bg-gray-100
                    hover:text-cyan-300
                ">
                    <div>
                        <Avatar image='/images/place-holder.jpg'/>
                    </div>
                    <div className='
                        hidden
                        pl-4
                        w-fit
                        lg:flex
                        items-center
                        overflow-x-hidden
                    '>
                        <span className='text-sm'>Trang cá nhân</span>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default SidebarContent