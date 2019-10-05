import React, { Component } from 'react';
import { connect } from 'react-redux';
// ---- Import CSS ---- //
import '../Home/Home.css'

// -------------------- END IMPORTS --------------------- //

class Home extends Component {

    // Fires of dispatch and renders movies on the DOM.
    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_MOVIES' })
    } // end DidMount

    // Handles the click to information page.
    handleClick = (id) => {
        console.log('Clicked!');
        this.props.history.push(`/Info/${id}`)
        this.props.dispatch({ type: 'FETCH_ID', payload: id });
    } // end handleClick

    render() {
      return (
          <div className="Home">
              <h1>Home Page</h1>
              <div className="movieMap">
              {this.props.reduxState.movieList.map((movies) => {
                  return (
                      <img onClick={() => this.handleClick(movies.id)} key={movies.id} src={movies.poster} alt={movies.title}/>
                  )
              })} {/* End map of movies */}
              </div>     
          </div>
      );
    }
  }

const mapStateToProps = reduxState => ({
    reduxState,
});
export default connect(mapStateToProps)(Home);