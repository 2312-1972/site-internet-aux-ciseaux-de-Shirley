import React from 'react';
import photos from '../photos.json';

const Hommes = () => (
  <div>
    <h3 className="titlesection">Hommes</h3>
    <section className="chignon">
      {photos.hommes.map((photo, index) => (
        <img key={index} className="image" src={photo.src} alt={photo.alt} />
      ))}
    </section>
  </div>
);

export default Hommes;
