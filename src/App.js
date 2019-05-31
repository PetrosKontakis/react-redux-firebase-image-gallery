import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';


import DashboardPage from './components/pages/dashboard.page';
import AddDocumentPage from './components/pages/addDocument.page';
import EditDocumentPage from './components/pages/editDocument.page'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/' component={DashboardPage} />
          <Route path='/create' component={AddDocumentPage} />
          <Route path='/edit/:id' component={EditDocumentPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
