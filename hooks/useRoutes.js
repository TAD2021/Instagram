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
            label: 'Trang chủ',
            href: '/', 
            icon: AiOutlineHome,
            active: pathname === '/'
        },
        { 
            label: 'Tìm kiếm',
            icon: BsSearch,
        },
        { 
            label: 'Khám phá',
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
            label: 'Tin nhắn',
            href: '/direct/inbox/', 
            icon: PiTelegramLogoThin,
            active: pathname === '/direct/inbox/'
        },
        { 
            label: 'Thông báo',
            icon: AiOutlineHeart,
        },
        { 
            label: 'Tạo',
            icon: BiMessageSquareAdd,
        },
        { 
            label: 'Trang cá nhân',
            type: 'image',
            href: '/suu10102001',
            active: pathname === '/suu10102001',
        },
    ], [pathname])

    return routes
}

export default useRoutes