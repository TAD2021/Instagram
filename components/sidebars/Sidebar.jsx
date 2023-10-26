import DesktopLogo from "@/components/sidebars/DesktopLogo"
import SidebarContent from "@/components/sidebars/SidebarContent"
import {CgDetailsMore} from "react-icons/cg";
import SidebarItem from "./SidebarItem";
import TabletLogo from "./TabletLogo";

function Sidebar(){
    return (
        <div className="
            hidden
            md:flex
            lg:flex
            flex-col
            w-16
            lg:w-56
            h-full 
            fixed
            pt-2 
            px-3 
            pb-5 
            border-r 
            border-gray-300
        ">
            <DesktopLogo/>
            <TabletLogo/>
            <SidebarContent/> 
            <SidebarItem 
                href='/'
                label='Xem thêm'
                icon={CgDetailsMore}
            />
        </div>
    )
}

export default Sidebar