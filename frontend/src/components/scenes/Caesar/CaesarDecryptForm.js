import React, { Component } from 'react';
import { decryptCaesar } from '../../../api';
import { Form, Input } from 'semantic-ui-react';
import InputOutputCipher from './../../common/InputOutputCipher';

class CaesarDecryptForm extends Component {
  state = {
    inputText: '',
    padding: '',
    outputText: ''
  };

  onSubmit = async (e) => {
    e.preventDefault();
    const { data } = await decryptCaesar(this.state.inputText, parseInt(this.state.padding, 10));
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
                             onTextChange={this.onChange('inputText')}
                             buttonText={'Decrypt'}
          />
        </Form>
      </div>
    );
  }
}

export default CaesarDecryptForm;
