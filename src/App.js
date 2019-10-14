import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';

import Page from './screens/page';
import Dashboard from './screens/dashboard';
import Capture from './screens/captures';

function App() {
return (
    <Router>
      <Page>
        <Switch>
          <Route path="/captures" component={Capture} />
          <Route path="/" component={Dashboard} />
        </Switch>
      </Page>
    </Router>
  );
}

export default App;
