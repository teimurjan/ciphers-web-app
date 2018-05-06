import React from 'react';
import { Button, Grid, TextArea } from 'semantic-ui-react';

export default function ({ disabled, outputText, inputText, onTextChange }) {
  return (<div>
    <Grid columns={2}>
      <Grid.Row>
        <Grid.Column>
          <label>Input Text</label>
          <TextArea placeholder='Text to cipher' value={inputText} onChange={onTextChange}/>
        </Grid.Column>
        <Grid.Column>
          <label>Output Text</label>
          <div>{outputText || 'Nothing here yet'}</div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    <Button primary disabled={disabled} type='submit'>Cipher</Button>
  </div>);
}