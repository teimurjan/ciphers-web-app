import React, { Component } from 'react';
import { decryptVigenere } from '../../../api';
import { Form, Input } from 'semantic-ui-react';
import InputOutputCipher from './../../common/InputOutputCipher';

class VigenereDecryptForm extends Component {
  state = {
    inputText: '',
    keyword: '',
    outputText: ''
  };

  onSubmit = async (e) => {
    e.preventDefault();
    const { data } = await decryptVigenere(this.state.inputText, this.state.keyword);
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
          <InputOutputCipher outputText={this.state.outputText} inputText={this.state.inputText}
                             onTextChange={this.onChange('inputText')}
                             buttonText={'Decrypt'}/>
        </Form>
      </div>
    );
  }
}

export default VigenereDecryptForm;
