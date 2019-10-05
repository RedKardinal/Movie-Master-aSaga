// ---- Import Redux, Routers, & React ---- //
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
// ---- Import CSS ---- //
import '../Info/Info.css'
// ---- Material UI ------ // 
// import { createMuiTheme } from '@material-ui/core/styles';
// import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { Button } from '@material-ui/core'
// ---- Material UI Designs ---- //

// -------------------- END IMPORTS --------------------- //

class Info extends Component {

        // Renders the entire app on the DOM
    
    
    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_ID_DETAILS', payload: this.props.match.params })
        console.log(this.props.match.params.id);
        
    } // end DidMount

    render() {
      return (
        <Router>
          <div className="Info">
            <h2>Test Text</h2>
            {this.props.reduxState.genres.map((movies) => {
                  return (
                      <img key={movies.id} src={movies.poster} alt={movies.title}/>
                  )
            })}
          </div>
        </Router>
      );
    }
  }

const mapStateToProps = reduxState => ({
    reduxState,
});
export default withRouter(connect(mapStateToProps)(Info));