import React, { useEffect } from 'react';
import useReveal from '../utils/scrollReveal';

export default function Home() {
  useEffect(() => { document.title = 'Kazi-Spot - Home'; }, []);
  useReveal();
  return (
    <section className='home'>
      <div className='hero reveal'>
        <h1>Kazi-Spot</h1>
        <p className='lead'>Web Development • Digital Marketing • Consulting & HR</p>
        <p>Un espace hybride pour travailler et faire croître votre entreprise.</p>
      </div>

      <div className='grid reveal'>
        <div className='card'>
          <h3>Web Development</h3>
          <p>Sites React, applications web performantes et architecture moderne.</p>
        </div>
        <div className='card'>
          <h3>Digital Marketing</h3>
          <p>Branding, visuels, stratégie digitale et campagnes performantes.</p>
        </div>
        <div className='card'>
          <h3>Consulting & RH</h3>
          <p>Audit, formation, mise à disposition et placement du personnel.</p>
        </div>
      </div>
    </section>
  );
}
