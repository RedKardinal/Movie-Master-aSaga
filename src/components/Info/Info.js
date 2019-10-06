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

    handleBack = () => {
        this.props.history.push('/')
    }

    editInfo = (id) => {
        this.props.history.push(`/Edit/${id}`)
    }


    render() {
      return (
        <Router>
          <div className="Info">
            <h2>Test Info</h2>
            {this.props.reduxState.genres.map((movies) => {
                  return (
                      <div key={movies.id}>
                      <img src={movies.poster} alt={movies.title}/>
                        <div className="description">
                            <h2>{movies.title}</h2>
                            <h3>{movies.genre_name}</h3>
                        <div>
                            <p>{movies.description}</p>
                        </div>
                        </div>
                        <br />
                        <br />
                        <div>
                            <Button onClick={this.handleBack} variant='contained' color="primary">Back</Button>
                            <Button onClick={() => this.editInfo(movies.id)} variant='contained' color="primary">Edit</Button>
                        </div>
                      </div>
                  ) 
            })} {/* end map of details */}
          </div>
        </Router>
      );
    }
  }

const mapStateToProps = reduxState => ({
    reduxState,
});
export default withRouter(connect(mapStateToProps)(Info));