import styles from '../../styles/Button.Advanced.module.css';
import React from 'react';
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faApple } from "@fortawesome/free-brands-svg-icons";

const GetTheAppAdvanced = () => {
    const text = 'Get The App';

    return (
        <Link
            href="https://apps.apple.com/tr/app/e-devlet/id976505454"
            target="_blank"
            rel="noreferrer noopener nofollow"
            passHref
        >
            <a className={styles.container}>
                <FontAwesomeIcon icon={faApple} />

                <div className={styles.textContainer}>
                    <span className={styles.textMain}>{text}</span>
                    <span className={styles.textClone}>{text}</span>
                </div>
            </a>
        </Link>
    );
};

export default GetTheAppAdvanced;

