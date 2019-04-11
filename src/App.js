import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'; //BrowserRouter will change to Hash Router for github pages
import Contacts from './components/contacts/Contacts';
import Header from './components/layout/Header';
import About from './components/pages/About';
import AddContact from './components/contacts/AddContact';
import EditContact from './components/contacts/EditContact';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Provider} from './context';
import './App.css';
import NotFound from './components/pages/NotFound';

class App extends Component {
  
  render() {
    return (
      //props used is 'branding, name, email, phone'
      <Provider>
        <Router>
          <div className="App">
            <Header branding="Contact Manager" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts}/>
                <Route exact path="/contact/add" component={AddContact}/>
                <Route exact path="/contact/Edit/:id" component={EditContact}/>
                <Route exact path="/about" component={About}/>
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
     
    );
  }
}

export default App;
