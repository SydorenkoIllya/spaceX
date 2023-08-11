import Image from "next/image";
import styles from './page.module.css'

import emailImg from '../../app/images/email.png'
import locationImg from '../../app/images/location.png'
import phoneImg from '../../app/images/phone.png'
import letterImg from '../../app/images/letterImg.png'

import twitterLogo from '../../app/images/twitterLogo.png'
import instaLogo from '../../app/images/instaLogo.png'
import discordLogo from '../../app/images/discordLogo.png'


const { 
    contact, 
    contactHeader, 
    contactSubHeader, 
    contactInfo, 
    contactInfoGroup, 
    contactInfoGroupItem, 
    contactSection, 
    contactInfoHeader, 
    contactInfoSubHeader,
    contactIconsGroup,
    contactIcon,
    form,
    formTextfields,
    formInputGroup,
    formInput,
    formInputLabel,
    radioHeader,
    radioGroup,
    radioCheckbox,
    radioCheckmark,
    submitButton,
    submitImg
} = styles



export default function Contact() {

    return (
    <div className={contact}>
        <h2 className={contactHeader}>Contact Us</h2>
        <div className={contactSubHeader}>Any question remarks? Just write us a message!</div>
        <section className={contactSection}>
            <div className={contactInfo}>
                <div>
                    <h3 className={contactInfoHeader}>Contact Information</h3>
                    <div className={contactInfoSubHeader}>Say something to start a live chat</div>
                </div>
                <div className={contactInfoGroup}>
                    <div className={contactInfoGroupItem}>
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
                    <div className={contactInfoGroupItem}>
                        <Image 
                            src={emailImg} 
                            alt="email" 
                        />
                        <div>
                            demo@gmail.com
                        </div>
                    </div>
                    <div className={contactInfoGroupItem}>
                        <Image 
                            src={locationImg} 
                            alt="location" 
                        />
                        <div>
                            132 Dartmouth Street Boston, Massachusetts 02156 United States
                        </div>
                    </div>    
                </div>
                <div className={contactIconsGroup}>
                    <Image 
                        className={contactIcon} 
                        src={twitterLogo}
                        alt="twitter"
                    />
                    <Image 
                        className={contactIcon} 
                        src={instaLogo} 
                        alt="insta"
                    />
                    <Image 
                        className={contactIcon} 
                        src={discordLogo} 
                        alt="discord"
                    />
                </div>
            </div>
            <div className={form}>
                <div className={formTextfields}>
                    <div className={formInputGroup}>
                        <input 
                            className={formInput} 
                            type="text" 
                        />
                        <label 
                            className={formInputLabel}>
                            First name
                        </label>
                    </div>
                    <div className={formInputGroup}>
                        <input 
                            className={formInput} 
                            type="text" />
                        <label 
                            className={formInputLabel}>
                            Last Name
                        </label>
                    </div>
                    <div className={formInputGroup}>
                        <input 
                        className={formInput} 
                        type="email" 
                        />
                        <label 
                        className={formInputLabel}>
                            Email
                        </label>
                    </div>
                    <div className={formInputGroup}>
                        <input 
                            className={formInput} 
                            type="tel" 
                        />
                        <label 
                            className={formInputLabel}>
                            Phone number
                        </label>
                    </div>
                </div>
                <div className={radioHeader}>Select Subject?</div>
                <div className={radioGroup}>
                    <label className={radioCheckbox}>
                        <input type="checkbox" />
                        <span className={radioCheckmark}></span>
                        General Inquiry
                    </label>
                    <label className={radioCheckbox}>
                        <input type="checkbox" />
                        <span className={radioCheckmark}></span>
                        General Inquiry
                    </label>
                    <label className={radioCheckbox}>
                        <input type="checkbox" />
                        <span className={radioCheckmark}></span>
                        General Inquiry
                    </label>
                    <label className={radioCheckbox}>
                        <input type="checkbox" />
                        <span className={radioCheckmark}></span>
                        General Inquiry
                    </label>
                </div>
                <div className={formInputGroup}>
                    <input 
                        placeholder="Write your message..."
                        className={formInput} 
                        type="text" 
                    />
                    <label 
                        className={formInputLabel}>
                        Message
                    </label>
                </div>
                <button className={submitButton}>Send Message</button>
                <Image className={submitImg} src={letterImg} alt=''/>
            </div>
        </section>
    </div>
    )
}

