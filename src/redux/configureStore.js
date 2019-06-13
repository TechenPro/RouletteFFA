import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

export default function (initial_state = {}){
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(rootReducer, initial_state, composeEnhancers(
        applyMiddleware(thunk)
    ));

    // Optional checks may be performed here
    
    return store;
}
