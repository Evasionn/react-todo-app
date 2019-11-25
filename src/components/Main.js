import React from 'react';

function Main() {
    return (
        <section class="main">
            <input id="toggle-all" class="toggle-all" type="checkbox"/>
            <label for="toggle-all">Mark all as complete</label>
            <ul class="todo-list">
                <li class="completed">
                    <div class="view">
                    <input class="toggle" type="checkbox" checked/>
                    <label>Taste JavaScript</label>
                    <button class="destroy"></button>
                    </div>
                    <input class="edit" value="Create a TodoMVC template"/>
                </li>
                <li>
                    <div class="view">
                    <input class="toggle" type="checkbox"/>
                    <label>Buy a unicorn</label>
                    <button class="destroy"></button>
                    </div>
                    <input class="edit" value="Rule the web"/>
                </li>
            </ul>
        </section>
    );
}

export default Main;