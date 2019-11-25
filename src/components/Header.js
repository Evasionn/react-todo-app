import React from 'react';
import { hot } from 'react-hot-loader/root';

function Header() {
    return (
        <header class="header">
            <h1>todos</h1>
            <input class="new-todo" placeholder="What needs to be done?" autofocus/>
        </header>
    );
}


export default hot(Header);