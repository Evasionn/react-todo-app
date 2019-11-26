import React from 'react';
import {connect} from 'react-redux';

function Main(props) {
    return (
        <section className="main">
            <input id="toggle-all" className="toggle-all" type="checkbox"/>
            <label htmlFor="toggle-all">Mark all as complete</label>
            <ul className="todo-list">
                {
                    props.todos.map((item) => {
                        return (
                            <li key={item.id} className={item.done ? "completed" : ""} onClick={() => props.handleToggleTask(item.id)}>
                                <div className="view">
                                    <input className="toggle" type="checkbox" checked={item.done} readOnly/>
                                    <label>{item.task}</label>
                                    <button className="destroy"/>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    );
}

function mapStateToProps(state) {
    return {
        todos: state.todos
    }
}

function mapDispatchToProps(dispatch) {
    return  {
        handleToggleTask: (task_id) => {
            dispatch({type: 'CHANGE_TASK_STATUS', task_id: task_id});
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Main);
