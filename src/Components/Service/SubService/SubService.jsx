import React from "react";
import styles from './SubService.module.css';
import savings from '../../../assets/logo/savings.png';
import card from '../../../assets/logo/card.png';
import mobile from '../../../assets/logo/mobile.png';
import insurance from '../../../assets/logo/insurance.png';



const SubService = () => {
    return (
        <div className={styles.main}>
            <div className={styles.title}>
                <div className={styles.titleItem}>
                    Our <span>S</span>ervices
                </div>
            </div>
            <div className={styles.products}>

                <div className={styles.productsItem}>
                    <div className={styles.productsLogo}>
                        <img src={savings} alt="" />
                    </div>
                    <div className={styles.productsTitle}>
                        Saving Account
                    </div>
                    <div className={styles.productsSubTitle}>
                        Saving accounts are a great way to put aside funds for a future goal, such as a down payment on a home or a dream vacation.
                        With a saving account, you can earn interest on your deposited funds, allowing your money to grow over time and provide a cushion for unexpected expenses.
                    </div>
                    <div className={styles.productsButton}>
                        <button>Learn More</button>
                    </div>
                </div>

                <div className={styles.productsItem}>
                    <div className={styles.productsLogo}>
                        <img src={card} alt="" />
                    </div>
                    <div className={styles.productsTitle}>
                        Bank Card
                    </div>
                    <div className={styles.productsSubTitle}>
                        A bank card is a convenient and secure way to access your funds and make purchases without carrying cash.
                        With a bank card, you can make transactions online, in-store, and even withdraw cash from ATMs, providing you with easy and flexible access to your money.
                    </div>
                    <div className={styles.productsButton}>
                        <button>Learn More</button>
                    </div>
                </div>

                <div className={styles.productsItem}>
                    <div className={styles.productsLogo}>
                        <img src={mobile} alt="" />
                    </div>
                    <div className={styles.productsTitle}>
                        Internet Banking
                    </div>
                    <div className={styles.productsSubTitle}>
                        Internet banking provides a convenient way to manage your finances from the comfort of your home or office, without having to visit a physical bank location.
                        With internet banking, you can easily view your account balances, transfer funds between accounts, pay bills, and even deposit checks using your computer or mobile device.
                    </div>
                    <div className={styles.productsButton}>
                        <button>Learn More</button>
                    </div>
                </div>

                <div className={styles.productsItem}>
                    <div className={styles.productsLogo}>
                        <img src={insurance} alt="" />
                    </div>
                    <div className={styles.productsTitle}>
                        Insurance
                    </div>
                    <div className={styles.productsSubTitle}>
                        Insurance provides financial protection against unexpected events, such as accidents, illnesses, or natural disasters, giving you peace of mind and security.
                        With insurance, you pay a premium to an insurance company, who in turn agrees to pay you or cover the costs of covered losses or damages up to a certain limit.
                    </div>
                    <div className={styles.productsButton}>
                        <button>Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubService;