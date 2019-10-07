// ---- Import Redux, Routers, & React ---- //
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { HashRouter as Router } from 'react-router-dom';
// ---- Import CSS ---- //
import '../Edit/Edit.css'
// ---- Material UI ------ // 
import { createMuiTheme } from '@material-ui/core/styles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { Button } from '@material-ui/core'
import TextField from '@material-ui/core/TextField';
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

class Edit extends Component {

    state = {
        id: this.props.match.params.id,
        title: ``,
        description: ``,
        button: true,
    };

    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_ID_DETAILS', payload: this.props.match.params })
        // console.log(this.props.match.params.id);
    } // end DidMount (Populate Page with current movie details)

    handleChange = (propertyName, event) => {
        this.setState({
            ...this.state,
            [propertyName]: event.target.value,
            button: false
        })
        // console.log('Edit', this.state)
    } // handles Change in input fields

    handleUpdate = () => {
        // console.log('Title Change!', this.state);
        this.props.dispatch({ type: 'PUT_DETAILS', payload: this.state })
        // this.handleBack();
    }

    handleBack = (id) => {
        this.props.history.push(`/Info/${id}`)
    } // handleBack button

    render() {
        return (
            <Router>
                <MuiThemeProvider theme={theme}>
                    <div className="EditPage">
                        {this.props.reduxState.genres.map((movies) => {
                            return (
                                <div key={movies.id}>
                                    <img src={movies.poster} alt={movies.title} className="poster"/>
                                    <br />
                                    <div className="textFields">
                                        <TextField
                                            onChange={(event) => this.handleChange('title', event)}
                                            defaultValue={movies.title}
                                            fullWidth
                                            type="text"
                                            varient="outlined"
                                            placeholder={movies.title}>
                                        </TextField>
                                        <br />
                                        <br />
                                        <TextField
                                            onChange={(event) => this.handleChange('description', event)}
                                            id="outlined-multiline-static"
                                            defaultValue={movies.description}
                                            multiline
                                            fullWidth
                                            rows="5"
                                            variant="outlined"
                                            margin="normal"
                                            placeholder={movies.description}>
                                        </TextField>
                                        <br />
                                        <br />
                                    </div>
                                    <br />
                                    <div className="buttons">
                                        <Button onClick={() => this.handleBack(movies.id)} variant='contained' color="primary">Back</Button>
                                        <Button onClick={this.handleUpdate} variant='contained' color="primary" disabled={this.state.button}>Edit</Button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </MuiThemeProvider>
            </Router>
        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});
export default withRouter(connect(mapStateToProps)(Edit));