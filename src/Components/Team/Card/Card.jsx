import React from "react";
import styles from './Card.module.css';
import look from '../../../assets/logo/look.png';
import groupPhoto1 from '../../../assets/img/img team/group_photo1.jpg';
import groupPhoto2 from '../../../assets/img/img team/group_photo2.jpg';
import groupPhoto3 from '../../../assets/img/img team/group_photo3.jpg';
import groupPhoto4 from '../../../assets/img/img team/group_photo4.jpg';
import groupPhoto5 from '../../../assets/img/img team/group_photo5.jpg';
import groupPhoto6 from '../../../assets/img/img team/group_photo6.jpg';
import photo1 from '../../../assets/img/img team/photo1.jpg';
import photo2 from '../../../assets/img/img team/photo2.jpg';
import photo3 from '../../../assets/img/img team/photo3.jpg';
import photo4 from '../../../assets/img/img team/photo4.jpg';
import photo5 from '../../../assets/img/img team/photo5.jpg';
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";


const Card = () => {
    return (
        <>
            <div className={styles.galery}>

                <div className={styles.container}>
                    <div className={styles.containerGalery}>
                        <a href={groupPhoto1}>
                            <div className={styles.look}>
                                <img src={look} alt="" />
                            </div>
                            <img src={groupPhoto1} alt="" />
                        </a>
                    </div>
                    <div className={styles.containerGalery}>
                        <div className={styles.look}>
                            <img src={look} alt="" />
                        </div>
                        <img src={groupPhoto2} alt="" />
                    </div>
                    <div className={styles.containerGalery}>
                        <div className={styles.look}>
                            <img src={look} alt="" />
                        </div>
                        <img src={groupPhoto3} alt="" />
                    </div>
                    <div className={styles.containerGalery}>
                        <div className={styles.look}>
                            <img src={look} alt="" />
                        </div>
                        <img src={groupPhoto4} alt="" />
                    </div>
                    <div className={styles.containerGalery}>
                        <div className={styles.look}>
                            <img src={look} alt="" />
                        </div>
                        <img src={groupPhoto5} alt="" />
                    </div>
                    <div className={styles.containerGalery}>
                        <div className={styles.look}>
                            <img src={look} alt="" />
                        </div>
                        <img src={groupPhoto6} alt="" />
                    </div>
                    <div className={styles.containerGalery}>
                        <div className={styles.look}>
                            <img src={look} alt="" />
                        </div>
                        <img src={photo1} alt="" />
                    </div>
                    <div className={styles.containerGalery}>
                        <div className={styles.look}>
                            <img src={look} alt="" />
                        </div>
                        <img src={photo2} alt="" />
                    </div>
                    <div className={styles.containerGalery}>
                        <div className={styles.look}>
                            <img src={look} alt="" />
                        </div>
                        <img src={photo3} alt="" />
                    </div>
                    <div className={styles.containerGalery}>
                        <div className={styles.look}>
                            <img src={look} alt="" />
                        </div>
                        <img src={photo4} alt="" />
                    </div>
                    <div className={styles.containerGalery}>
                        <div className={styles.look}>
                            <img src={look} alt="" />
                        </div>
                        <img src={photo5} alt="" />
                    </div>
                </div>
            </div>

        </>
    )
};

export default Card; 