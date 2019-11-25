import { createStore } from 'redux';

const initialState = {
    todos: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        // fill with actions......

        default: 
        return state;
    }
}

const store = createStore(reducer);
export default store;