import React from 'react';
import { Grid, Input } from 'semantic-ui-react';

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

export default Matrix;