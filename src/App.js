import React from 'react';
import About from './components/about';
import HardSkills from './components/hardSkills';
import Profile from './components/profile';
import Projects from './components/projects';
import './App.css';
import Footer from './components/footer';

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
        <Footer />
      </main>
    );
  }
}

export default App;
