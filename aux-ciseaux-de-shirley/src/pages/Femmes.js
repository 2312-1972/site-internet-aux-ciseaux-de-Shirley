import React from 'react';
import photos from '../photos.json';

const Femmes = () => (
  <div>
    <h3 className="titlesection">Femmes</h3>
    <section className="chignon">
      {photos.femmes.map((photo, index) => (
        <img key={index} className="image" src={photo.src} alt={photo.alt} />
      ))}
    </section>
  </div>
);

export default Femmes;
