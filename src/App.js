import React from 'react';
import './App.css';
import Main from './page'
import Footer from './components/footer';
class App extends React.Component {
  render() {
    return (
      <main>
        <Main />
        <Footer />
      </main>
    );
  }
}

export default App;
