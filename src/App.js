import React, { Component } from 'react';
import { connect } from 'react-redux'
import { HashRouter, Switch, Route } from 'react-router-dom'
import './App.css';

import { realTimeUpdate } from './store/actions'
import DashboardPage from './components/pages/dashboard.page';
import AddDocumentPage from './components/pages/addDocument.page';
import EditDocumentPage from './components/pages/editDocument.page'
import LoginPage from './components/pages/login.page'
import LogoutLinkComponent from './components/logoutLink.component';


class App extends Component {
  
  componentWillMount() {
    this.props.realTimeUpdate();
  }

  render() {
    return (
      <HashRouter>
        <div className="App">
          <LogoutLinkComponent />
          <Switch>
            <Route exact path='/login' component={LoginPage} />
            <Route exact path='/' component={DashboardPage} />
            <Route path='/create' component={AddDocumentPage} />
            <Route path='/edit/:id' component={EditDocumentPage} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}



const mapDispatchToProps = dispatch => {
  return {
    realTimeUpdate: () => dispatch(realTimeUpdate())
  }
}

export default connect(null, mapDispatchToProps)(App);
