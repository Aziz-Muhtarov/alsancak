import React, { Component } from 'react';
import s from './styles.module.scss';
import arrow from '@/img/logo/arrow.png';

interface CarouselProps {
  images: string[];
  interval?: number;
}

interface CarouselState {
  currentIndex: number;
}

export default class Carousel extends Component<CarouselProps, CarouselState> {
  timerId: NodeJS.Timeout | null = null;
  progressRef = React.createRef<HTMLDivElement>();

  static defaultProps = {
    interval: 8000,
  };

  constructor(props: CarouselProps) {
    super(props);
    this.state = {
      currentIndex: 0,
    };
  }

  componentDidMount() {
    this.startTimer();
  }

  componentWillUnmount() {
    this.stopTimer();
  }

  startTimer() {
    this.resetProgressAnimation();
    this.timerId = setInterval(() => {
      this.nextSlide();
    }, this.props.interval);
  }

  stopTimer() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  resetProgressAnimation() {
    const progressEl = this.progressRef.current;
    if (progressEl) {
      progressEl.classList.remove(s.animate);
      void progressEl.offsetWidth;
      progressEl.classList.add(s.animate);
    }
  }

  nextSlide = () => {
    this.setState(
      (prevState, props) => ({
        currentIndex: (prevState.currentIndex + 1) % props.images.length,
      }),
      () => this.resetProgressAnimation()
    );
  };

  prevSlide = () => {
    this.setState(
      (prevState, props) => ({
        currentIndex:
          (prevState.currentIndex - 1 + props.images.length) % props.images.length,
      }),
      () => this.resetProgressAnimation()
    );
  };

  render() {
    const { images } = this.props;
    const { currentIndex } = this.state;

    return (
      <div className={s.carouselContainer}>
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className={s.carouselImage}
        />
        <div className={s.overlay}></div>

        <div
          className={`${s.arrow} ${s.arrowLeft}`}
          onClick={() => {
            this.stopTimer();
            this.prevSlide();
            this.startTimer();
          }}
          aria-label="Previous Slide"
        >
          <img src={arrow} alt="arrow" />
        </div>

        <div
          className={`${s.arrow} ${s.arrowRight}`}
          onClick={() => {
            this.stopTimer();
            this.nextSlide();
            this.startTimer();
          }}
          aria-label="Next Slide"
        >
            <img src={arrow} alt="arrow" />
        </div>

        <div className={`${s.progressBar}`} ref={this.progressRef}></div>
      </div>
    );
  }
}