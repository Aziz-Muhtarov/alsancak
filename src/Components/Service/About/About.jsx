import React from "react";
import styles from './About.module.css'
import branch from '../../../assets/img/office2.jpg';
import professional from '../../../assets/logo/professional.png';
import experienced from '../../../assets/logo/experienced.png';
import vibrant from '../../../assets/logo/vibrant.png';
import personality from '../../../assets/logo/personality.png';

const About = () => {
    return (
        <div className={styles.base}>
            <div className={styles.title}> 
                About Our <span>B</span>ranch
            </div>
            <div className={styles.line}></div>
            <div className={styles.first}>



                <div className={styles.textInfo}>

                    <div className={styles.textInfoItem}>
                        <img src={professional} alt="" />
                        <div className={styles.textInfoTitle}>
                            Professional
                        </div>
                        <div className={styles.textInfoSubTitle}>
                            Professionalism is crucial in a bank as it helps establish trust and confidence with customers.
                        </div>

                    </div>

                    <div className={styles.textInfoItem}>
                        <img src={experienced} alt="" />
                        <div className={styles.textInfoTitle}>
                            Experienced
                        </div>
                        <div className={styles.textInfoSubTitle}>
                            Experience is highly valued in a bank as it enables employees to handle complex financial transactions and provide expert advice to customers.
                        </div>
                    </div>

                    <div className={styles.textInfoItem}>
                        <img src={vibrant} alt="" />
                        <div className={styles.textInfoTitle}>
                            Vibrant
                        </div>
                        <div className={styles.textInfoSubTitle}>
                            A vibrant bank is one that fosters a culture of innovation, collaboration, and creativity.
                        </div>
                    </div>

                    <div className={styles.textInfoItem}>
                        <img src={personality} alt="" />
                        <div className={styles.textInfoTitle}>
                            Personality
                        </div>
                        <div className={styles.textInfoSubTitle}>
                            Personality plays an important role in a bank as it impacts how employees interact with customers and colleagues.
                        </div>
                    </div>

                </div>
                <img src={branch} alt="" />
            </div>
            <div className={styles.second}>
                <div>

                </div>
            </div>
        </div>
    )
}

export default About;