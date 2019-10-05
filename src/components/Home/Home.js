import React, { Component } from 'react';
import { connect } from 'react-redux';
// ---- Import CSS ---- //
import '../Home/Home.css'

// -------------------- END IMPORTS --------------------- //

class Home extends Component {

    // Renders the entire app on the DOM
    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_MOVIES' })
    }

    // clickMovie = (id) => {
    //     console.log('Clicked!');
    //     this.props.history.push(`/Info/:${id}`)
    //     this.props.dispatch({ type: 'FETCH_ID', payload: id });
    // }

    render() {
      return (
          <div className="Home">
              <p>Test This is text</p>
              {/* <div className="movieMap">
              {this.state.movieList.map((movies) => {
                  return (
                      <img src={movies.poster} />
                  )
              })} */}
              </div>     
          </div>
      );
    }
  }

const mapStateToProps = reduxState => ({
    reduxState,
});
export default connect(mapStateToProps)(Home);