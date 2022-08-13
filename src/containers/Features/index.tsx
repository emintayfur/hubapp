import styles from '../../styles/container/Features.module.css';
import React from 'react';
import AppContainer from "../AppContainer";
import {useParallax} from "react-scroll-parallax";
import {features} from "../../dump/features";
import {AnimatePresence, motion} from "framer-motion";

const Features = () => {
    const { ref: featuresSectionRef } = useParallax<HTMLDivElement>({
        opacity: [0.8, 0],
    })

    return (
        <section className={styles.container} >
            <AppContainer.Medium>
                <div className={styles.sub} ref={featuresSectionRef}>
                    {/** Head */}
                    <div className={styles.head}>
                        <h1>
                            Automate all your payments.
                        </h1>
                        <p>
                            Preferred stock may be hybrid by having the qualities of bonds of fixed returns and common stock voting rightson.
                        </p>
                    </div>

                    {/** Features */}
                    <div className={styles.features}>
                        <AnimatePresence>
                            {features.map((feature, featureIdx) => (
                                <motion.div
                                    key={`app-feautre-${feature.id}`}
                                    className={styles.featureParent}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1, delay: featureIdx * 0.090 }}
                                >
                                    <div className={styles.feature}>
                                        {/** Icon */}
                                        <div className={styles.icon}>
                                            {feature.icon(feature?.iconProps || {})}
                                        </div>

                                        {/** Title */}
                                        <h4>{feature.title}</h4>

                                        {/** Description */}
                                        <p>{feature.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </AppContainer.Medium>
        </section>
    );
};

export default Features;

