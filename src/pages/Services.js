import React, { useEffect } from 'react';
import useReveal from '../utils/scrollReveal';
import { Link } from 'react-router-dom';
import marvin from '../components/assets/marvin-meyer-SYTO3xs06fU-unsplash.jpg';
import sebastian from '../components/assets/sebastian-herrmann-O2o1hzDA7iE-unsplash.jpg';
import scott from '../components/assets/scott-rodgerson-PSpf_XgOM5w-unsplash.jpg';
import raman from '../components/assets/raman-RZhdi-ct0r8-unsplash.jpg';
import div1 from '../components/assets/Div1.jpg';

export default function Services() {
  useEffect(() => { document.title = 'Kazi-Spot - Services'; }, []);
  useReveal();
  return (
    <section className='page reveal'>
      <h2>Nos Services</h2>
      <div className='services-grid'>
        <div className='service-card'>
          <Link to='/services/developpement-web' className='service-link' aria-label='Développement Web'>
            <img src={marvin} className='service-img' alt='Développement Web' />
          </Link>
          <h3>Développement Web</h3>
          <p>Sites vitrines, e-commerce, maintenance.</p>
        </div>
        <div className='service-card'>
          <Link to='/services/design-branding' className='service-link' aria-label='Design et Branding'>
            <img src={sebastian} className='service-img' alt='Design et Branding' />
          </Link>
          <h3>Design & Branding</h3>
          <p>Logo, flyers, identité visuelle.</p>
        </div>
        <div className='service-card'>
          <Link to='/services/marketing-digital' className='service-link' aria-label='Marketing Digital'>
            <img src={scott} className='service-img' alt='Marketing Digital' />
          </Link>
          <h3>Marketing Digital</h3>
          <p>Community management, pubs payantes.</p>
        </div>
        <div className='service-card'>
          <Link to='/services/consulting-rh' className='service-link' aria-label='Consulting et RH'>
            <img src={raman} className='service-img' alt='Consulting et RH' />
          </Link>
          <h3>Consulting & RH</h3>
          <p>Audits, formation, staffing sur contrat.</p>
        </div>
        <div className='service-card'>
          <Link to='/services/impression-support-it' className='service-link' aria-label='Impression et Support IT'>
            <img src={div1} className='service-img' alt='Impression et Support IT' />
          </Link>
          <h3>Impression & Support IT</h3>
          <p>CV, documents, assistance.</p>
        </div>
      </div>
    </section>
  );
}
