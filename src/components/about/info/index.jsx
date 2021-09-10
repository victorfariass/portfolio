import React from 'react';
import images from '../../../images';
import Social from '../social';
import '../About.css';

class Info extends React.Component {
  render() { 
    return (
      <div className="about">
        <img src={images.profile} alt="Imagem de Perfil" className="profile-image" width="130px" />
        <div className="info">
          <h1 className="name">Victor Farias</h1>
          <p>victorfarias.tv@gmail.com</p>
          <p>(11)94388-9879</p>
          <p>São Paulo - SP</p>
          <Social />
        </div>
      </div>
    );
  }
}
 
export default Info;