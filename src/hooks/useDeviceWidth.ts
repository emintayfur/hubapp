import {useCallback, useEffect, useState} from "react";

const useScroll = () => {
    const [width, setWidth] = useState<number>(0);

    const handleResize = useCallback(() => {
        if (typeof window?.scrollY !== 'undefined') setWidth(window.innerWidth);
    }, []);

    useEffect(() => {
        if (window) {
            setWidth(window.innerWidth);
            window.addEventListener('resize', handleResize);
        }

        return () => {
            if (window) window.removeEventListener('resize', handleResize);
        }
    }, [handleResize])

    return { width };
};

export default useScroll;
