import React, { Component } from 'react';
import {HashRouter as Router, Route} from "react-router-dom";

import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';

import AlbumPage from './Pages/AlbumPage';
import PhotosPage from './Pages/PhotosPage';

import Aux from '../hoc/hocAux';

class App extends Component {
  render() {
    return (
      <Router>
        <Aux>
          <Header/>
          <Route exact path='/' component={AlbumPage}/>
          <Route path='/albums/:id' component={PhotosPage} />
          <Footer/>
        </Aux>
      </Router>
    );
  }
}

export default App;
