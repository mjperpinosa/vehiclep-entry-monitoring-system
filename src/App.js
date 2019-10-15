import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { createStore, action, StoreProvider } from 'easy-peasy';
import './App.css';

import Dashboard from './screens/dashboard';
import Capture from './screens/captures';
import Login from './screens/login';
import PageRoute from './components/PageRoute';

const store = createStore({
  entries: {
    items: [],
    selectedEntry: {},
    filter: '',
    addEntry: action((state, payload) => {
      state.items.unshift(payload)
    }),
    setInitialEntries: action((state, payload) => {
      state.items = payload
    }),
    setSelectedEntry: action((state, payload) => {
      state.selectedEntry = payload;
    }),
    setFilter: action((state, payload) => {
      state.filter = payload
    })
  }
});

function App() {
  return (
    <StoreProvider store={store}>
      <Router>
          <Switch>
            <Route path="/login" component={Login} />
            <PageRoute path="/dashboard" component={Dashboard} />
            <PageRoute path="/captures" component={Capture} />
          </Switch>
      </Router>
    </StoreProvider>
  );
}

export default App;
