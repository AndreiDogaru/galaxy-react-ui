import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core';
import { SnackbarProvider } from 'notistack';

import './App.scss';
import Header from '../components/header/header';
import Home from '../pages/home/home';
import ProfileCard from '../components/profile-card/profile-card';
import GroupsEventsOverview from '../components/groups-events-overview/groups-events-overview';
import theme from '../theme';

const App = () => (
  <MuiThemeProvider theme={theme}>
    <SnackbarProvider
      maxSnack={3}
      classes={{
        variantSuccess: 'snackbar-success',
        variantError: 'snackbar-error',
        variantInfo: 'snackbar-info',
      }}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
      <div className="page_container">
        <BrowserRouter>
          <Header />

          <div className="page_content">
            <ProfileCard />

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/groups" component={() => <p>Groups</p>} />
              <Route path="/calendar" component={() => <p>Calendar</p>} />
              <Route path="/users" component={() => <p>Users</p>} />
              <Route path="/messages" component={() => <p>Messages</p>} />
              <Route path="/notifications" component={() => <p>Notifications</p>} />
              <Redirect from="*" to="/" />
            </Switch>

            <GroupsEventsOverview />
          </div>
        </BrowserRouter>
      </div>
    </SnackbarProvider>
  </MuiThemeProvider>
);

export default App;
