import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CaptureTable from './captureTable';
import Detail from './detail';

const Capture = props => {
  return (
    <Switch>
      <Route exact path="/captures/:id" component={Detail} />
      <Route path="/" component={CaptureTable} />
    </Switch>
  )
}

export default Capture;
