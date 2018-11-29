import React, { Component } from 'react';
import { encryptAffine } from '../../../api';
import { Form, Input } from 'semantic-ui-react';
import InputOutputCipher from './../../common/InputOutputCipher';
import { isNumeric } from '../../../utils/number';

class AffineEncryptForm extends Component {
  state = {
    inputText: 'defend the east wall of the castle',
    outputText: '',
    key: { a: 1, b: 1 }
  };

  onSubmit = async (e) => {
    e.preventDefault();
    const { data } = await encryptAffine(this.state.inputText, this.state.key);
    this.setState({
      outputText: data.data
    });
  };

  onChangeInputText = (e) => {
    this.setState({
      inputText: e.target.value
    });
  };

  onKeyChange = (field) => (e) => {
    const value = e.target.value;
    this.setState((prevState) => ({
      key: {
        ...prevState.key,
        [field]: value && isNumeric(value) ? parseInt(value, 10) : value
      }
    }));
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.onSubmit}>
          <Input placeholder='A' onChange={this.onKeyChange('a')} value={this.state.key.a}/>
          <Input placeholder='B' onChange={this.onKeyChange('b')} value={this.state.key.b}/>
          <InputOutputCipher outputText={this.state.outputText}
                             inputText={this.state.inputText}
                             onTextChange={this.onChangeInputText}/>
        </Form>
      </div>
    );
  }
}

export default AffineEncryptForm;
