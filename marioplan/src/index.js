import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './store/reducers/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import fbConfig from './config/fbConfig';

// const store = createStore(rootReducer, applyMiddleware(thunk))

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
        reduxFirestore(fbConfig),
        reactReduxFirebase(fbConfig, { useFirestoreForProfile: true, userProfile: 'users', attachAuthIsReady: true })
    )
);

store.firebaseAuthIsReady.then(() => {
    ReactDOM.render(<Provider store={store} ><App /></Provider>, document.getElementById('root'));
})


serviceWorker.unregister();


// if 'Object() is not a function' error pops in,
// it's a package compatibility error.
// npm i --save react-redux@5.1.1 react-redux-firebase@2.2.4