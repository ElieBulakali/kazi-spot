import React from 'react';

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='container footer-inner'>
        <div>© {new Date().getFullYear()} Kazi-Spot</div>
        <div>Contact: info@kazi-spot.com | +250 788 897 032</div>
      </div>
    </footer>
  );
}
