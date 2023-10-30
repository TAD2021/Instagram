import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { AiOutlineHome, AiOutlineCompass, AiOutlineHeart } from 'react-icons/ai';
import { BsSearch } from "react-icons/bs";  
import { GoVideo } from "react-icons/go";
import { PiTelegramLogoThin } from "react-icons/pi";
import { BiMessageSquareAdd } from "react-icons/bi";


const useRoutes = () => {
    const pathname = usePathname()

    const routes = useMemo(() => [
        { 
            label: 'Home',
            href: '/', 
            icon: AiOutlineHome,
            active: pathname === '/'
        },
        { 
            label: 'Search',
            icon: BsSearch,
        },
        { 
            label: 'Explore',
            href: '/explore', 
            icon: AiOutlineCompass,
            active: pathname === '/explore'
        },
        { 
            label: 'Reels',
            href: '/reels', 
            icon: GoVideo,
            active: pathname === '/reels'
        },
        { 
            label: 'Messages',
            href: '/direct/inbox/', 
            icon: PiTelegramLogoThin,
            active: pathname === '/direct/inbox/'
        },
        { 
            label: 'Notifications',
            icon: AiOutlineHeart,
        },
        { 
            label: 'Create',
            icon: BiMessageSquareAdd,
        },
        { 
            label: 'Profile',
            type: 'image',
            href: '/suu10102001',
            active: pathname === '/suu10102001',
        },
    ], [pathname])

    return routes
}

export default useRoutes