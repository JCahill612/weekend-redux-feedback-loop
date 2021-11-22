import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

const addFeedbackReducer = (state =[], action)=>{
    if(action.type === 'ADD_FEEDBACK'){
        return[...state, action.payload]
    }
    else if(action.type === 'CLEAR_REDUCER'){
        return []
    }
    return state
}

const storeInstance = createStore(
    combineReducers({
        addFeedbackReducer
    })
)

ReactDOM.render(
<Provider store={storeInstance}>
    <App />
</Provider>
    , document.getElementById('root'));
registerServiceWorker();
