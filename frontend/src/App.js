import React, { Component } from 'react';
import { Tab } from 'semantic-ui-react';
import VigenereForm from './VigenereForm';
import CaesarForm from './CaesarForm';

const panes = [
  { menuItem: 'Vigenere', render: () => <Tab.Pane><VigenereForm/></Tab.Pane>},
  { menuItem: 'Caesar', render: () => <Tab.Pane><CaesarForm/></Tab.Pane>}
]

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
