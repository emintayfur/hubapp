import styles from '../../styles/Footer.module.css';
import React from 'react';
import AppContainer from "../AppContainer";
import {combineClassNames} from "../../utils/className";
import Logo from '../../assets/svg/Logo.svg';
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Swiper, SwiperSlide} from "swiper/react";
import {references, navbarList, footerSocialLinks, regions} from "../../dump/footer";
import {Autoplay} from "swiper";

const Footer = () => {
    return (
        <footer className={styles.container}>
            <AppContainer.Medium>
                {/** Refs */}
                <section className={styles.footerTop}>
                    {/** Title */}
                    <h4>Trusted by Global Brands</h4>

                    {/** Carousel */}
                    <div className={styles.footerCarousel}>
                        <Swiper
                            loop={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            spaceBetween={50}
                            slidesPerView="auto"
                            modules={[Autoplay]}
                            breakpoints={{
                                '320': {
                                    slidesPerView: 2.5,
                                    spaceBetween: 10,
                                },
                                '768': {
                                    slidesPerView: 6,
                                    spaceBetween: 50,
                                },
                            }}
                        >
                            {references.map((reference, referenceIdx) => (
                                <SwiperSlide
                                    key={`footer-reference-${referenceIdx}`}
                                >
                                    <div title={reference.name}>
                                        {reference.icon({})}
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </section>

                {/** Grid */}
                <section className={styles.parentGrid}>
                    {/* Section */}
                    <div className={combineClassNames(styles.parentSection, styles.grid3, styles.w_4_2)}>
                        {/** Logo */}
                        <div className={styles.logo}>
                            <Logo width={46.226} height={20.86}/>
                        </div>

                        {/** Navbar List */}
                        {navbarList.map((navbarGroup, navbarGroupIdx) => (
                            <div
                                key={`footer-navbar-group-${navbarGroupIdx}`}
                                className={styles.navGroup}
                            >
                                {/** Nav Group Title */}
                                <h3>{navbarGroup.title}</h3>

                                {/** Nav Group List */}
                                <ul>
                                    {navbarGroup.items.map((navbarItem, navbarItemIdx) => (
                                        <li
                                            key={`footer-navbar-group-${navbarGroupIdx}-item-${navbarItemIdx}`}
                                        >
                                            <Link href={navbarItem.href} passHref>
                                                <a>
                                                    {navbarItem.title}
                                                </a>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/** Section */}
                    <div className={combineClassNames(styles.parentSection, styles.w_4_1)}>
                        {/** Need ...?*/}
                        <div className={styles.row2}>
                            {/** Need Help? */}
                            <div
                                className={styles.navGroup}
                            >
                                {/** Nav Group Title */}
                                <h3>Need Help?</h3>

                                {/** Nav Content */}
                                <div className={styles.navContent}>
                                    <p>+(1) 123 656 7890</p>
                                </div>
                            </div>

                            {/** Need Support? */}
                            <div
                                className={styles.navGroup}
                            >
                                {/** Nav Group Title */}
                                <h3>Need Support?</h3>

                                {/** Nav Content */}
                                <div className={styles.navContent}>
                                    <p>help@hub.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/** Section */}
                    <div className={combineClassNames(styles.parentSection, styles.w_4_1)}>
                        {/** Follow Us & Newsletter */}
                        <div>
                            <div
                                className={styles.navGroup}
                            >
                                {/** Nav Group Title */}
                                <h3>Follow US</h3>

                                {/** Nav Content */}
                                <div className={styles.row2}>
                                    {/** Social Links */}
                                    <ul className={styles.socialLinks}>
                                        {footerSocialLinks.map((socialLink, socialLinkIdx) => (
                                            <li
                                                key={`footer-social-link-${socialLinkIdx}`}
                                            >
                                                <Link href={socialLink.href} passHref>
                                                    <a title={`Follow US in ${socialLink.platform}`}>
                                                        <FontAwesomeIcon icon={socialLink.icon} size="lg"/>
                                                    </a>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>

                                    {/** Newsletter */}
                                    <form className={styles.newsletter}>
                                        <input
                                            name="email"
                                            type="email"
                                            placeholder="Email address"
                                        />

                                        <button type="submit">
                                            <span>Go</span>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/** Corp Text */}
                <section className={styles.footerBottom}>
                    {/** Left */}
                    <div>
                        <ul>
                            {regions.map((region, regionIdx) => (
                                <li
                                    key={`footer-region-${regionIdx}`}
                                >
                                    <Link href={region.href} passHref>
                                        <a>
                                            <span>{region.language} / {region.currency}</span>
                                        </a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/** Right */}
                    <div>
                        <span>© 2020 Hub Shop. All images are for demo purposes.</span>
                    </div>
                </section>
            </AppContainer.Medium>
        </footer>
    );
};

export default Footer;

