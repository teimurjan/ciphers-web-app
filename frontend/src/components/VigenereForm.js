import React, { Component } from 'react';
import { encryptVigenere } from '../api';
import { Form, Input } from 'semantic-ui-react';
import InputCipher from './common/InputOutputCipher';

class VigenereForm extends Component {
  state = {
    inputText: '',
    keyword: '',
    outputText: ''
  };

  onSubmit = async (e) => {
    e.preventDefault();
    const { data } = await encryptVigenere(this.state.inputText, this.state.keyword);
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
          <Input placeholder='Keyword' onChange={this.onChange('keyword')}/>
          <InputCipher outputText={this.state.outputText} inputText={this.state.inputText}
                       onTextChange={this.onChange('inputText')}/>
        </Form>
      </div>
    );
  }
}

export default VigenereForm;
