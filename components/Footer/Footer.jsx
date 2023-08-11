import styles from './footer.module.css'

import emailImg from '../../app/images/email.png'
import locationImg from '../../app/images/location.png'
import phoneImg from '../../app/images/phone.png'

import Image from 'next/image'

const {
    footer, 
    footerLogo, 
    footerSpan, 
    footerWrapper, 
    footerSubHeader, 
    footerReachUs, 
    footerReachUsItem, 
    footerCLQ,
    footerNewsletter, 
    footerNewsletterInput,
    footerNewsletterButton,
    footerNewsletterSpan} = styles

const Footer = () => {


    return (
        <footer className={footer}>
            <div className={footerLogo}>Logo Here</div>
            <span className={footerSpan}/>
            <div className={footerWrapper}>

                <div className={footerReachUs}>
                    <h3 className={footerSubHeader}>
                        Reach us
                    </h3>
                    <div className={footerReachUsItem}>
                        <Image 
                            src={phoneImg} 
                            alt="email" 
                        />
                        <a
                        href="tel:+1012 3456 789"
                        >
                            +1012 3456 789
                        </a>
                    </div>
                    <div className={footerReachUsItem}>
                        <Image 
                            src={emailImg} 
                            alt="email" 
                        />
                        <div>
                            demo@gmail.com
                        </div>
                    </div>
                    <div className={footerReachUsItem}>
                        <Image 
                            src={locationImg} 
                            alt="location" 
                        />
                        <div>
                            132 Dartmouth Street Boston, Massachusetts 02156 United States
                        </div>
                    </div>
                </div>

                <div className={footerCLQ}>
                    <h3 className={footerSubHeader}>
                        Company
                    </h3>
                    <a>
                        About
                    </a>
                    <a>
                        Contact
                    </a>
                    <a>
                        Blogs
                    </a>
                </div>
                <div className={footerCLQ}>
                    <h3 className={footerSubHeader}>
                        Legal
                    </h3>
                    <a>
                        Privacy Policy
                    </a>
                    <a>
                        Terms & Services
                    </a>
                    <a>
                        Terms of Use
                    </a>
                    <a>
                        Refund Policy
                    </a>
                </div>
                <div className={footerCLQ}>
                    <h3 className={footerSubHeader}>
                        Quick links
                    </h3>
                    <a>
                        Techlabz Keybox
                    </a>
                    <a>
                        Downloads
                    </a>
                    <a>
                        Forum
                    </a>
                </div>

                <div className={footerNewsletter}>
                    <h3 
                        className={footerSubHeader}
                    >
                        Join Our Newsletter
                    </h3>
                    <div>
                        <input 
                            className={footerNewsletterInput} 
                            type="email" 
                            placeholder='Your email address'
                        />
                        <button 
                            className={footerNewsletterButton}
                        >
                            Subscribe
                        </button>
                    </div>
                    <span 
                        className={footerNewsletterSpan}
                    >
                        *  Will send you weekly updates for your better tool management.
                    </span>
                </div>
            </div>
        </footer>
    )
}

export {Footer}