import styles from '../../styles/Connect.module.css';
import React, {useCallback, useState} from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import Image from "next/image";
import AppContainer from "../AppContainer";
import {combineClassNames} from "../../utils/className";
import Button from "../../components/Button";
import {connectTabs} from "../../dump/connect";

const animate = true;
const Connect = () => {
    const [activeTab, setActiveTab] = useState<any>(connectTabs[0]);

    const handler = useCallback((item: any) => (e: any) => {
        e.preventDefault();
        if (activeTab?.id === item.id) return;

        if (animate) setActiveTab(null);
        setTimeout(() => setActiveTab(item), animate ? 90 : 0);
    }, [activeTab])

    return (
        <section className={styles.container}>
            <AppContainer.Large>
                <div className={styles.sub}>
                    {/** Nav */}
                    <ul className={styles.nav}>
                        {connectTabs.map((connectTab) => (
                            <li
                                key={`nav-item-${connectTab.id}`}
                                className={combineClassNames(connectTab.id === activeTab?.id && styles.active)}
                                onMouseEnter={handler(connectTab)}
                                onClick={handler(connectTab)}
                            >
                                <button>
                                    {connectTab.navTitle}
                                </button>
                            </li>
                        ))}
                    </ul>

                    <AnimatePresence>
                        {/** Content */}
                        {activeTab && (
                            <motion.div
                                key='connect-content'
                                className={styles.content}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                {/** Text Section */}
                                <div className={styles.textSection}>
                                    <div className={styles.heading}>
                                        <h4>{activeTab.heading}</h4>
                                        <h1>{activeTab.title}</h1>
                                    </div>

                                    <div className={styles.description}>
                                        <p>{activeTab.description}</p>
                                    </div>

                                    <div className={styles.action}>
                                        <Button.GetTheAppAdvanced />
                                    </div>
                                </div>

                                {/** Image Section */}
                                <div className={styles.imageSection}>
                                    <Image
                                        src={activeTab.image}
                                        alt={activeTab.title}
                                    />
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </AppContainer.Large>
        </section>
    );
};

export default Connect;

