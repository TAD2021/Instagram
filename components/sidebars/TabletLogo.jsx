import clsx from "clsx";
import { BsInstagram } from "react-icons/bs";

function TabletLogo({isSearch}) {
    return (
        <div className={clsx(`xl:hidden py-6 px-2 mb-3 cursor-pointer`,
            isSearch && 'tw-block'
        )}>
            <BsInstagram className="w-6 h-6"/>
        </div>
    )
}

export default TabletLogo