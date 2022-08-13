import styles from '../../styles/ParallaxText.module.css'
import React from 'react';
import AppContainer from "../AppContainer";
import {useParallax} from "react-scroll-parallax";
import {EasingParams, ValidEasingPresets} from "parallax-controller/src/types";

export interface IParallaxTextProps {
    from: number;
    to: number;
    containerEasing?: EasingParams | ValidEasingPresets;
    opacityEasing?: EasingParams | ValidEasingPresets;
    text: React.ReactNode | React.ReactNode[];
}
const ParallaxText = (props: IParallaxTextProps) => {
    const {
        text,
        containerEasing,
        opacityEasing,
        from,
        to,
    } = props;

    const { ref: textContainerRef } = useParallax<HTMLDivElement>({
        translateY: [from, to],
        easing: containerEasing || [0.2, 0.6, 1, 0.5],
    })

    const { ref: textRef, element} = useParallax<HTMLHeadingElement>({
        opacity: [1, 0],
        easing: opacityEasing || [0.2, 0.6, 1, 0.5],
    })

    return (
        <section className={styles.container}>
            <AppContainer.Medium>
                <div ref={textContainerRef}>
                    <h2 ref={textRef}>
                        {text}
                    </h2>
                </div>
            </AppContainer.Medium>
        </section>
    );
};

export default ParallaxText;

