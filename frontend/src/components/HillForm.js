import React, { Component } from 'react';
import { encryptHill } from '../api';
import { Form, Grid, Input } from 'semantic-ui-react';
import InputCipher from './common/InputOutputCipher';
import { isNumeric } from '../utils/number';


const MatrixInput = ({ onChange, value }) => <Input value={value} fluid onChange={onChange}/>;

const MatrixRow = ({ onChangeMaker, values }) =>
  <Grid.Row>
    {Object.keys(values).map((it, index) =>
      (<Grid.Column key={index}>
        <MatrixInput onChange={onChangeMaker(index)} value={values[it]}/>
      </Grid.Column>))}
  </Grid.Row>;

const Matrix = ({ matrix, onChangeMatrix, className }) => (
  <Grid columns={3} className={className}>
    {matrix.map((row, index) =>
      <MatrixRow key={index} onChangeMaker={onChangeMatrix(index)} values={row}/>
    )}
  </Grid>
);

class HillForm extends Component {
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
    const { data } = await encryptHill(this.state.inputText, this.state.values);
    this.setState({ outputText: data.data });
  };

  onChangeMatrix = (rowIndex) => (index) => (e) => {
    const value = e.target.value;
    const isNumeric = isNumeric(value);
    this.setState((prevState) => {
      const values = prevState.values.map((row) => [...row]);
      values[rowIndex][index] = value && isNumeric ? parseInt(value, 10) : value;
      return ({ values, isNumeric });
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
          <InputCipher disabled={!this.state.isNumeric}
                       outputText={this.state.outputText}
                       inputText={this.state.inputText}
                       onTextChange={this.onChangeInputText}/>

        </Form>
      </div>
    );
  }
}

export default HillForm;
