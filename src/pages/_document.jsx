import {Head, Html, Main, NextScript} from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                <link rel="stylesheet" href="/assets/font/neue-haas-unica-pro/stylesheet.css"/>
                <link rel="stylesheet"
                      href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@700&display=swap"/>

                <link rel="shortcut icon" href="/favicon.png" />
            </Head>
            <body>
                <Main/>
                <NextScript/>
            </body>
        </Html>
    )
}