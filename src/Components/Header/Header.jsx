import React from "react";
import styles from './Header.module.css';
import logoImage from '../../assets/img/logo.png';
import { menu } from './menu.js';

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <img src={logoImage} alt="/" height='40' />
            </div>
            <div className={styles.wrapper}>
                <ul className={styles.menu}>
                    {menu.map((item, idx) => (

                        <li key={`menu item ${idx}`}>
                            <a href={item.link}>{item.title}</a>
                        </li>
                    ))}

                </ul>
            </div>
        </div>
    );
}

export default Header;