import styles from '../../styles/component/Button.Basic.module.css';
import React from 'react';

const GetTheAppBasic = () => {
    return (
        <a
            className={styles.container}
            href="https://apps.apple.com/tr/app/e-devlet/id976505454"
            target="_blank"
            rel="noreferrer noopener nofollow"
        >
            <span>Get the app</span>
        </a>
    );
};

export default GetTheAppBasic;

