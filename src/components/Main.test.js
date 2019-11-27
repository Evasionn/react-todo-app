import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';

const mockStore = configureStore([]);

describe('My Connected React-Redux Component', () => {
    let store;
    let container = null;

    beforeEach(() => {
        container = document.createElement("div");
        container.id = 'container';
        document.body.appendChild(container);

        store = mockStore({
            todos: [
                {
                    id: 0,
                    task: 'Ali',
                    done: false
                },
                {
                    id: 1,
                    task: 'Veli',
                    done: true
                }
            ]
        });

        ReactDOM.render(<Provider store={store}>
            <Main/>
        </Provider>, container);
    });
    it('should render with given state from Redux store', () => {
        let ul = container.getElementsByTagName('ul')[0];
        let labels = ul.getElementsByTagName('label');

        expect(labels.length).toBe(2);

        for (let i = 0; i < labels.length; i++) {
            expect(labels[i].textContent).toBe(store.getState().todos[i].task);
        }
    });
});