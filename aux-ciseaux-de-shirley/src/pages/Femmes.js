// src/pages/Femmes.js
import React from 'react';
import Carre1 from '../images/carre1.webp';
import Carre2 from '../images/carre2.webp';
import Carre3 from '../images/carre3.webp';

const Femmes = () => (
  <div>
    <h3 className="titlesection">Femmes</h3>
    <section className="chignon" id="carre">
      <img className="image" src={Carre1} alt="1er carré" />
      <img className="image" src={Carre2} alt="2eme carré" />
      <img className="image" src={Carre3} alt="3eme carré" />
    </section>
  </div>
);

export default Femmes;
