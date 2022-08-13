import styles from '../../styles/CursorAnimate.module.css'
import React, {useEffect, useRef, useState} from 'react';
import {motion, useMotionValue, useTransform} from 'framer-motion';

const CursorAnimate = (props: any) => {
    const [isIn, setIsIn] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const outputRange = [4.5, 0, -4.5];

    const scaleX = useTransform(
        x,
        [0, containerSize.width / 2 , containerSize.width],
        outputRange.reverse()
    );
    const scaleY = useTransform(
        y,
        [0, containerSize.height / 2 , containerSize.height],
        outputRange,
    );

    const rotateX = useTransform(
        x,
        [0, containerSize.width / 2 , containerSize.width],
        [9, 3, -9],
    );

    const rotateY = useTransform(
        y,
        [containerSize.height, containerSize.height / 2, 0],
        [-9, -9, 9],
    );

    useEffect(() => {
        if (containerRef.current) {
            setContainerSize({ width: containerRef.current.clientWidth, height: containerRef.current.clientHeight })
        }
    }, [containerRef]);

    return (
        <motion.div
            className={styles.container}
            onMouseMove={(e) => {
                x.set((e.nativeEvent as any).layerX)
                y.set((e.nativeEvent as any).layerY)
            }}
            onMouseLeave={(e) => {
                setIsIn(false)
            }}
            onMouseEnter={() => setIsIn(true)}
            ref={containerRef}
            style={{
                x: !isIn ? 0 : scaleX,
                y: !isIn ? 0 : scaleY,
                rotateX: !isIn ? 0 : rotateX,
                rotateY: !isIn ? 0 : rotateY,
            }}
        >
            {props.children}
        </motion.div>
    );
};

export default CursorAnimate;

