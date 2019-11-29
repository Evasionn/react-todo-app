import React, {useState} from 'react';
import {connect} from "react-redux";

function Header(props) {
    const [value, setValue] = useState('');

    return (
        <header className="header">
            <h1>todos</h1>
            <form onSubmit={(e) => {handleFromSubmit(e); }}>
                <input
                    className="new-todo"
                    placeholder="What needs to be done?"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    autoFocus
                />
            </form>
        </header>
    );

    function handleFromSubmit(e) {
        e.preventDefault();
        props.handleAddTask(value);
        setValue('');
    }
}


function mapStateToProps(state) {
    return {
        todos: state.todos
    }
}

function mapDispatchToProps(dispatch) {
    return  {
        handleAddTask: (task) => {
            dispatch({type: 'ADD_TASK', new_task: task});
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);