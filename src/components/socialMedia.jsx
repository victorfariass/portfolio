import React from 'react';
import socialImages from '../images/socialMedia';

export default function SocialMedia(){
  return (
    <div className='flex social-container'>
      <a
        href="https://www.linkedin.com/in/victorfariasdev"
        target='_blank'
        rel="noreferrer"
      >
        <img src={socialImages.linkedin} alt="logo-linkedin" />
      </a>
      <a
        href="https://github.com/victorfariass"
        target='_blank'
        rel="noreferrer"
      >
        <img src={socialImages.github} alt="logo-github" />
      </a>
      <a
        href="https://www.instagram.com/victorfariasdev"
        target='_blank'
        rel="noreferrer"
      >
        <img src={socialImages.instagram} alt="logo-instagram" />
      </a>
      <a
        href="https://www.facebook.com/victorfariasdev"
        target='_blank'
        rel="noreferrer"
      >
        <img src={socialImages.facebook} alt="logo-facebook" />
      </a>
      <a
        href="https://api.whatsapp.com/send?phone=5511943889879"
        target='_blank'
        rel="noreferrer"
      >
        <img src={socialImages.whatsapp} alt="logo-whatsapp" />
      </a>
    </div>
  )
}