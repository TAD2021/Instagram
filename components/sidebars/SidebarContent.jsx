'use client'

import useRoutes from "@/hooks/useRoutes";
import SidebarItem from "./SidebarItem";

function SidebarContent() {
    const routes = useRoutes()

    return (
        <div
            className="
                w-full
                z-40
                flex
                flex-col
                justify-between
                flex-1
            "
        >
            {routes.map((item) => (
                <SidebarItem 
                    key={item.label}
                    href={item.href}
                    label={item.label}
                    icon={item.icon}
                    active={item.active}
                    type={item.type}
                />
            ))}
        </div>
    )
}

export default SidebarContent