import React, { Component } from 'react';
import { vigenere } from './api';
import { Button, Form, Input, TextArea } from 'semantic-ui-react';

class VigenereForm extends Component {
  state = {
    text: '',
    padding: ''
  };

  onSubmit = (e) => {
    e.preventDefault();
    vigenere(this.state.text, this.state.keyword);
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.onSubmit}>
          <Input placeholder='Padding' />
          <TextArea placeholder='Text to cipher' />
          <Button primary type='submit'>Cipher</Button>
        </Form>
      </div>
    );
  }
}

export default VigenereForm;
