import React from 'react';
import { 
  BrowserRouter,
  Switch,
  Route,
  Redirect,
 } from 'react-router-dom';

import './App.scss';
import Header from '../components/header/header';
import Home from '../pages/home/home';
import ProfileCard from '../components/profile-card/profile-card';
import GroupsEventsOverview from '../components/groups-events-overview/groups-events-overview';

const App = () => {
  return (
    <div className="page_container">
      <BrowserRouter>
        <Header />

        <div className="page_content">
          <ProfileCard />
          
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/groups" component={() => <p>Groups</p>} />
            <Route path="/calendar" component={() => <p>Calendar</p>} />
            <Route path="/users" component={() => <p>Users</p>} />
            <Route path="/messages" component={() => <p>Messages</p>} />
            <Route path="/notifications" component={() => <p>Notifications</p>} />
            <Redirect from='*' to='/' />
          </Switch>

          <GroupsEventsOverview />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;