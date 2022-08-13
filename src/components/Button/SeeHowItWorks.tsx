import styles from '../../styles/Button.SeeHowItWorks.module.css';
import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const SeeHowItWorks = () => {
    const [isIn, setIsIn] = useState(false);

    return (
        <div className={styles.parent}>
            <a className={styles.container} onMouseEnter={() => setIsIn(true)} onMouseLeave={() => setIsIn(false)}>
                <motion.div
                    animate={{ opacity: isIn ? 0 : 1, x: isIn ? -15 : 0 }}
                    transition={{ type: "spring", stiffness: 100 }}
                >
                    <FontAwesomeIcon icon={faPlay} />
                </motion.div>

                <motion.p
                    animate={{ opacity: 1, x: isIn ? -20 : 0 }}
                    transition={{ type: "spring", stiffness: 100 }}
                >
                    See How It Works
                </motion.p>

                <motion.div
                    animate={{ opacity: isIn ? 1 : 0, x: isIn ? 0 : 15 }}
                    style={{ position: 'absolute', right: 0 }}
                    transition={{ type: "spring", stiffness: 100 }}
                >
                    <FontAwesomeIcon icon={faPlay} />
                </motion.div>
            </a>
        </div>
    );
};

export default SeeHowItWorks;

