import React, { Component } from 'react';
import { encryptCaesar } from '../api';
import { Form, Input } from 'semantic-ui-react';
import InputCipher from './common/InputOutputCipher';

class CaesarForm extends Component {
  state = {
    inputText: '',
    padding: '',
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
          <InputCipher outputText={this.state.outputText}
                       inputText={this.state.inputText}
                       onTextChange={this.onChange('inputText')}/>
        </Form>
      </div>
    );
  }
}

export default CaesarForm;
