import styles from '../../styles/FirstSection.module.css';
import React from 'react';
import Image from "next/image";
import {motion} from 'framer-motion';
import AppParticles from'../AppParticles';
import Header from "../Header";
import AppContainer from "../AppContainer";
import UpdateSVG from '../../assets/svg/update.svg';
import BGCircle from '../../assets/svg/circle.svg';
import MainImage from '../../assets/image/img-1@2x.png';
import Button from "../../components/Button";

const FirstSection = () => {
    const inits = {
        y: 100,
        rotateY: 15,
        opacity: 0,
    };
    const animate = {
        y: 0,
        rotateY: 0,
        opacity: 1,
    }

    return (
        <>
            <Header />

            <section className={styles.container}>
                <AppContainer.Medium>
                    <div className={styles.sub}>
                        {/** Left */}
                        <div className={styles.left}>
                            <div className={styles.content}>
                                <motion.div
                                    className={styles.heading}
                                    initial={inits}
                                    animate={animate}
                                    transition={{
                                        duration: 2,
                                        ease: 'easeOut'
                                    }}
                                >
                                    <UpdateSVG />
                                    <p>Introducing Reminder Tools</p>
                                </motion.div>

                                <motion.h1
                                    initial={inits}
                                    animate={animate}
                                    transition={{
                                        duration: 2,
                                        delay: 0.18,
                                        ease: 'easeOut'
                                    }}
                                >
                                    E-wallet in your pocket 🤑
                                </motion.h1>

                                <motion.p
                                    initial={inits}
                                    animate={animate}
                                    transition={{
                                        duration: 2,
                                        delay: 0.36,
                                        ease: 'easeOut'
                                    }}
                                >
                                    Preferred stock may be hybrid by having the qualities of bonds of fixed returns and common stock voting rightson.
                                </motion.p>
                            </div>

                            <div className={styles.action}>
                                <motion.div
                                    className={styles.btnContainer}
                                    initial={inits}
                                    animate={animate}
                                    transition={{
                                        duration: 2,
                                        delay: 0.54,
                                        ease: 'easeOut'
                                    }}
                                >
                                    <Button.GetTheAppAdvanced />
                                </motion.div>

                                <motion.p
                                    initial={inits}
                                    animate={animate}
                                    transition={{
                                        duration: 2,
                                        delay: 0.72,
                                        ease: 'easeOut'
                                    }}
                                >
                                    Get your tools for free.
                                    <br/><br/>For a limited time.
                                </motion.p>
                            </div>
                        </div>

                        {/** Right */}
                        <div className={styles.right}>
                            <motion.div
                                className={styles.circle}
                                initial={{ y: 35, rotateX: -12, opacity: 0 }}
                                animate={{ y: 0, rotateX: 0, opacity: 1 }}
                                transition={{
                                    delay: 1.250,
                                    duration: 1.8,
                                    ease: 'easeOut'
                                }}
                            >
                                <BGCircle />
                            </motion.div>
                            <motion.div
                                className={styles.main}
                                initial={{ y: 35, rotateX: -12, opacity: 0 }}
                                animate={{ y: 0, rotateX: 0, opacity: 1 }}
                                transition={{
                                    delay: 1.430,
                                    duration: 1.8,
                                    ease: 'easeOut'
                                }}
                            >
                                <Image width={375} height={532} src={MainImage} alt="" />
                            </motion.div>
                        </div>
                    </div>
                </AppContainer.Medium>

                <AppParticles />
            </section>
        </>
    );
};

export default FirstSection;

