import React, { Component } from 'react';
import { connect } from 'react-redux';
// ---- Import CSS ---- //
import '../Home/Home.css'

// -------------------- END IMPORTS --------------------- //

class Home extends Component {

    // Fires of dispatch and renders movies on the DOM.
    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_MOVIES' })
        this.props.dispatch({ type: 'FETCH_GENRE_NAMES' })
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
                <div className="genreContainer">
                {this.props.reduxState.setGenreName.map((genre) => {
                    return (
                        <h4 className="genres" key={genre.id}> {genre.name} </h4>
                    )
                })} {/* End map of genre */}
                </div>
                <div className="movieMap">
                    {this.props.reduxState.movieList.map((movies) => {
                        return (

                            <img onClick={() => this.handleClick(movies.id)} key={movies.id} src={movies.poster} alt={movies.title} width="120" height="180" className="img" />
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