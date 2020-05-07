import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import Contacts from './Components/Contacts/Contacts';
import AddContact from './Components/Contacts/AddContact';
import EditContact from './Components/Contacts/EditContact';
import Header from './Components/Layout/Header';
import About from './Components/pages/About';
import NotFound from './Components/pages/NotFound';

import { Provider } from 'react-redux'
import store from './Store/store'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header branding="Contact Organizer" />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Contacts} />
              <Route exact path="/Contacts/Add" component={AddContact} />
              <Route exact path="/Contacts/Edit/:id" component={EditContact} />
              <Route exact path="/About" component={About} />
              <Route exact component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  )
}

export default App;
