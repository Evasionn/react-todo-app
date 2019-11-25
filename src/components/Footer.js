import React from 'react';
import { hot } from 'react-hot-loader/root';

function Footer() {
    return(
        <footer class="footer">
            <span class="todo-count"><strong>0</strong> item left</span>
            <ul class="filters">
            <li>
                <a class="selected" href="#/">All</a>
            </li>
            <li>
                <a href="#/active">Active</a>
            </li>
            <li>
                <a href="#/completed">Completed</a>
            </li>
            </ul>
            <button class="clear-completed">Clear completed</button>
        </footer>
    );
}

export default hot(Footer);