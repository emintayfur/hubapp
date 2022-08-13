import styles from '../../styles/AppParticles.module.css';
import React from 'react';
import Particles from "react-tsparticles";
import {loadFull} from "tsparticles"

const options = {
    particles: {
        number: {value: 16},
        color: {value: ["#4cfd89", "#0fbbb4", "#fda44c", "#fdc14c"]},
        shape: {type: ["circle"]},
        size: {value: 4, random: true},
        move: {out_mode: "out", enable: true, speed: 0.7}
    },
    retina_detect: true,
    autoPlay: true,
    fpsLimit: 120,
    interactivity: {},
    fullScreen: { enable: false },
}

const AppParticles = () => {
    return (
        <Particles
            id="hub-particles"
            init={async (main) => await loadFull(main)}
            options={options}
            className={styles.container}
        />
    );
};

export default AppParticles;

