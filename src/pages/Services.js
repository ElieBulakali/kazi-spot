import React, { useEffect } from 'react';
import useReveal from '../utils/scrollReveal';

export default function Services() {
  useEffect(() => { document.title = 'Kazi-Spot - Services'; }, []);
  useReveal();
  return (
    <section className='page reveal'>
      <h2>Nos Services</h2>
      <div className='services-grid'>
        <div className='service-card'>
          <h3>Développement Web</h3>
          <p>Sites vitrines, e-commerce, maintenance.</p>
        </div>
        <div className='service-card'>
          <h3>Design & Branding</h3>
          <p>Logo, flyers, identité visuelle.</p>
        </div>
        <div className='service-card'>
          <h3>Marketing Digital</h3>
          <p>Community management, pubs payantes.</p>
        </div>
        <div className='service-card'>
          <h3>Consulting & RH</h3>
          <p>Audits, formation, staffing sur contrat.</p>
        </div>
        <div className='service-card'>
          <h3>Impression & Support IT</h3>
          <p>CV, documents, assistance.</p>
        </div>
      </div>
    </section>
  );
}
