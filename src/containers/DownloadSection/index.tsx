import styles from '../../styles/DownloadSection.module.css'
import React from 'react';
import Image from "next/image";
import AppContainer from "../AppContainer";

import ApplePay from '../../assets/svg/apple-pay.svg';
import DownloadMockup from '../../assets/image/img-3@2x.png';
import Button from "../../components/Button";
import CursorAnimate from "../../components/CursorAnimate";

const DownloadSection = () => {
    return (
        <section className={styles.container}>
            <div className={styles.bg} style={{ backgroundImage: `url("./assets/svg/bg/circles.svg")` }} />

            <AppContainer.Medium>
                <div className={styles.sub}>
                    {/***/}
                    <div className={styles.left}>
                        <ApplePay />

                        <div className={styles.content}>
                            <h2>
                                E-Stock trading made <span>easy 🤑</span>
                            </h2>
                            <p>All in one landing and startup solutions. Endless use-cases that make it highly</p>
                        </div>

                        <div className={styles.actions}>
                            <div className={styles.getApp}>
                                <Button.GetTheAppAdvanced />
                            </div>

                            <div className={styles.actionContext}>
                                <p>Get your tools for free.</p>
                                <p>For a limited time.</p>
                            </div>
                        </div>
                    </div>

                    {/***/}
                    <div className={styles.right}>
                        <CursorAnimate>
                            <Image
                                src={DownloadMockup}
                                alt=""
                            />
                        </CursorAnimate>
                    </div>
                </div>
            </AppContainer.Medium>
        </section>
    );
};

export default DownloadSection;

