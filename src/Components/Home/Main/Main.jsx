import React from 'react';
import styles from './Main.module.css'
import MainPhoto from '../../../assets/img/test.jpg'


const Main = () => {
    return (
        <div className={styles.main}>
            <div>
                <div className={styles.effects}>
                    <div className={styles.mainPhoto}>
                        <img src={MainPhoto} alt={"Oops something goes wrong!"} className={styles.mainPhotoItem}/>
                    </div>
                    <div className={styles.content}>
                        <div className={styles.contentTitle}>
                            <h1>Welcome to <br /> <span> Alsancak Branch</span></h1>
                        </div>
                        <div className={styles.contentSubTitle}>
                            <div>The most beautiful branch in Northern Cyprus</div>
                        </div>
                    </div>
                </div> 
            </div>
        </div>

    )
}

export default Main;