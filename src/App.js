import React from 'react';
import About from './components/about';
import HardSkills from './components/hardSkills';
import Profile from './components/profile';
import Projects from './components/projects';
import './App.css';
import './AppResponsivo.css';
import Footer from './components/footer';
import Certificates from './components/certificates';

class App extends React.Component {
  render() {
    return (
      <main>
        <Profile />
        <hr/>
        <About />
        <hr/>
        <HardSkills />
        <hr/>
        <Projects />
        <hr/>
        <Certificates />
        <Footer />
      </main>
    );
  }
}

export default App;
