const colors = {
    default: {
        50: '#cbcbcb',
        100: '#a3a3a3',
        300: '#616161',
        350: '#212222',
        400: '#8b8b8b',
        450: '#818181',
        500: '#26262b',
        600: '#ffffff',
    },
    dark: {
        350: '#383838',
        400: '#1c1c1e',
        500: '#1a1a1a',
        550: '#1e1f21',
        600: '#171717',
        700: '#141414',
    },
    op: {
        'white-7': 'rgba(255, 255, 255, 0.07)',
        'white-25': 'rgba(255, 255, 255, 0.25)',
        'white-47': 'rgba(255,255,255,0.47)',
        'white-55': 'rgba(255,255,255,0.55)',
        'white-80': 'rgba(255, 255, 255, 0.8)',
    },
    primary: '#5e55ff',
}

const fontFamily = {
    'grotesk': "'Space Grotesk', sans-serif",
    'neue': "'Neue Haas Unica Pro', sans-serif",
};

const fontSize = {
    default: '15px',
    '2lg': '18px',
};

const screens = {
    '2md': {'min': '992px', 'max': '1199px'},
    '2mdu': '992px',

    '2lg': {'min': '1200px', 'max': '1279px'},
    '2lgu': '1200px',
}

const width = {
    750: '750px',
    970: '970px',
    1170: '1170px',
    1250: '1250px',
};

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}",
        "./src/**/**/*.{ts,tsx}",
    ],
    theme: {
        extend: {
            colors,
            fontFamily,
            fontSize,
            screens,
            width,
        },
    },
    plugins: [],
}
