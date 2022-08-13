import styles from '../../styles/container/Header.module.css';
import React, {useEffect, useMemo, useRef, useState} from 'react';
import HupAppLogo from '../../assets/svg/HubAppLogo.svg';
import Button from "../../components/Button";
import useScroll from "../../hooks/useScroll";
import {combineClassNames} from "../../utils/className";


const Header = () => {
    const headerRef = useRef<HTMLHeadElement>(null);
    const [headerSize, setHeaderSize] = useState<number | null>(null);
    const scroll = useScroll();

    const isFixed = useMemo(() => {
        if (!headerSize) return false;

        return scroll.y >= headerSize;
    }, [headerSize, scroll.y]);

    useEffect(() => {
        if (headerRef.current) {
            setHeaderSize(headerRef.current.offsetHeight);
        }
    }, [headerRef]);

    return (
        <header className={combineClassNames(styles.container, isFixed && styles.lock)} ref={headerRef}>
            {/** Logo */}
            <a className={styles.logo} href="https://darkapp.liquid-themes.com/">
                <HupAppLogo />
            </a>

            {/** Promotion */}
            <div className={styles.promotion}>
                <p>
                    <span>👋</span>
                    &nbsp;&nbsp;
                    Sign up and receive 20% bonus discount on checkout.
                </p>
            </div>

            {/** Actions */}
            <div className={styles.actions}>
                {/** Login */}
                <a className={styles.login} href="#">
                    <span>Login</span>
                </a>

                {/** Get the app */}
                <Button.GetTheAppBasic />
            </div>
        </header>
    );
};

export default Header;

