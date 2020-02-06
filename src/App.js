import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import pages from './pages';
import { ROUTES } from './configs/routes';
import PageBase from './components/layouts';
import { theme } from './styles';
import { MuiThemeProvider } from '@material-ui/core';

export default class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <PageBase>
          <Switch>
            {ROUTES.map((route, index) =>
              <Route component={route.page} exact key={index} path={route.path} />
            )}
            <Route component={pages.Error404} />
          </Switch>
        </PageBase>
      </MuiThemeProvider>
    );
  }
}
