import React, { Component } from 'react';
import { encryptVigenere } from '../../../api';
import { Form, Input } from 'semantic-ui-react';
import InputOutputCipher from './../../common/InputOutputCipher';

class VigenereEncryptForm extends Component {
  state = {
    inputText: 'defend the east wall of the castle',
    keyword: 'fortification',
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
          <Input placeholder='Keyword' value={this.state.keyword} onChange={this.onChange('keyword')}/>
          <InputOutputCipher outputText={this.state.outputText} inputText={this.state.inputText}
                             onTextChange={this.onChange('inputText')}/>
        </Form>
      </div>
    );
  }
}

export default VigenereEncryptForm;
