import React from "react";
import styles from './Footer.module.css';
import location from '../../assets/logo/footer/location.png';
import phone from '../../assets/logo/footer/phone.png';
import fax from '../../assets/logo/footer/fax.png';
import email from '../../assets/logo/footer/email.png';
import facebook from '../../assets/logo/footer/facebook.png';
import instagram from '../../assets/logo/footer/instagram.png';
import twitter from '../../assets/logo/footer/twitter.png';
import whatsapp from '../../assets/logo/footer/whatsapp.png';
import mainLogo from '../../assets/img/logo.png';


 

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>

                <div className={styles.containerMedia}>
                    <div className={styles.containerTitle}>
                        Head Office
                    </div>
                    <div className={styles.containerMediaLink}>
                        <div className={styles.containerMediaLinkItem}>
                            <img src={location} alt="" />
                        </div>
                        Aydin sok. No.1, Alsancak / KKTC
                    </div>
                    <div className={styles.containerMediaLink}>
                        <div className={styles.containerMediaLinkItem}>
                            <img src={phone} alt="" />
                        </div>
                        +90 392  444 9378
                    </div>
                    <div className={styles.containerMediaLink}>
                        <div className={styles.containerMediaLinkItem}>
                            <img src={fax} alt="" />
                        </div>
                        +90 392 678 00 20
                    </div>
                    <div className={styles.containerMediaLink}>
                        <div className={styles.containerMediaLinkItem}>
                            <img src={email} alt="" />
                        </div>
                        karaoglanoglu@creditwestbank.com
                    </div>
                </div>

                <div className={styles.containerMediaSocial}>

                    <div className={styles.logoBlock}>
                        <div className={styles.mainLogo}>
                            <img src={mainLogo} alt="" />
                        </div>
                    </div>
                    <div className={styles.containerTitle}>
                        Our social:
                    </div>
                    <div className={styles.containerMediaSocialItem}>
                        <div className={styles.containerMediaLink}>
                            <a href="https://www.facebook.com">
                                <img src={facebook} alt="" />
                            </a>
                        </div>
                        <div className={styles.containerMediaLink}>
                            <a href="https://www.instagram.com">
                                <img src={instagram} alt="" />
                            </a>
                        </div>
                        <div className={styles.containerMediaLink}>
                            <a href="https://twitter.com/?lang=eng">
                                <img src={twitter} alt="" />
                            </a>
                        </div>
                        <div className={styles.containerMediaLink}>
                            <a href="https://www.whatsapp.com/?lang=ru">
                                <img src={whatsapp} alt="" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className={styles.containerMedia}>
                    <div className={styles.containerTitle}>
                        Text me for more information
                    </div>
                    <input type="text" />
                    <button className={styles.button}>Tell Me</button>
                </div>

            </div>
        </div >
    )
}

export default Footer;