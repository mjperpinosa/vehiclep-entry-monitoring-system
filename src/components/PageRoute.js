import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import Page from './Page';

const PageRoute = props => {
  const { path, component } = props;
  return (
    <Route path={path}>
      <Page {...props}>
        {component()}
      </Page>
    </Route>
  )
}

export default withRouter(PageRoute);