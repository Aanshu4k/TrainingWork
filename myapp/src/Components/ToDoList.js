import React, { useState, useEffect } from 'react';

const TodoList = () => {
    const [todos, setTodos] = useState(() => {
        const storedTodos = localStorage.getItem('todos');
        return storedTodos ? JSON.parse(storedTodos) : [];
    });

    const [newTodoText, setNewTodoText] = useState('');

    const handleTodoClick = (id) => {
        setTodos(todos => todos.filter(todo => todo.id !== id));
    }

    const handleNewTodoChange = (event) => {
        setNewTodoText(event.target.value);
    }

    const handleNewTodoSubmit = (event) => {
        event.preventDefault();
        if (newTodoText.trim()) {
            const newTodo = { id: Date.now(), text: newTodoText };
            setTodos(todos => [...todos, newTodo]);
            setNewTodoText('');
        }
    }

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);
    const TodoList = ({ todos, onTodoClick }) => {
        return (
            <ul>
                {todos.map(todo => (
                    <li key={todo.id} onClick={() => onTodoClick(todo.id)}>
                        {todo.text}
                    </li>
                ))}
            </ul>
        );
    };
    return (
        <div>
            <h1>Todo List</h1>
            <TodoList todos={todos} onTodoClick={handleTodoClick} />
            <form onSubmit={handleNewTodoSubmit}>
                <input type="text" value={newTodoText} onChange={handleNewTodoChange} />
                <button type="submit">Add Todo</button>
            </form>
        </div>
    );
};

export default TodoList;