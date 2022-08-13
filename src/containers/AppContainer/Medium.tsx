import styles from '../../styles/container/AppContainer.module.css';
import React from 'react';
import type {IAppContainerMediumProps} from "./types";


const AppContainerMedium = (props: IAppContainerMediumProps) => {
    return (
        <div className={styles.parent}>
            <div className={styles.medium}>
                {props.children}
            </div>
        </div>
    );
};

export default AppContainerMedium;

