import React from 'react';
import { SocialIcon } from 'react-social-icons';
import '../About.css';

class Social extends React.Component {
  render() { 
    return (
      <div className="logos-container">
        <SocialIcon
          url="https://www.linkedin.com/in/victorfariasdev"
          bgColor="#575757"
          fgColor="#FFFFFF"
          target="_blank"
          style={{ height: "40px", width: "40px", margin: "5px" }}
        />
        <SocialIcon
          url="https://github.com/victorfariass"
          bgColor="#575757"
          fgColor="#FFFFFF"
          target="_blank"
          style={{ height: "40px", width: "40px", margin: "5px" }}
        />
        <SocialIcon
          url="https://www.instagram.com/victorfariasdev"
          bgColor="#575757"
          fgColor="#FFFFFF"
          target="_blank"
          style={{ height: "40px", width: "40px", margin: "5px" }}
        />
        <SocialIcon
          url="https://www.facebook.com/victorfariasdev"
          bgColor="#575757"
          fgColor="#FFFFFF"
          target="_blank"
          style={{ height: "40px", width: "40px", margin: "5px" }}
        />
      </div>
    );
  }
}
 
export default Social;