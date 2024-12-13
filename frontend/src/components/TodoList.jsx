import React from 'react';

const TodoList = ({ todos, fetchTodos }) => {
    const handleUpdate = async (id, updatedData) => {
        try {
            await fetch(`http://localhost:3000/todos/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updatedData),
            });
            fetchTodos();
        } catch (error) {
            console.error('Error updating todo:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await fetch(`http://localhost:3000/todos/${id}`, { method: 'DELETE' });
            fetchTodos();
        } catch (error) {
            console.error('Error deleting todo:', error);
        }
    };

    return (
        <ul className="todo-list">
            {todos.map((todo) => (
                <li key={todo.id} className={todo.completed ? 'completed' : ''}>
                    <span onClick={() => handleUpdate(todo.id, { completed: !todo.completed })}>
                        {todo.text}
                    </span>
                    <button onClick={() => handleDelete(todo.id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default TodoList;