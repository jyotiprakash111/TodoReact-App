import React, { Component } from 'react';
import TodoItem from './TodoItem';

export default class TodoLost extends Component {
    render() {
        const { items, clearList, deleteData, handleEdit } = this.props;
        return (
            <ul className="list-group my-5">
                <h3 className="text-captalize">
                    todo list</h3>
                {items.map(item => {
                    return <TodoItem key={item.id}
                        title={item.title}
                        deleteData={() => deleteData(item.id)}
                        handleEdit={() => handleEdit(item.id)}
                    />
                })}
                <button type="button"
                    className="btn btn-danger btn-block text-captalize mt-5"
                    onClick={clearList}
                >
                    ClearList
                </button>
            </ul>
        );
    }
}
