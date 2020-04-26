import 'bootstrap/dist/css/bootstrap.min.css';
import "mdbreact/dist/css/mdb.css";

import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import List from './Components/List'
import UploadReport from './Components/UploadReport';
import UploadPage from './Components/UploadPage';
import Details from './Components/Details';
import Header from './Components/Header';
import Presentation from './Components/Presentation';
import ResultsViewer from './Components/ResultsViewer'

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">

        <Fragment>
        <Header />
        <Switch>
          <Route path="/upload" component={UploadPage} />
          <Presentation />
        </Switch>
        </Fragment>
      </div>
    </Router>

  );
}

export default App;
