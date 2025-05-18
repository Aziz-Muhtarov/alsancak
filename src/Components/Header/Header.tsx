import styles from './styles.module.scss'
import mainLogo from '@/img/logo/logo.png';
import { menu } from './menu';

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <img src={mainLogo} alt="/" height='40' />
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