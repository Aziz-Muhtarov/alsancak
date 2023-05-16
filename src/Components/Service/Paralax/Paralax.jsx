import React from "react";
import styles from './Paralax.module.css';


const Paralax = () => {
    return (
        <div className={styles.paralax}>
            <div className={styles.paralaxItem}>
                <div className={styles.paralaxItemContainer}>

                    <div className={styles.paralaxItemContainerItem}>
                        <div className={styles.paralaxItemNumber}>
                            2019
                        </div>
                        <div className={styles.paralaxItemText}>
                            Branch opening year
                        </div>
                    </div>

                    <div className={styles.paralaxItemContainerItem}>
                        <div className={styles.paralaxItemNumber}>
                            100 000+
                        </div>
                        <div className={styles.paralaxItemText}>
                            Satisfied customers
                        </div>
                    </div>

                    <div className={styles.paralaxItemContainerItem}>
                        <div className={styles.paralaxItemNumber}>
                            11
                        </div>
                        <div className={styles.paralaxItemText}>
                            Consultant in banking sphere
                        </div>
                    </div>

                </div>
            </div>
            <div className={styles.paralaxItemBg}></div>
        </div>
    )
}

export default Paralax;