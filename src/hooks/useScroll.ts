import {useCallback, useEffect, useState} from "react";

const useScroll = () => {
    const [y, setY] = useState<number>(0);

    const handleScroll = useCallback((e: any) => {
        if (typeof window?.scrollY !== 'undefined') setY(window.scrollY);
    }, []);

    useEffect(() => {
        if (window) window.addEventListener('scroll', handleScroll);

        return () => {
            if (window) window.removeEventListener('scroll', handleScroll);
        }
    }, [handleScroll])

    return { y };
};

export default useScroll;
