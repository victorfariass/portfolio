import React from 'react';
import avatarImages from '../images/avatar';
import SocialMedia from './socialMedia';

export default function Profile(){
  return (
    <div className='flex profile-container'>
      <img className='img-profile' src={avatarImages.profile} alt="Imagem de Perfil" />
      <div className='flex info-container'>
        <h1>Victor Farias</h1>
        <p>victorfarias.tv@gmail.com</p>
        <p>(11)94388-9879</p>
        <p>São Paulo - SP</p>
        <SocialMedia />
      </div>
    </div>
  )
}