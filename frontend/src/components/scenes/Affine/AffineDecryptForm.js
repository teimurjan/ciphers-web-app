import React, { Component } from 'react';
import { decryptAffine } from '../../../api';
import { Form, Input } from 'semantic-ui-react';
import InputOutputCipher from './../../common/InputOutputCipher';
import { isNumeric } from '../../../utils/number';

class AffineDecryptForm extends Component {
  state = {
    inputText: '',
    outputText: '',
    key: { a: 1, b: 1 }
  };

  onSubmit = async (e) => {
    e.preventDefault();
    const { data } = await decryptAffine(this.state.inputText, this.state.key);
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
                             onTextChange={this.onChangeInputText}
                             buttonText={'Decrypt'}
          />
        </Form>
      </div>
    );
  }
}

export default AffineDecryptForm;
