import React, { Component } from "react";
import { decryptHill } from "../../../api";
import { Form } from "semantic-ui-react";
import InputOutputCipher from "./../../common/InputOutputCipher";
import { isNumeric } from "../../../utils/number";
import Matrix from "../../common/Matrix";

class HillDecryptForm extends Component {
  state = {
    inputText: 'pfogoanpgxfx',
    outputText: '',
    isNumeric: true,
    values: [[2, 4, 5], [9, 2, 1], [3, 17, 7]]
  };

  onSubmit = async e => {
    e.preventDefault();
    decryptHill(this.state.inputText, this.state.values)
      .then(({ data }) => this.setState({ outputText: data.data }))
      .catch(() =>
        this.setState({ error: "Could not get inverse of this matrix by mod" })
      );
  };

  onChangeMatrix = rowIndex => index => e => {
    const value = e.target.value;
    const isValueNumeric = isNumeric(value);
    this.setState(prevState => {
      const values = prevState.values.map(row => [...row]);
      values[rowIndex][index] =
        value && isValueNumeric ? parseInt(value, 10) : value;
      return {
        values,
        isNumeric: isValueNumeric,
        error: !isValueNumeric
          ? "Matrix should contain only numeric symbols"
          : ""
      };
    });
  };

  onChangeInputText = e => {
    this.setState({
      inputText: e.target.value
    });
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.onSubmit}>
          <Matrix
            onChangeMatrix={this.onChangeMatrix}
            matrix={this.state.values}
            className={"hill-form__matrix"}
          />

          {this.state.error}
          <InputOutputCipher
            disabled={!this.state.isNumeric}
            outputText={this.state.outputText}
            inputText={this.state.inputText}
            onTextChange={this.onChangeInputText}
            buttonText={"Decrypt"}
          />
        </Form>
      </div>
    );
  }
}

export default HillDecryptForm;
