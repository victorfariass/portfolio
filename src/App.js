import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Habilidades from './components/Habilidades';
import Header from './components/Header';
import Sobre from './components/Sobre';
import Projetos from './components/Projetos';
import Footer from './components/Footer';

class App extends React.Component {
  render() {
    return (
      <main>
        <Header />
        <Switch>
          <Route exact path="/">
            <Sobre />
          </Route>
          <Route path="/habilidades">
            <Habilidades />
          </Route>
          <Route path="/projetos">
            <Projetos />
          </Route>
        </Switch>
        <Footer />
      </main>
      
    );
  }
  
}

export default App;
