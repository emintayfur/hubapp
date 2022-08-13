import AmazonLogo from '../assets/svg/refs/amazon.svg';
import AMDLogo from '../assets/svg/refs/amd.svg';
import DropcamLogo from '../assets/svg/refs/dropcam.svg';
import MarvelLogo from '../assets/svg/refs/marvel.svg';
import NikeLogo from '../assets/svg/refs/nike.svg';
import UENILogo from '../assets/svg/refs/ueni.svg';

import {faInstagram, faSquareFacebook, faTwitter} from "@fortawesome/free-brands-svg-icons";

/** References */
export const references = [
    {
        name: 'Amazon',
        icon: AmazonLogo,
    },
    {
        name: 'AMD',
        icon: AMDLogo,
    },
    {
        name: 'Dropcam',
        icon: DropcamLogo,
    },
    {
        name: 'Marvel',
        icon: MarvelLogo,
    },
    {
        name: 'Nike',
        icon: NikeLogo,
    },
    {
        name: 'UENI',
        icon: UENILogo,
    },
    // ...
    {
        name: 'Amazon2',
        icon: AmazonLogo,
    },
    {
        name: 'Dropcam2',
        icon: DropcamLogo,
    },
];

/** Navbar List */
export const navbarList = [
    // List 1
    {
        title: 'HUB Shop',
        items: [
            {
                title: 'Remote Jobs',
                href: '#',
            },
            {
                title: 'Company',
                href: '#',
            },
            {
                title: 'Other Apps',
                href: '#',
            },
            {
                title: 'Privacy Policy',
                href: '#',
            },
            {
                title: 'Store Locator',
                href: '#',
            },
        ]
    },

    // List 2
    {
        title: 'Products',
        items: [
            {
                title: 'Contact Us',
                href: '#',
            },
            {
                title: 'FAQ',
                href: '#',
            },
            {
                title: 'Report A Bug',
                href: '#',
            },
            {
                title: 'Careers',
                href: '#',
            },
            {
                title: 'About Us',
                href: '#',
            },
        ]
    },
];

/***/
export const footerSocialLinks = [
    {
        platform: 'Facebook',
        icon: faSquareFacebook,
        href: '#',
    },
    {
        platform: 'Twitter',
        icon: faTwitter,
        href: '#',
    },
    {
        platform: 'Instagram',
        icon: faInstagram,
        href: '#',
    },
]

/***/
export const regions = [
    {
        language: 'English',
        currency: 'USD',
        href: '#',
    },
    {
        language: 'Türkçe',
        currency: 'TRY',
        href: '#',
    }
]