import React from 'react';
import Carousel from '../Carousel/Carousel';
import s from './styles.module.scss';
import img1 from '@/img/img/carousel1.png';
import img2 from '@/img/img/carousel2.jpg';
import img3 from '@/img/img/carousel3.jpg';

const images = [img1, img2, img3];

interface Props {}

const Main: React.FC = () => {
  return (
    <div className={s.carouselContainer}>
      <Carousel images={images} />
    </div>
  );
};

export default Main;