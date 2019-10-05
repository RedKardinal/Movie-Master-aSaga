// ---- Import Redux, Routers, & React ---- //
import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
// ---- Import CSS ---- //
import './App.css';
// ---- Connect Pages to App.js ---- //
import Home from '../Home/Home';
import Info from '../Info/Info';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/Info/:id' component={Info}></Route>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = reduxState => ({
  reduxState,
});
export default connect(mapStateToProps)(App);