import '../src/styles/globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import type { AppProps } from 'next/app'

import '@fortawesome/fontawesome-svg-core/styles.css'
import 'swiper/css';
import {ParallaxProvider} from "react-scroll-parallax";

config.autoAddCss = false
function MyApp({ Component, pageProps }: AppProps) {
  return (
      <ParallaxProvider>
        <Component {...pageProps} />
      </ParallaxProvider>
  )
}

export default MyApp
