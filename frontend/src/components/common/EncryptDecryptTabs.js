import React from 'react';
import { Tab } from 'semantic-ui-react';

export default class EncryptDecryptTabs extends React.Component {
  state = {
    tab: 'encrypt'
  };

  render() {
    const panes = [
      { menuItem: 'Encrypt', render: () => <Tab.Pane attached={false}>{this.props.EncryptComponent}</Tab.Pane> },
      { menuItem: 'Decrypt', render: () => <Tab.Pane attached={false}>{this.props.DecryptComponent}</Tab.Pane> }
    ];
    return (
      <Tab menu={{ pointing: true, secondary: true }} panes={panes}/>);
  }
}