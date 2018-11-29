import React, { Component } from 'react';
import { encryptCaesar } from '../../../api';
import { Form, Input } from 'semantic-ui-react';
import InputOutputCipher from './../../common/InputOutputCipher';

class CaesarEncryptForm extends Component {
  state = {
    inputText: 'defend the east wall of the castle',
    padding: '1',
    outputText: ''
  };

  onSubmit = async (e) => {
    e.preventDefault();
    const { data } = await encryptCaesar(this.state.inputText, parseInt(this.state.padding, 10));
    this.setState({ outputText: data.data });
  };

  onChange = (key) => (e) => {
    this.setState({
      [key]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.onSubmit}>
          <Input placeholder='Padding' onChange={this.onChange('padding')} value={this.state.padding}/>
          <InputOutputCipher outputText={this.state.outputText}
                             inputText={this.state.inputText}
                             onTextChange={this.onChange('inputText')}/>
        </Form>
      </div>
    );
  }
}

export default CaesarEncryptForm;
