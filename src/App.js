import 'bootstrap/dist/css/bootstrap.min.css';
import "mdbreact/dist/css/mdb.css";

import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import List from './Components/List'
import UploadReport from './Components/UploadReport';
import UploadPage from './Components/UploadPage';
import Details from './Components/Details';
import Header from './Components/Header';
import Presentation from './Components/Presentation/index';
import Dashboard from './Components/Dashboard/index';
import ResultViewer from './Components/ResultsViewer/index';
import AboutPage from './Components/About';
import ContributorsPage from './Components/Contributors';


import './App.css';

function App() {
  return (
    <Router>
      <div className="App">

        <Fragment>
        <Header />
        <Switch>
          <Route path="/upload" component={UploadPage} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/result" component={ResultViewer} />
          <Route path="/about" component={AboutPage}/>
          {/*<Route path="/contributors" component={ContributorsPage}/>*/}
          <Presentation />
        </Switch>
        </Fragment>
      </div>
    </Router>

  );
}

export default App;
