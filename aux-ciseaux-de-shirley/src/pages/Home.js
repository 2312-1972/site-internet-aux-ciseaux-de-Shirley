// src/pages/Home.js
import React from 'react';
import Shirley from '../images/shirley.webp';

const Home = () => (
  <div>
    <section className="about">
      <img className="portrait" src={Shirley} alt="shirley" />
      <h3 className="apropos">
            Je crois  que la coiffure est bien plus qu'une simple transformation physique. C'est une forme d'art qui permet à chacun de se sentir confiant et beau dans sa peau. 
            Ma mission est de créer des looks personnalisés qui reflètent votre style unique, tout en vous offrant le confort et la commodité de mes services à domicile.
            Avec des années d'expérience en tant que coiffeuse mixte, je m'engage à fournir des services de qualité exceptionnelle.
            Je combine habilement les dernières tendances avec des techniques classiques, vous assurant ainsi des résultats à la hauteur de vos attentes. 
            Que vous ayez besoin d'une coupe, d'une couleur, de coiffures événementielles ou de conseils sur l'entretien capillaire, je suis là pour vous guider à chaque étape.
            Je serai votre coiffeuse à domicile dévouée et passionnée ! Shirley apporte son talent exceptionnel et son savoir-faire directement à votre porte, 
            pour vous offrir une expérience de coiffure unique et personnalisée.
      </h3>
    </section>
  </div>
);

export default Home;
