import React from 'react';
import {connect} from "react-redux";

function Footer(props) {
    return (
        <footer className="footer">
            <span className="todo-count"><strong>{props.todos.length}</strong> item left</span>
            <ul className="filters">
                <li>
                    <a className="selected" href="#/">All</a>
                </li>
                <li>
                    <a href="#/active">Active</a>
                </li>
                <li>
                    <a href="#/completed">Completed</a>
                </li>
            </ul>
            <button className="clear-completed" onClick={props.clearCompleted}>Clear completed</button>
        </footer>
    );
}

function mapStateToProps(state) {
    return {
        todos: state.todos
    }
}

function mapDispatchToProps(dispatch) {
    return  {
        clearCompleted: () => {
            dispatch({type: 'CLEAR_COMPLETED'});
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Footer);
