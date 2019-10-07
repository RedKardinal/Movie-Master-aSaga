// ---- Import Redux, Routers, & React ---- //
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { HashRouter as Router } from 'react-router-dom';
// ---- Import CSS ---- //
import '../Info/Info.css'
// ---- Material UI ------ // 
import { createMuiTheme } from '@material-ui/core/styles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { Button } from '@material-ui/core'
// ---- Material UI Designs ---- //
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#4055B2',
    },
    secondary: { main: '#c62828' },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  }
});

// -------------------- END IMPORTS --------------------- //

class Info extends Component {

  // pull movie ID and details
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_ID_DETAILS', payload: this.props.match.params })
    // console.log(this.props.match.params.id);
  } // end DidMount

  handleBack = () => {
    this.props.history.push('/')
  } // back to home.

  editInfo = (id) => {
    this.props.history.push(`/Edit/${id}`)
  } // to edit page.


  render() {
    return (
      <Router>
        <MuiThemeProvider theme={theme}>
        <div className="Info">
          {this.props.reduxState.genres.map((movies) => {
            return (
              <div key={movies.id}>
                <div className="poster">
                  <img src={movies.poster} alt={movies.title} />
                </div>
                <div className="description">
                  <h2>{movies.title}</h2>
                  <h3>{movies.genre_name}</h3>
                  <div>
                      <p>{movies.description}</p>
                  </div>
                </div>
                <br />
                <div className="buttons">
                  <Button onClick={this.handleBack} variant='contained' color="primary">Back</Button>
                  <Button onClick={() => this.editInfo(movies.id)} variant='contained' color="secondary" className="edit">Edit</Button>
                </div>
              </div>
            )
          })} {/* end map of details */}
        </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}

const mapStateToProps = reduxState => ({
  reduxState,
});
export default withRouter(connect(mapStateToProps)(Info));