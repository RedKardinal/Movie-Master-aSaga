// ---- Import Redux, Routers, & React ---- //
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
// ---- Import CSS ---- //
import '../Edit/Edit.css'
// ---- Material UI ------ // 
// import { createMuiTheme } from '@material-ui/core/styles';
// import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { Button } from '@material-ui/core'
// ---- Material UI Designs ---- //

// -------------------- END IMPORTS --------------------- //

class Edit extends Component {

    state = {
        id: this.props.match.params.id,
        title: '',
        description: '',
    };
    
    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_ID_DETAILS', payload: this.props.match.params })
        console.log(this.props.match.params.id);
    } // end DidMount (Populate Page with current movie details)

    handleChange = (event) => {
        this.setState({
          title: event.target.value
        })
    } // handles Change in input fields

    handleTitle = (event) => {
        console.log('Title Change!', this.state.title);
        this.props.dispatch({ type: 'PUT_DETAILS', payload: this.state })
    }

    // handleDescription = () => {
    //     console.log('Description Change');     
    // }

    handleBack = (id) => {
        this.props.history.push(`/Info/${id}`)
    } // handleBack button

    render() {
      return (
        <Router>
          <div className="EditPage">
            <h2>Test Edit</h2>
            {this.props.reduxState.genres.map((movies) => {
                  return (
                      <div key={movies.id}>
                      {/* <img src={movies.poster} alt={movies.title}/> */}
                        <div>
                            <h2>{movies.title}</h2>
                            <input onChange={this.handleChange} type="text" placeholder="Change Title"></input>
                            <br/>
                            <br/>
                            {/* <Button onClick={this.handleBack} variant='contained' color="primary">Submit</Button> */}
                            {/* <h3>{movies.genre_name}</h3> */}
                        </div>
                        <div>
                            <p>{movies.description}</p>
                            <input placeholder="Change Description"></input>
                            <br/>
                            <br/>
                            <Button onClick={this.handleBack} variant='contained' color="primary">Submit</Button>
                        </div>
                        <br />
                        <div>
                            <Button onClick={() => this.handleBack(movies.id)} variant='contained' color="primary">Cancel</Button>
                            <Button onClick={this.editInfo} variant='contained' color="primary">Edit</Button>
                        </div>
                      </div>
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
export default withRouter(connect(mapStateToProps)(Edit));