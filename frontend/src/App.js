import React, { Component } from 'react';
import './App.css';
import { Tab } from 'semantic-ui-react';
import VigenereForm from './components/VigenereForm';
import CaesarForm from './components/CaesarForm';
import HillForm from './components/HillForm';
import AffineForm from './components/AffineForm';

const panes = [
  { menuItem: 'Caesar', render: () => <Tab.Pane><CaesarForm/></Tab.Pane> },
  { menuItem: 'Vigenere', render: () => <Tab.Pane><VigenereForm/></Tab.Pane> },
  { menuItem: 'Affine', render: () => <Tab.Pane><AffineForm/></Tab.Pane> },
  { menuItem: 'Hill', render: () => <Tab.Pane><HillForm/></Tab.Pane> }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Tab panes={panes}/>
      </div>
    );
  }
}

export default App;
