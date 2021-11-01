import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import SignupPage from '../../../../forms/SignupForm/SignupPage';
import { MainListUser } from './MainListUser/MainListUser';

function User(props) {
  const match = useRouteMatch();
  console.log({ match });

  return (
    <Switch>
      <Route exact path={match.url} component={MainListUser} />

      <Route path={`${match.url}/add`} component={SignupPage} />
      <Route path={`${match.url}/:userId`} component={SignupPage} />
    </Switch>
  );
}

export default User;
