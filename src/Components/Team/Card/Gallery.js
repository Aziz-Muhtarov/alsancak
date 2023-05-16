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
import React from 'react';


// export const images = [
//     {
//         id: 1,
//         imgSrc: groupPhoto1,
//     },
//     {
//         id: 2,
//         imgSrc: groupPhoto2,
//     },
//     {
//         id: 3,
//         imgSrc: groupPhoto3,
//     },
//     {
//         id: 4,
//         imgSrc: groupPhoto4,
//     },
//     {
//         id: 5,
//         imgSrc: groupPhoto5,
//     },
//     {
//         id: 6,
//         imgSrc: groupPhoto6,
//     },
//     {
//         id: 7,
//         imgSrc: photo1,
//     },
//     {
//         id: 8,
//         imgSrc: photo2,
//     },
//     {
//         id: 9,
//         imgSrc: photo3,
//     },
//     {
//         id: 10,
//         imgSrc: photo4,
//     },
//     {
//         id: 11,
//         imgSrc: photo5,
//     },
// ]

const images = [
    { title: "Kitten 1", caption: "Caption 1", url: "//placekitten.com/1500/500" },
    { title: "Kitten 2", caption: "Caption 2", url: "//placekitten.com/4000/3000" },
    { title: "Kitten 3", caption: "Caption 3", url: "//placekitten.com/800/1200" },
    { title: "Kitten 4", caption: "Caption 4", url: "//placekitten.com/1500/1500" }
  ];

function popUp() {
    const [isOpen, setIsOpen] = useState(false);
    const [imgIndex, setImgIndex] = useState(0);

    return (
        <div className="app">
          <h3>Modal popup with an image in React - <a href="https://www.cluemediator.com" target="_blank" rel="noreferrer noopener">Clue Mediator</a></h3>
     
          <button onClick={() => setIsOpen(true)}>Preview Images</button>
          {isOpen && <Lightbox
            imageTitle={images[imgIndex].title}
            imageCaption={images[imgIndex].caption}
            mainSrc={images[imgIndex].url}
            nextSrc={images[(imgIndex + 1) % images.length].url}
            prevSrc={images[(imgIndex + images.length - 1) % images.length].url}
            onCloseRequest={() => setIsOpen(false)}
            onMovePrevRequest={() => setImgIndex((imgIndex + images.length - 1) % images.length)}
            onMoveNextRequest={() => setImgIndex((imgIndex + 1) % images.length)}
          />}
        </div>
      );
    }

export default popUp;