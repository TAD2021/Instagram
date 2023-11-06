"use client"
import DesktopLogo from "@/components/sidebars/DesktopLogo"
import SidebarContent from "@/components/sidebars/SidebarContent"
import {CgDetailsMore} from "react-icons/cg";
import SidebarItem from "./SidebarItem";
import TabletLogo from "./TabletLogo";
import { useSelector } from 'react-redux';
import clsx from "clsx";
import SearchWrapper from "../search/SearchWrapper";

function Sidebar(){
    const isSearch = useSelector(state => state.search.search.isSearch)

    return (
        <div className="
            relative
            w-16
        ">
            <div className={clsx(`
                hidden
                md:flex
                flex-col
                w-16
                xl:w-56
                h-full 
                fixed
                pt-2 
                px-3 
                pb-5 
                border-r 
                overflow-hidden
                z-20
                border-gray-300
                bg-white
                transition-all ease-in-out
            `, isSearch && 'tw-w-sb'
            )}>
                <DesktopLogo isSearch={isSearch}/>
                <TabletLogo isSearch={isSearch}/>
                <SidebarContent/> 
                <SidebarItem 
                    href='/'
                    label='More'
                    icon={CgDetailsMore}
                />
            </div>
            <SearchWrapper isSearch={isSearch}/>
        </div>
    )
}

export default Sidebar