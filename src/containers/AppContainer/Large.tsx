import styles from '../../styles/AppContainer.module.css';
import React from 'react';
import type {IAppContainerLargeProps} from "./types";

const AppContainerLarge = (props: IAppContainerLargeProps) => {
    return (
        <div className={styles.parent}>
            <div className={styles.large}>
                {props.children}
            </div>
        </div>
    );
};

export default AppContainerLarge;

