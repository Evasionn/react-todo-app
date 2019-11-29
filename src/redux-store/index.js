import {createStore} from 'redux';

const initialState = {
    todos: [
        {
            id: 0,
            task: 'test item 01',
            done: false
        },
        {
            id: 1,
            task: 'test item 02',
            done: true
        }
    ]
};

const reducer = (state = initialState, action) => {
    const oldState = state.todos.slice();
    let newState;
    switch (action.type) {
        case 'ADD_TASK':
            const newTask = {id: state.todos.length, task: action.new_task, done: false};
            return {...state, todos: [...state.todos, newTask]};
        case 'CHANGE_TASK_STATUS':
             newState = oldState.map((item) => {
                if (item.id === action.task_id) {
                    return {
                        ...item,
                        done: !item.done
                    }
                }
                return item;
            });
            return Object.assign({}, state, {todos: newState});

        case 'CLEAR_COMPLETED':
            newState = oldState.filter((item) => !item.done);
            return Object.assign({}, state, {todos: newState});

        default:
            return state;
    }
};

const store = createStore(reducer);
export default store;
