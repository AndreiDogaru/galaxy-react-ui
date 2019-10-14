import React from 'react';
import { 
  BrowserRouter,
  Switch,
  Route,
  Redirect,
 } from 'react-router-dom';

import './App.css';
import Header from '../components/header/header';
import Home from '../pages/home/home';

function App() {
  return (
    <div className="page_container">
      <BrowserRouter>
        <Header />

        <div className="page">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/groups" component={() => <p>Groups</p>} />
            <Route path="/calendar" component={() => <p>Calendar</p>} />
            <Route path="/users" component={() => <p>Users</p>} />
            <Route path="/messages" component={() => <p>Messages</p>} />
            <Route path="/notifications" component={() => <p>Notifications</p>} />
            <Redirect from='*' to='/' />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;