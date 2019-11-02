// ---- Import Redux, Routers, CSS, & React ---- //
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
// ---- Redux Stuff ---- //
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app // 
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// --- Import saga middleware and saga effects --- //
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
// ---- Axios ---- //
import axios from 'axios';
// -------------------- END IMPORTS --------------------- //

// ---- Root Sagas ---- //
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchMovies);
    yield takeEvery('FETCH_ID_DETAILS', fetchGenre);
    yield takeEvery('FETCH_GENRE_NAMES', fetchGenreNames);
    yield takeEvery('PUT_DETAILS', putDetails);
};

//------------ GET MOVIES ----------------//
function* fetchMovies(){
    try {                               // list all movies on homepage.
        const response = yield axios.get('/movies');
        console.log('This is from the GET MOVIES index.js', response.data);        
        yield put({ type: 'SET_MOVIES', payload: response.data });
    } catch (error) {
        console.log('Error while fetching movies (index.js)', error);
    }    
}; // end

//------------ GET GENRE (ID)----------------//
function* fetchGenre(action){
    try{                                    // Getting IDs for movie details
        const response = yield axios.get(`/movies/${action.payload.id}`)
        // console.log('This is from the GET genres index.js', response.data); 
        yield put ({ type: 'SET_GENRES', payload: response.data})
    }catch(error){
        console.log('Error from fetchGenre', error);
    }
}; // end

//------------ GET GENRE NAMES ----------------//
function* fetchGenreNames(){
    try {                                   // display Genres on homepage
        const response = yield axios.get('/movies/getmy/genres');
        console.log('This is from the GET GENRE NAMEs index.js', response.data);        
        yield put({ type: 'SET_GENRE_NAME', payload: response.data });
    } catch (error) {
        console.log('Error while fetching genreName (index.js)', error);
    }    
}; // end

//------------ PUT DETAILS ----------------//
function* putDetails(action) {
    try {                       // edit title and description
    yield axios.put(`/movies`, action.payload)
    console.log('This is from the PUT DETAILS index.js', action.payload)
    // REFRESH ON BACK@!!!!!
    yield fetchGenreNames();
    }catch(error){
        console.log('Error from fetchGenre', error);
    }
}; // end

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();
//----------------------------------------------------------------------------//
// Used to store movies returned from the server
const movieList = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}; // end

// Used to store the movie genres (REALLY THE ID)
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}; // end

// Used to store Genre Name
const setGenreName = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRE_NAME':
            return action.payload;
        default:
            return state;
    }
}; // end

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movieList,
        genres,
        setGenreName,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
); // end

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
