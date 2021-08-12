import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends React.Component {
  render() { 
    return ( 
      <nav className="nav-container">
        <li className="nav-item">
          <Link to="/">Sobre</Link>
        </li>
        <li className="nav-item">
          <Link to="/habilidades">Habilidades</Link>
        </li>
        <li className="nav-item">
        <Link to="/projetos">Projetos</Link>
        </li>
      </nav>
    );
  }
}
 
export default Header;
