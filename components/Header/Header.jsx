"use client"


import Image from 'next/image'
import styles from './header.module.css'

import profile from '../../app/images/user.png'
import cart from '../../app/images/cart.png'
import cross from '../../app/images/cross.png'
import Link from 'next/link'
import { useEffect, useRef } from 'react'



const {
    arrow, 
    active, 
    link, 
    header, 
    headerLogo, 
    headerWrapper, 
    headerDropdown,
    headerMobile,
    headerMobileLogo,
    headerImageGroup,
    menuLogo,
    visible
} = styles

const Header = () => {


    const menuRef = useRef(null)
    const buttonRef = useRef(null);


    const setActive = (e) => {
        e.target.classList.add(active)
    }

    const toggleMenu = () => {
        menuRef.current.classList.toggle(visible)
    }
    useEffect(() => {
        if(buttonRef && buttonRef.current) {
            buttonRef.current.click(); // имитация клика на необходимый элемент
        }      
      }, [buttonRef]);
    return (
        <header className={header}>
            <div
                className={headerLogo}
            >
                Logo Here
            </div>
            <button onClick={toggleMenu} className={menuLogo}/>
            <ul ref={menuRef} className={headerWrapper}>
                <div className={headerMobile}>
                    <div className={headerMobileLogo}>Logo Here</div>
                    <Image 
                        onClick={toggleMenu} 
                        src={cross} 
                        alt='cross'
                    />
                </div>    
                <Link 
                    className={link} 
                    href='/contact'
                >
                    Home
                </Link>
                <div className={headerDropdown}>
                    <Link 
                        className={link} 
                        href='/contact'
                    >
                        Features
                    </Link>
                    <div className={arrow}>
                        &#10095;
                    </div>
                </div>
                <Link 
                    className={link} 
                    href='/contact'
                >
                    Blog
                </Link>
                <Link 
                    className={link} 
                    href='/contact'
                >
                    Shop
                </Link>
                <Link 
                    className={link} 
                    href='/contact'
                >
                    About 
                </Link>
                <Link 
                    ref={buttonRef}
                    onClick={setActive} //вызов для активации элемента
                    className={link} 
                    href='/contact'
                >
                    Contact
                </Link>
                <div className={headerImageGroup}>
                    <Link
                        className={link} 
                        href='/contact'
                    >
                        <Image 
                            className={styles.icon} 
                            src={profile}
                            alt='profileicon'
                        />
                    </Link>
                    <Link 
                        className={link} 
                        href='/contact'
                    >
                        <Image 
                            className={styles.icon} 
                            src={cart} 
                            alt='profileicon'
                        />
                    </Link>
                </div>
            </ul>
        </header>
    )
}


export {Header}