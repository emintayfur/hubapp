import type {NextPage} from 'next';
import Footer from "../src/containers/Footer";
import DownloadSection from "../src/containers/DownloadSection";
import Button from "../src/components/Button";
import FirstSection from "../src/containers/FirstSection";
import PricingTabs from "../src/containers/PricingTabs";
import Connect from "../src/containers/Connect";
import ScrollIndicator from "../src/components/ScrollIndicator";
import Features from "../src/containers/Features";
import ParallaxText from "../src/containers/ParallaxText";
import Head from "next/head";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>HupApp</title>
            </Head>

            <div>
                {/***/}
                <Button.SeeHowItWorks/>

                {/***/}
                <ScrollIndicator/>

                {/***/}
                <FirstSection/>

                {/***/}
                <Features />

                <ParallaxText
                    from={180}
                    to={-250}
                    containerEasing={[0.2, 0.2, 1, 1]}
                    opacityEasing={[1, 1, 0.1, 0]}
                    text={(
                        <>
                            <span>🏦 Pre-market.</span> Preferred stock may be hybrid
                            by having the qualities of bonds of fixed
                            returns and common stock voting rightson.
                        </>
                    )}
                />

                <ParallaxText
                    from={100}
                    to={-100}
                    containerEasing={[0.2, 1, 0.8, 1]}
                    opacityEasing={[1, 1, 0.5, 0]}
                    text={(
                        <>
                            <span>💶 Stock exchange.</span> Lets investors recoup the
                            initial investment plus capital gains from
                            subsequent rises in stock price.
                        </>
                    )}
                />

                <ParallaxText
                    from={100}
                    to={-170}
                    containerEasing={[0.2, 0.8, 1, 1]}
                    opacityEasing={[0, 1, 0.5, 0]}
                    text={(
                        <>
                            <span>💬 Next‑generation security.</span> knows a face
                            when it sees one, and intelligently relights it
                            to capture more natural-looking contours.
                        </>
                    )}
                />

                {/***/}
                <Connect/>

                {/***/}
                <PricingTabs/>

                {/***/}
                <DownloadSection/>

                {/***/}
                <Footer/>
            </div>
        </>
    )
}

export default Home
