import React from 'react';
import images from '../../../images';
import '../About.css';

class Social extends React.Component {
  render() { 
    return (
      <div className="logos-container">
          <a
            href="https://www.linkedin.com/in/victorfariasdev"
            target='_blank'
            rel="noreferrer"
            className='social-logo'
          >
            <img src={images.linkedin} alt="logo-linkedin" />
          </a>
          <a
            href="https://github.com/victorfariass"
            target='_blank'
            rel="noreferrer"
            className='social-logo'
          >
            <img src={images.github} alt="logo-github" />
          </a>
          <a
            href="https://www.instagram.com/victorfariasdev"
            target='_blank'
            rel="noreferrer"
            className='social-logo'
          >
            <img src={images.instagram} alt="logo-instagram" />
          </a>
          <a
            href="https://www.facebook.com/victorfariasdev"
            target='_blank'
            rel="noreferrer"
            className='social-logo'
          >
            <img src={images.facebook} alt="logo-facebook" />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=5511943889879"
            target='_blank'
            rel="noreferrer"
            className='social-logo'
          >
            <img src={images.whatsapp} alt="logo-whatsapp" />
          </a>
      </div>
    );
  }
}
 
export default Social;