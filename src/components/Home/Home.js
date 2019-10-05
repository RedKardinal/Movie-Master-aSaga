import React, { Component } from 'react';
import { connect } from 'react-redux';
// ---- Import CSS ---- //
import '../Home/Home.css'

// -------------------- END IMPORTS --------------------- //

class Home extends Component {

    // Renders the entire app on the DOM
    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_MOVIES' })
    } // end DidMount

    handleClick = (id) => {
        console.log('Clicked!');
        this.props.history.push(`/Info/${id}`)
        this.props.dispatch({ type: 'FETCH_ID', payload: id });
    } // end handleClick

    render() {
      return (
          <div className="Home">
              <p>Test This is text</p>
              <div className="movieMap">
              {this.props.reduxState.movieList.map((movies) => {
                  return (
                      <img onClick={() => this.handleClick(movies.id)} key={movies.id} src={movies.poster} alt={movies.title}/>
                  )
              })}
              </div>     
          </div>
      );
    }
  }

const mapStateToProps = reduxState => ({
    reduxState,
});
export default connect(mapStateToProps)(Home);