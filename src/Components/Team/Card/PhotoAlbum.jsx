import React from 'react';

const PhotoAlbum = () => {
  const photos = [
    require('../../../assets//img/img team/group_photo1.jpg'),
    require('../../../assets//img/img team/group_photo2.jpg'),
    require('../../../assets//img/img team/group_photo3.jpg'),
    require('../../../assets//img/img team/group_photo4.jpg'),
    require('../../../assets//img/img team/group_photo5.jpg'),
    require('../../../assets//img/img team/group_photo6.jpg'),
    // Add more photo file paths here
  ];

  return (
    <div>
      {photos.map((photo, index) => (
        <img key={index} src={photo} alt={`Photo ${index + 1}`} />
      ))}
    </div>
  );
};

export default PhotoAlbum;