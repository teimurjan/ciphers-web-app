import React, { Component } from 'react';
import { decryptHill } from '../../../api';
import { Form } from 'semantic-ui-react';
import InputOutputCipher from './../../common/InputOutputCipher';
import { isNumeric } from '../../../utils/number';
import Matrix from '../../common/Matrix';


class HillDecryptForm extends Component {
  state = {
    inputText: '',
    outputText: '',
    isNumeric: true,
    values: [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ]
  };

  onSubmit = async (e) => {
    e.preventDefault();
    const { data } = await decryptHill(this.state.inputText, this.state.values);
    this.setState({ outputText: data.data });
  };

  onChangeMatrix = (rowIndex) => (index) => (e) => {
    const value = e.target.value;
    const isValueNumeric = isNumeric(value);
    this.setState((prevState) => {
      const values = prevState.values.map((row) => [...row]);
      values[rowIndex][index] = value && isValueNumeric ? parseInt(value, 10) : value;
      return ({ values, isNumeric: isValueNumeric });
    });
  };

  onChangeInputText = (e) => {
    this.setState({
      inputText: e.target.value
    });
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.onSubmit}>
          <Matrix onChangeMatrix={this.onChangeMatrix} matrix={this.state.values} className={'hill-form__matrix'}/>

          {!this.state.isNumeric && <div>
            Matrix should contain only numeric symbols
          </div>}
          <InputOutputCipher disabled={!this.state.isNumeric}
                             outputText={this.state.outputText}
                             inputText={this.state.inputText}
                             onTextChange={this.onChangeInputText}
                             buttonText={'Decrypt'}/>

        </Form>
      </div>
    );
  }
}

export default HillDecryptForm;
