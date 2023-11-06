import { useEffect } from "react";
import { closeSearch } from '@/redux/searchSlice';

const useClose = (sidebarRef, dispatch) => {
    useEffect(() => {
        function handleClickOutside(event) {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                dispatch(closeSearch())
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [sidebarRef]);
}

export default useClose