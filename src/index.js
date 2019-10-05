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
}

//------------ GET MOVIES ----------------//
function* fetchMovies(){
    try {
        const response = yield axios.get('/movies');
        // console.log('This is from the GET index.js', response.data);        
        yield put({ type: 'SET_MOVIES', payload: response.data });
    } catch (error) {
        console.log('Error while fetching movies (index.js)', error);
    }    
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movieList = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movieList,
        genres,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
