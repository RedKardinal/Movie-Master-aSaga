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
import Input from '@material-ui/core/Input'
import { Button } from '@material-ui/core'
import TextField from '@material-ui/core/TextField';

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

    handleChange = (propertyName, event) => {
        this.setState({
            ...this.state,
            [propertyName]: event.target.value
        })
        console.log('Edit', this.state)
    } // handles Change in input fields

    handleUpdate = () => {
        console.log('Title Change!', this.state);
        this.props.dispatch({ type: 'PUT_DETAILS', payload: this.state })
        this.handleBack();
    }

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
                        <div className="infoArea">
                            <h2>{movies.title}</h2>
                            <br/>
                            <br/>
                            {/* <Button onClick={this.handleBack} variant='contained' color="primary">Submit</Button> */}
                            {/* <h3>{movies.genre_name}</h3> */}                  
                            <p>{movies.description}</p>
                        </div>
                            <br />
                        <div className="textFields">
                            <Textfield onChange={this.handleChange}
                            onChange={ (event) => this.handleChange('title', event)}
                            value={this.state.title}  
                            type="text" 
                            placeholder="Change Title">
                            fullWidth
                            </Textfield>
                            <br />
                            <br />
                            <input
                            onChange={ (event) => this.handleChange('description', event)}
                            value={this.state.description}
                            placeholder="Change Description">
                            </input>
                            <br/>
                            <br/>
                        </div>
                        <br />
                        <div>
                            <Button onClick={() => this.handleBack(movies.id)} variant='contained' color="primary">Cancel</Button>
                            <Button onClick={this.handleUpdate} variant='contained' color="primary">Edit</Button>
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