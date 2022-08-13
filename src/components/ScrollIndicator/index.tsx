import styles from '../../styles/ScrollIndicator.module.css'
import React, {useCallback} from 'react';
import {motion, useScroll, useTransform} from 'framer-motion';

const ScrollIndicator = (props: any) => {
    const { scrollYProgress } = useScroll()

    const top = useTransform(
        scrollYProgress,
        [0, 1],
        [0, 60],
        { clamp: false }
    );

    const handleClick = useCallback((e: any) => {
        e.preventDefault();

        if (window) {
            window.scrollTo({
                behavior: 'smooth',
                top: 0,
                left: 0,
            })
        }
    }, [])


    return (
        <div className={styles.container}>
            <div className={styles.sub} onClick={handleClick}>
                <p className={styles.text}>scroll</p>

                <div className={styles.indicatorContainer}>
                    <motion.div
                        className={styles.indicator}
                        style={{ top }}
                    />
                </div>
            </div>
        </div>
    );
};

export default ScrollIndicator;

