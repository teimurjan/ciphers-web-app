import React, { Component } from 'react';
import './App.css';
import { Tab } from 'semantic-ui-react';
import VigenereTab from './components/scenes/Vigenere/VigenereTab';
import CaesarTab from './components/scenes/Caesar/CaesarTab';
import HillTab from './components/scenes/Hill/HillTab';
import AffineTab from './components/scenes/Affine/AffineTab';

const panes = [
  { menuItem: 'Caesar', render: () => <Tab.Pane><CaesarTab/></Tab.Pane> },
  { menuItem: 'Vigenere', render: () => <Tab.Pane><VigenereTab/></Tab.Pane> },
  { menuItem: 'Affine', render: () => <Tab.Pane><AffineTab/></Tab.Pane> },
  { menuItem: 'Hill', render: () => <Tab.Pane><HillTab/></Tab.Pane> }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Tab panes={panes}/>
      </div>
    )
  }
}

export default App;
