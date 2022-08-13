import styles from '../../styles/component/DeviceGuard.module.css';
import React, {useMemo} from 'react';
import useDeviceWidth from "../../hooks/useDeviceWidth";
import {IDeviceGuardProps} from "./types";

const WIDTH_RANGE = [
  1024, // min
  Infinity,
];


const DeviceGuard = (props: IDeviceGuardProps) => {
    const { children } = props;
    const { width } = useDeviceWidth();

    const allow = useMemo(() => {
        return Boolean(width >= WIDTH_RANGE[0] && width <= WIDTH_RANGE[1])
    }, [width])

    if (allow) return children || <></>;
    return (
        <section className={styles.container}>
            <h1>{"This device isn't supported :("}</h1>
        </section>
    );
};

export default DeviceGuard;

